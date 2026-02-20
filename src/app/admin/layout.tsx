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
    <div className="min-h-screen bg-[#0a0c10] text-white flex flex-col md:flex-row font-sans selection:bg-brand-orange/30">
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <aside className="w-full md:w-72 backdrop-blur-2xl bg-zinc-950/40 border-r border-white/5 p-8 flex flex-col md:h-screen sticky top-0 z-50">
        <div className="font-black text-3xl tracking-tighter mb-10 flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300">
            <span className="text-black text-xl italic pt-0.5 pr-0.5">1%</span>
          </div>
          <div className="flex flex-col">
            <span className="leading-none">ADMIN</span>
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mt-1">Architecture</span>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5 flex-1">
          <NavLink href="/admin" icon={<LayoutDashboard size={20} />}>Overview</NavLink>
          <NavLink href="/admin/users" icon={<Users size={20} />}>User Base</NavLink>
          <NavLink href="/admin/chat" icon={<MessageSquare size={20} />}>Live Support</NavLink>
          <NavLink href="/admin/news" icon={<Newspaper size={20} />}>Broadcasts</NavLink>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-white/5 rounded-xl border border-white/5">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold ring-2 ring-zinc-700">
              {profile?.display_name?.[0]?.toUpperCase() || 'A'}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold truncate">{profile?.display_name || 'Administrator'}</span>
              <span className="text-[10px] text-zinc-500 truncate">System Access</span>
            </div>
          </div>

          <button
            onClick={() => logout()}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-zinc-500 hover:text-red-400 transition-all duration-300 w-full text-left group"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Terminate Session</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-12 overflow-y-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  const router = useRouter();
  // We can't easily check 'pathname' here without 'usePathname' from 'next/navigation'
  // But let's keep it clean for now.

  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300 group"
    >
      <span className="group-hover:text-brand-orange transition-colors duration-300">
        {icon}
      </span>
      <span className="text-sm font-bold tracking-tight">{children}</span>
    </Link>
  );
}
