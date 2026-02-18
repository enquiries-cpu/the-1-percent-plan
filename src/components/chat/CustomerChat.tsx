'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Send, User, ChevronDown } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/context/AuthContext';

interface Message {
    id: string;
    user_id: string;
    sender_id: string;
    content: string;
    created_at: string;
}

export default function CustomerChat() {
    const { user, profile } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const supabase = createClient();

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const fetchMessages = useCallback(async () => {
        if (!user) return;
        const { data, error } = await supabase
            .from('messages')
            .select('*')
            .eq('user_id', user.id)
            .order('created_at', { ascending: true });

        if (data) setMessages(data);
    }, [user, supabase]);

    useEffect(() => {
        if (user && isOpen) {
            fetchMessages();

            // Subscribe to new messages for this user
            const channel = supabase
                .channel(`chat:${user.id}`)
                .on(
                    'postgres_changes',
                    {
                        event: 'INSERT',
                        schema: 'public',
                        table: 'messages',
                        filter: `user_id=eq.${user.id}`,
                    },
                    (payload) => {
                        const msg = payload.new as Message;
                        setMessages((prev) => [...prev, msg]);
                    }
                )
                .subscribe();

            return () => {
                supabase.removeChannel(channel);
            };
        }
    }, [user, isOpen, fetchMessages, supabase]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !newMessage.trim() || isSending) return;

        setIsSending(true);
        const { error } = await supabase.from('messages').insert([
            {
                user_id: user.id,
                sender_id: user.id,
                content: newMessage.trim(),
            },
        ]);

        if (!error) {
            setNewMessage('');
        } else {
            console.error('Error sending message:', error);
        }
        setIsSending(false);
    };


    if (!user) return null; // Only show for logged in users

    return (
        <div className="fixed bottom-6 right-6 z-[200]">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-[85vw] sm:w-[380px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
                    {/* Header */}
                    <header className="p-4 bg-zinc-800 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center">
                                <User size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold">HUB Support</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Online</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
                            <ChevronDown size={20} />
                        </button>
                    </header>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
                        {messages.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8">
                                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-zinc-600">
                                    <MessageCircle size={32} />
                                </div>
                                <h4 className="font-bold text-zinc-300">Start a Conversation</h4>
                                <p className="text-xs text-zinc-500 mt-1">Chat directly with the HUB elite coaching team.</p>
                            </div>
                        ) : (
                            messages.map((msg) => {
                                const isMe = msg.sender_id === user.id;
                                return (
                                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl text-sm ${isMe
                                                ? 'bg-brand-orange text-white rounded-br-none'
                                                : 'bg-zinc-800 text-zinc-200 rounded-bl-none'
                                                }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Footer Input */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-zinc-800/50 border-t border-zinc-800 flex gap-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Ask a question..."
                            className="flex-1 bg-black border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-white/20 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={isSending || !newMessage.trim()}
                            className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all disabled:opacity-50"
                        >
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
