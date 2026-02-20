'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';
import { UserProfile } from '@/context/AuthContext';
import { Trash2, UserCog, Mail, Users } from 'lucide-react';

// Stable singleton client - avoids infinite useCallback loops
const supabase = createClient();

export default function AdminUsersPage() {
    const [users, setUsers] = useState<UserProfile[]>([]);
    const [loading, setLoading] = useState(true);
    const supabase = useMemo(() => createClient(), []);

    const fetchUsers = useCallback(async () => {
        const { data } = await supabase
            .from('profiles')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setUsers(data as any); // Cast for simplicity now
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const handleCancelSubscription = async (userId: string) => {
        if (!confirm('Are you sure you want to cancel this users subscription?')) return;

        const { error } = await supabase
            .from('profiles')
            .update({ subscription_status: 'canceled' })
            .eq('id', userId);

        if (!error) fetchUsers();
    };

    return (
        <div className="space-y-10 animate-fade-in pb-20">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-black italic tracking-tighter mb-2">
                        USER <span className="text-brand-orange">BASE</span>
                    </h1>
                    <p className="text-zinc-500 font-medium">Manage the 1% athlete archive and subscription intelligence.</p>
                </div>
                <div className="px-5 py-2.5 bg-zinc-900/50 border border-white/5 rounded-xl text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-3">
                    <Users size={16} className="text-brand-orange" />
                    Active Athletes: <span className="text-white">{users.length}</span>
                </div>
            </header>

            <div className="backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"></div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="p-6 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Athlete Profile</th>
                                <th className="p-6 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Access Intelligence</th>
                                <th className="p-6 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Status Check</th>
                                <th className="p-6 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Decommission</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {loading ? (
                                <tr><td colSpan={4} className="p-20 text-center text-zinc-600 font-bold uppercase tracking-widest text-xs">Accessing Database...</td></tr>
                            ) : users.length === 0 ? (
                                <tr><td colSpan={4} className="p-20 text-center text-zinc-600 font-bold uppercase tracking-widest text-xs">Archive Empty</td></tr>
                            ) : (
                                users.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/5 transition-all group">
                                        <td className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center text-white font-black italic shadow-lg group-hover:scale-110 transition-transform">
                                                    {user.display_name?.charAt(0).toUpperCase() || 'U'}
                                                </div>
                                                <div>
                                                    <div className="font-black italic text-white tracking-tight">{user.display_name || 'Anonymous'}</div>
                                                    <div className="text-[10px] text-zinc-500 font-bold flex items-center gap-1.5 mt-0.5">
                                                        <Mail size={10} />
                                                        {user.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${user.role === 'admin' ? 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-zinc-700'}`}></div>
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${user.role === 'admin' ? 'text-purple-400' : 'text-zinc-500'}`}>
                                                    {user.role}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${user.subscription_status === 'active'
                                                ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                                : 'bg-red-500/10 text-red-400 border-red-500/20'
                                                }`}>
                                                {user.subscription_status}
                                            </span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleCancelSubscription(user.id)}
                                                    className="p-3 bg-red-500/0 hover:bg-red-500/10 text-zinc-600 hover:text-red-500 rounded-xl transition-all"
                                                    title="Cancel Subscription"
                                                >
                                                    <UserCog size={18} />
                                                </button>
                                                <button
                                                    className="p-3 bg-white/0 hover:bg-white/10 text-zinc-600 hover:text-white rounded-xl transition-all"
                                                    title="Archive Profile"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl p-8 border-dashed flex flex-col items-center justify-center text-center">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-2">Automated Lifecycle</p>
                    <p className="text-zinc-500 text-sm font-medium">Inactive profiles are archived every 30 days.</p>
                </div>
                <div className="backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl p-8 border-dashed flex flex-col items-center justify-center text-center">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-2">Data Integrity</p>
                    <p className="text-zinc-500 text-sm font-medium">Profile synchronization is currently encrypted and active.</p>
                </div>
            </div>
        </div>
    );
}
