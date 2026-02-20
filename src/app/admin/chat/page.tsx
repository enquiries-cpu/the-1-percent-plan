'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Search, Send, MessageCircle, Clock, Check } from 'lucide-react';

interface Message {
    id: string;
    user_id: string;
    sender_id: string;
    content: string;
    created_at: string;
    is_read: boolean;
}

interface ChatUserInfo {
    id: string;
    email: string;
    display_name: string;
    last_message?: string;
    last_message_at?: string;
    unread_count: number;
}

export default function AdminChatPage() {
    const { user: adminUser } = useAuth();
    const [users, setUsers] = useState<ChatUserInfo[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    // useMemo ensures client is created once, client-side only (not at build time)
    const supabase = useMemo(() => createClient(), []);

    const fetchUsers = useCallback(async () => {
        // ... (body of fetchUsers)
        const { data: messagesData, error: messagesError } = await supabase
            .from('messages')
            .select('user_id, content, created_at, is_read')
            .order('created_at', { ascending: false });

        if (messagesError) return;

        const userMap = new Map<string, any>();
        messagesData.forEach((msg) => {
            if (!userMap.has(msg.user_id)) {
                userMap.set(msg.user_id, {
                    last_message: msg.content,
                    last_message_at: msg.created_at,
                    unread_count: msg.is_read ? 0 : 1
                });
            }
        });

        const userIds = Array.from(userMap.keys());
        if (userIds.length === 0) {
            setIsLoading(false);
            return;
        }

        const { data: profiles } = await supabase
            .from('profiles')
            .select('id, email, display_name')
            .in('id', userIds);

        if (profiles) {
            const usersList = profiles.map((p) => ({
                ...p,
                ...userMap.get(p.id)
            })).sort((a, b) => new Date(b.last_message_at).getTime() - new Date(a.last_message_at).getTime());

            setUsers(usersList);
        }
        setIsLoading(false);
    }, []);

    const fetchMessages = useCallback(async (userId: string) => {
        const { data } = await supabase
            .from('messages')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: true });

        if (data) setMessages(data);

        await supabase
            .from('messages')
            .update({ is_read: true })
            .eq('user_id', userId)
            .eq('is_read', false);
    }, []);

    useEffect(() => {
        fetchUsers();

        const channel = supabase
            .channel('admin_messages_all')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'messages' },
                (payload) => {
                    const msg = payload.new as Message;
                    fetchUsers();

                    if (msg.user_id === selectedUserId) {
                        setMessages((prev) => [...prev, msg]);
                    }
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [selectedUserId, fetchUsers]);

    useEffect(() => {
        if (selectedUserId) {
            fetchMessages(selectedUserId);
        }
    }, [selectedUserId, fetchMessages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!adminUser || !selectedUserId || !newMessage.trim() || isSending) return;

        setIsSending(true);
        const { error } = await supabase.from('messages').insert([
            {
                user_id: selectedUserId,
                sender_id: adminUser.id,
                content: newMessage.trim(),
            },
        ]);

        if (!error) {
            setNewMessage('');
            // Message will be added via realtime subscription
        }
        setIsSending(false);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="h-[calc(100vh-140px)] flex gap-6 animate-fade-in">
            {/* Sidebar - User List */}
            <aside className="w-80 flex flex-col backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-white/5 bg-white/5">
                    <h2 className="text-xl font-black italic tracking-tight flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center text-black">
                            <MessageCircle size={18} />
                        </div>
                        SUPPORT <span className="text-zinc-500">INTEL</span>
                    </h2>
                    <div className="mt-6 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-brand-orange transition-colors" size={16} />
                        <input
                            type="text"
                            placeholder="Search athletes..."
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 pl-11 pr-4 text-xs font-bold focus:outline-none focus:border-brand-orange/30 focus:ring-1 focus:ring-brand-orange/20 transition-all placeholder:text-zinc-700"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {isLoading ? (
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-20 bg-white/5 animate-pulse rounded-2xl border border-white/5"></div>
                            ))}
                        </div>
                    ) : users.length === 0 ? (
                        <div className="p-12 text-center">
                            <Clock size={32} className="mx-auto mb-4 text-zinc-800" />
                            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">No Active Comms</p>
                        </div>
                    ) : (
                        users.map((u) => (
                            <button
                                key={u.id}
                                onClick={() => setSelectedUserId(u.id)}
                                className={`w-full p-4 flex items-center gap-4 transition-all rounded-2xl border ${selectedUserId === u.id
                                    ? 'bg-brand-orange/10 border-brand-orange/30 shadow-[0_0_20px_rgba(255,87,34,0.05)]'
                                    : 'bg-transparent border-transparent hover:bg-white/5'
                                    } group relative overflow-hidden`}
                            >
                                {selectedUserId === u.id && (
                                    <div className="absolute left-0 top-0 w-1 h-full bg-brand-orange"></div>
                                )}
                                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/5 flex items-center justify-center text-zinc-400 font-black italic group-hover:scale-110 transition-transform">
                                    {u.display_name?.[0]?.toUpperCase() || u.email[0].toUpperCase()}
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className={`font-black italic text-sm truncate tracking-tight ${selectedUserId === u.id ? 'text-brand-orange' : 'text-white'}`}>
                                            {u.display_name || u.email.split('@')[0]}
                                        </span>
                                        {u.unread_count > 0 && (
                                            <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(255,87,34,0.5)]"></div>
                                        )}
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-medium truncate uppercase tracking-tight">
                                        {u.last_message || 'No messages yet'}
                                    </p>
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </aside>

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
                {selectedUserId ? (
                    <>
                        {/* Header */}
                        <header className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/30 text-brand-orange flex items-center justify-center font-black italic">
                                    {users.find(u => u.id === selectedUserId)?.display_name?.[0].toUpperCase() || 'U'}
                                </div>
                                <div>
                                    <h3 className="font-black italic text-lg tracking-tight text-white uppercase">
                                        {users.find(u => u.id === selectedUserId)?.display_name || 'Anonymous Athlete'}
                                    </h3>
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{users.find(u => u.id === selectedUserId)?.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-950/50 rounded-full border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Secure Link Active</span>
                            </div>
                        </header>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-6">
                            {messages.map((msg) => {
                                const isFromAdmin = msg.sender_id === adminUser?.id;
                                return (
                                    <div key={msg.id} className={`flex ${isFromAdmin ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                                        <div className="max-w-[70%] group">
                                            <div
                                                className={`p-5 rounded-3xl text-sm font-bold leading-relaxed shadow-xl ${isFromAdmin
                                                    ? 'bg-brand-orange text-white rounded-br-none'
                                                    : 'bg-zinc-800 border border-white/5 text-zinc-200 rounded-bl-none'
                                                    }`}
                                            >
                                                {msg.content}
                                            </div>
                                            <div className={`mt-2 flex items-center gap-2 text-[9px] text-zinc-600 font-black uppercase tracking-[0.1em] ${isFromAdmin ? 'justify-end' : 'justify-start'}`}>
                                                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                {isFromAdmin && <Check size={12} className="text-zinc-500" />}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-6 bg-white/5 border-t border-white/5">
                            <form onSubmit={handleSendMessage} className="flex gap-4 relative">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Transmit intelligence..."
                                    className="flex-1 bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-brand-orange/30 focus:ring-1 focus:ring-brand-orange/20 transition-all placeholder:text-zinc-700 shadow-inner"
                                />
                                <button
                                    type="submit"
                                    disabled={isSending || !newMessage.trim()}
                                    className="bg-white text-black px-8 py-4 rounded-2xl font-black italic text-sm hover:bg-brand-orange hover:text-white transition-all disabled:opacity-50 flex items-center gap-3 active:scale-95 duration-200"
                                >
                                    {isSending ? 'SENDING...' : 'SEND'}
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center overflow-hidden">
                            <span className="text-[20vw] font-black italic tracking-tighter -rotate-12 translate-y-20">ARCHITECTURE</span>
                        </div>
                        <div className="w-24 h-24 bg-zinc-900 border border-white/5 rounded-3xl flex items-center justify-center mb-8 text-zinc-800 shadow-2xl relative">
                            <MessageCircle size={48} className="relative z-10" />
                            <div className="absolute inset-0 bg-brand-orange/5 blur-2xl rounded-full"></div>
                        </div>
                        <h3 className="text-2xl font-black italic text-white tracking-tight uppercase">SELECT AN ATHLETE</h3>
                        <p className="text-sm text-zinc-500 mt-4 max-w-xs font-bold uppercase tracking-widest leading-relaxed">
                            Open a secure link to manage communication and support intelligence.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
