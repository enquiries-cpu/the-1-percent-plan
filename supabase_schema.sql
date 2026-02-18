
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create profiles table
create table public.profiles (
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
create policy "Public profiles are viewable by everyone." on public.profiles
  for select using (true);

create policy "Users can insert their own profile." on public.profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on public.profiles
  for update using (auth.uid() = id);

-- Create messages table (for chat)
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  sender_id uuid references public.profiles(id) not null,
  receiver_id uuid references public.profiles(id), -- Target user
  -- If null, or if we just rely on sender/receiver ID to determine if it's user<->admin
  -- Let's make it simple: Messages are always between a user and an admin?
  -- Or just a flat list. 
  is_from_admin boolean default false,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  read_at timestamp with time zone
);

alter table public.messages enable row level security;

-- Policies for messages
-- Users can see messages sent by them or sent to them (if we used receiver_id, but for valid "admin" chat, 
-- usually the pattern is: User sends to System, Admin reads all.
-- But let's stick to a simple model: user_id column?
-- Let's stick to sender/receiver. When User sends, receiver is NULL (System/Admin) or we use a convention?
-- Better: "conversation_id" or just filter by user_id.

-- Revised Messages Table for Simple Support Chat
drop table if exists public.messages;
create table public.messages (
    id uuid default uuid_generate_v4() primary key,
    user_id uuid references public.profiles(id) not null, -- The customer this chat belongs to
    sender_id uuid references public.profiles(id) not null, -- Who actually sent this specific message (user or admin)
    content text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    is_read boolean default false
);

alter table public.messages enable row level security;

-- Policy: Users can see messages BELONGING to their own chat history (user_id = auth.uid())
create policy "Users can view their own chat" on public.messages
    for select using (auth.uid() = user_id);

-- Policy: Users can insert messages into their own chat
create policy "Users can send messages" on public.messages
    for insert with check (auth.uid() = user_id);

-- Policy: Admins can view ALL messages
create policy "Admins can view all messages" on public.messages
    for select using (
        exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
    );

-- Policy: Admins can reply (insert) to any message
create policy "Admins can reply" on public.messages
    for insert with check (
        exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
    );


-- Create news table
create table public.news (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  content text not null,
  author_id uuid references public.profiles(id) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.news enable row level security;

create policy "News is viewable by everyone" on public.news
  for select using (true);

create policy "Only admins can insert news" on public.news
  for insert with check (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

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
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
