-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create profiles table
create table if not exists public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  display_name text,
  role text default 'user' check (role in ('user', 'admin')),
  subscription_status text default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Policies for profiles
do $$ 
begin
  if not exists (select 1 from pg_policies where policyname = 'Public profiles are viewable by everyone.' and tablename = 'profiles') then
    create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
  end if;
  
  if not exists (select 1 from pg_policies where policyname = 'Users can insert their own profile.' and tablename = 'profiles') then
    create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
  end if;

  if not exists (select 1 from pg_policies where policyname = 'Users can update own profile.' and tablename = 'profiles') then
    create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);
  end if;
end $$;

-- Create messages table (for chat)
-- Revised Messages Table for Simple Support Chat
drop table if exists public.messages;
create table if not exists public.messages (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) not null, -- The customer this chat belongs to
    sender_id uuid references public.profiles(id) not null, -- Who actually sent this specific message (user or admin)
    content text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    is_read boolean default false
);

alter table public.messages enable row level security;

-- Policies for messages
do $$
begin
  if not exists (select 1 from pg_policies where policyname = 'Users can view their own chat' and tablename = 'messages') then
    create policy "Users can view their own chat" on public.messages for select using (auth.uid() = user_id);
  end if;

  if not exists (select 1 from pg_policies where policyname = 'Users can send messages' and tablename = 'messages') then
    create policy "Users can send messages" on public.messages for insert with check (auth.uid() = user_id);
  end if;

  if not exists (select 1 from pg_policies where policyname = 'Admins can view all messages' and tablename = 'messages') then
    create policy "Admins can view all messages" on public.messages for select using (
        exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
    );
  end if;

  if not exists (select 1 from pg_policies where policyname = 'Admins can reply' and tablename = 'messages') then
    create policy "Admins can reply" on public.messages for insert with check (
        exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
    );
  end if;
end $$;

-- Create news table
create table if not exists public.news (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  content text not null,
  author_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.news enable row level security;

do $$
begin
  if not exists (select 1 from pg_policies where policyname = 'News is viewable by everyone' and tablename = 'news') then
    create policy "News is viewable by everyone" on public.news for select using (true);
  end if;

  if not exists (select 1 from pg_policies where policyname = 'Only admins can insert news' and tablename = 'news') then
    create policy "Only admins can insert news" on public.news for insert with check (
      exists (
        select 1 from public.profiles
        where profiles.id = auth.uid() and profiles.role = 'admin'
      )
    );
  end if;
end $$;

-- Function to handle new user signup (automatically create profile)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, display_name, role)
  values (
    new.id, 
    new.email, 
    new.raw_user_meta_data->>'display_name',
    'user' -- Always default to user, change to admin manually in dashboard
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to call the function
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- RELOAD SCHEMA CACHE (IMPORTANT)
-- This forces PostgREST to refresh its cache so it can see the new/existing tables.
-- You might need to run this separately or wait a few minutes.
-- In some Supabase versions, this happens automatically on DDL changes, 
-- but sometimes a manual trigger is needed.
NOTIFY pgrst, 'reload schema';
