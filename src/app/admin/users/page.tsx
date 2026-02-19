'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';
import { UserProfile } from '@/context/AuthContext';
import { Trash2, UserCog, Mail } from 'lucide-react';

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
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">User Management</h1>
                <div className="bg-zinc-900 px-4 py-2 rounded-lg text-sm text-zinc-400">
                    Total Users: <span className="text-white font-bold ml-2">{users.length}</span>
                </div>
            </div>

            <div className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 text-zinc-500 text-sm uppercase tracking-wider">
                            <th className="p-4 font-medium">User</th>
                            <th className="p-4 font-medium">Role</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium">Joined</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {loading ? (
                            <tr><td colSpan={5} className="p-8 text-center text-zinc-500">Loading users...</td></tr>
                        ) : users.length === 0 ? (
                            <tr><td colSpan={5} className="p-8 text-center text-zinc-500">No users found.</td></tr>
                        ) : (
                            users.map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                                                {user.display_name?.charAt(0).toUpperCase() || 'U'}
                                            </div>
                                            <div>
                                                <div className="font-medium text-white">{user.display_name || 'Unknown'}</div>
                                                <div className="text-xs text-zinc-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${user.role === 'admin' ? 'bg-purple-500/10 text-purple-400' : 'bg-zinc-800 text-zinc-400'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${user.subscription_status === 'active' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                                            }`}>
                                            {user.subscription_status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-zinc-500">
                                        {new Date().toLocaleDateString()} {/* No created_at in interface yet, add later */}
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                className="p-2 hover:bg-white/10 rounded text-zinc-400 hover:text-white"
                                                title="Email User"
                                            >
                                                <Mail size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleCancelSubscription(user.id)}
                                                className="p-2 hover:bg-red-500/10 rounded text-zinc-400 hover:text-red-400"
                                                title="Cancel Subscription"
                                            >
                                                <Trash2 size={16} />
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
    );
}
