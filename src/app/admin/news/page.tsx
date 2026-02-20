'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Plus, Trash2, Send, Clock, BookOpen } from 'lucide-react';

interface NewsItem {
    id: string;
    title: string;
    content: string;
    created_at: string;
}

export default function AdminNewsPage() {
    const { profile } = useAuth();
    const [news, setNews] = useState<NewsItem[]>([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const supabase = useMemo(() => createClient(), []);

    const fetchNews = useCallback(async () => {
        setIsLoading(true);
        const { data } = await supabase
            .from('news')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setNews(data);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    const handlePostNews = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !content) return;

        setIsSubmitting(true);
        const { error } = await supabase
            .from('news')
            .insert([{ title, content }]);

        if (!error) {
            setTitle('');
            setContent('');
            fetchNews();
        } else {
            console.error('Error posting news:', error);
            alert('Failed to post news. Check RLS policies?');
        }
        setIsSubmitting(false);
    };

    const handleDeleteNews = async (id: string) => {
        if (!confirm('Are you sure you want to delete this announcement?')) return;

        const { error } = await supabase
            .from('news')
            .delete()
            .eq('id', id);

        if (!error) {
            fetchNews();
        }
    };

    return (
        <div className="space-y-10 animate-fade-in pb-20">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-black italic tracking-tighter mb-2">
                        NEWS & <span className="text-brand-orange">ANNOUNCEMENTS</span>
                    </h1>
                    <p className="text-zinc-500 font-medium max-w-lg">Broadcast critical updates to the entire 1% architecture.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-zinc-900/50 border border-white/5 rounded-xl text-xs font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                        <BookOpen size={14} className="text-brand-orange" />
                        {news.length} Broadcasts
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Post News Form */}
                <div className="lg:col-span-1">
                    <section className="backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl p-8 sticky top-32 group relative overflow-hidden">
                        <div className="absolute top-0 right-[-10%] w-[100px] h-[100px] bg-brand-orange/10 blur-[50px] rounded-full"></div>

                        <h2 className="text-xl font-black italic tracking-tight mb-8 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center text-black">
                                <Plus size={18} />
                            </div>
                            NEW BROADCAST
                        </h2>

                        <form onSubmit={handlePostNews} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Archive Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g., PHase 3 Dynamics Live"
                                    className="w-full bg-black/40 border border-white/5 rounded-2xl p-4 text-white font-bold placeholder:text-zinc-700 focus:outline-none focus:border-brand-orange/30 focus:ring-1 focus:ring-brand-orange/20 transition-all"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-1">Detailed Content</label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Deploy the intelligence..."
                                    className="w-full bg-black/40 border border-white/5 rounded-2xl p-4 text-white font-bold placeholder:text-zinc-700 h-48 focus:outline-none focus:border-brand-orange/30 focus:ring-1 focus:ring-brand-orange/20 transition-all resize-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full group bg-white text-black font-black italic py-4 rounded-2xl hover:bg-brand-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSubmitting ? 'DEPLOYING...' : 'DEPLOY BROADCAST'}
                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </button>
                        </form>
                    </section>
                </div>

                {/* News List */}
                <div className="lg:col-span-2 space-y-8">
                    <h2 className="text-xl font-black italic tracking-tight flex items-center gap-3 text-zinc-400">
                        LATEST UPDATES
                        <div className="h-[1px] flex-1 bg-white/5"></div>
                    </h2>

                    {isLoading ? (
                        <div className="grid gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-40 bg-zinc-900/30 animate-pulse rounded-3xl border border-white/5"></div>
                            ))}
                        </div>
                    ) : news.length === 0 ? (
                        <div className="p-20 text-center backdrop-blur-xl bg-zinc-900/20 rounded-3xl border border-white/5 border-dashed">
                            <Clock size={48} className="mx-auto text-zinc-800 mb-6" />
                            <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">No Intel Broadcasted Yet</p>
                        </div>
                    ) : (
                        <div className="grid gap-6">
                            {news.map((item) => (
                                <div key={item.id} className="backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl p-8 group transition-all hover:bg-zinc-800/10 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-brand-orange/50 transition-all duration-500"></div>

                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-black italic tracking-tight uppercase group-hover:text-brand-orange transition-colors">{item.title}</h3>
                                        <button
                                            onClick={() => handleDeleteNews(item.id)}
                                            className="p-3 bg-red-500/0 hover:bg-red-500/10 text-zinc-600 hover:text-red-500 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                                            title="Decommission Update"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>

                                    <p className="text-zinc-400 font-medium leading-relaxed mb-6 whitespace-pre-wrap">{item.content}</p>

                                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
                                            <Clock size={12} className="text-zinc-800" />
                                            {new Date(item.created_at).toLocaleDateString()}
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-zinc-800"></div>
                                        <div className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">
                                            ID: {item.id.split('-')[0]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
