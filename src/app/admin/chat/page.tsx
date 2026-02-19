'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Search, Send, User, MessageCircle, Clock, Check } from 'lucide-react';

// Stable singleton client - avoids infinite useCallback loops
const supabase = createClient();

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

        const { data: profiles, error: profilesError } = await supabase
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
        const { data, error } = await supabase
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
        <div className="h-[calc(100vh-160px)] flex bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            {/* Sidebar - User List */}
            <aside className="w-80 border-r border-zinc-800 flex flex-col">
                <div className="p-4 border-b border-zinc-800">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <MessageCircle className="text-brand-orange" size={20} />
                        Support Inbox
                    </h2>
                    <div className="mt-4 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            className="w-full bg-black border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-zinc-700"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {isLoading ? (
                        <div className="p-4 space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-16 bg-zinc-800/50 animate-pulse rounded-xl"></div>
                            ))}
                        </div>
                    ) : users.length === 0 ? (
                        <div className="p-8 text-center text-zinc-500 text-sm">
                            <Clock size={32} className="mx-auto mb-2 opacity-20" />
                            No conversations yet.
                        </div>
                    ) : (
                        users.map((u) => (
                            <button
                                key={u.id}
                                onClick={() => setSelectedUserId(u.id)}
                                className={`w-full p-4 flex items-center gap-3 transition-colors hover:bg-zinc-800/50 border-b border-zinc-800/50 ${selectedUserId === u.id ? 'bg-zinc-800/80 border-r-4 border-r-brand-orange' : ''
                                    }`}
                            >
                                <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-zinc-300 font-bold">
                                    {u.display_name?.[0]?.toUpperCase() || u.email[0].toUpperCase()}
                                </div>
                                <div className="flex-1 text-left overflow-hidden">
                                    <div className="flex justify-between items-start">
                                        <span className="font-bold text-sm truncate">{u.display_name || u.email}</span>
                                        <span className="text-[10px] text-zinc-500 whitespace-nowrap">
                                            {u.last_message_at ? new Date(u.last_message_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                        </span>
                                    </div>
                                    <p className="text-xs text-zinc-500 truncate mt-0.5">{u.last_message}</p>
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </aside>

            {/* Main Chat Area */}
            <main className="flex-1 flex flex-col bg-black/20">
                {selectedUserId ? (
                    <>
                        {/* Header */}
                        <header className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center font-bold text-xs">
                                    {users.find(u => u.id === selectedUserId)?.display_name?.[0].toUpperCase() || 'U'}
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">{users.find(u => u.id === selectedUserId)?.display_name || 'User'}</h3>
                                    <p className="text-[10px] text-zinc-500">{users.find(u => u.id === selectedUserId)?.email}</p>
                                </div>
                            </div>
                        </header>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {messages.map((msg) => {
                                const isFromAdmin = msg.sender_id === adminUser?.id;
                                return (
                                    <div key={msg.id} className={`flex ${isFromAdmin ? 'justify-end' : 'justify-start'}`}>
                                        <div className="max-w-[70%] group">
                                            <div
                                                className={`p-3 rounded-2xl text-sm ${isFromAdmin
                                                    ? 'bg-brand-orange text-white rounded-br-none'
                                                    : 'bg-zinc-800 text-zinc-200 rounded-bl-none'
                                                    }`}
                                            >
                                                {msg.content}
                                            </div>
                                            <div className={`mt-1 flex items-center gap-1 text-[9px] text-zinc-600 font-bold uppercase tracking-tight ${isFromAdmin ? 'justify-end' : 'justify-start'}`}>
                                                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                {isFromAdmin && <Check size={10} />}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-zinc-800 bg-zinc-900/50 flex gap-3">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type your reply..."
                                className="flex-1 bg-black border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-orange/50 transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={isSending || !newMessage.trim()}
                                className="bg-white text-black px-6 py-2 rounded-xl font-bold text-sm hover:bg-brand-orange hover:text-white transition-all disabled:opacity-50 flex items-center gap-2"
                            >
                                <Send size={16} />
                                Send
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
                        <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 text-zinc-700">
                            <MessageCircle size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-zinc-300">Select a Conversation</h3>
                        <p className="text-sm text-zinc-500 mt-2 max-w-xs">
                            Select a user from the sidebar to view their message history and send a reply.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
