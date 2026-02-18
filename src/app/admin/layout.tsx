'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, MessageSquare, Newspaper, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, profile, isLoading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      // Check if user is logged in and has admin role
      // Note: profile.role is what we will use, populated from public.profiles
      if (!user || profile?.role !== 'admin') {
        // Optionally redir to home, or show unauthorized
        // For now, let's just push to home if not admin
        if (!isLoading && (!user || (profile && profile.role !== 'admin'))) {
          router.push('/');
        }
      }
    }
  }, [user, profile, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user || profile?.role !== 'admin') {
    return null; // Will redirect via effect
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-sans">
      <aside className="w-full md:w-64 border-r border-white/10 bg-zinc-900/50 p-6 flex flex-col md:h-screen sticky top-0">
        <div className="font-bold text-2xl tracking-tighter text-blue-500 mb-8 flex items-center gap-2">
          APH <span className="text-white text-sm font-normal bg-white/10 px-2 py-0.5 rounded">Admin</span>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <NavLink href="/admin" icon={<LayoutDashboard size={18} />}>Dashboard</NavLink>
          <NavLink href="/admin/users" icon={<Users size={18} />}>Users</NavLink>
          <NavLink href="/admin/chat" icon={<MessageSquare size={18} />}>Support Chat</NavLink>
          <NavLink href="/admin/news" icon={<Newspaper size={18} />}>News & Updates</NavLink>
        </nav>

        <button
          onClick={() => logout()}
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 text-zinc-400 hover:text-red-400 transition-colors mt-auto w-full text-left"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}
