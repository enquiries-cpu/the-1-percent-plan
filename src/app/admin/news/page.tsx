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
        <div className="space-y-8 animate-fade-in">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">News & Announcements</h1>
                    <p className="text-zinc-400 mt-1">Broadcast updates to all hub users.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Post News Form */}
                <div className="lg:col-span-1">
                    <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 sticky top-8">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <Plus size={20} className="text-brand-orange" />
                            New Announcement
                        </h2>
                        <form onSubmit={handlePostNews} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="e.g., New Mobility Series Live!"
                                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">Content</label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Share the details..."
                                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white h-40 focus:outline-none focus:border-white/20 transition-colors"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <Send size={18} />
                                {isSubmitting ? 'Posting...' : 'Post Update'}
                            </button>
                        </form>
                    </section>
                </div>

                {/* News List */}
                <div className="lg:col-span-2">
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <BookOpen size={20} className="text-zinc-400" />
                            Past Announcements
                        </h2>

                        {isLoading ? (
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-32 bg-zinc-900 animate-pulse rounded-xl border border-zinc-800"></div>
                                ))}
                            </div>
                        ) : news.length === 0 ? (
                            <div className="p-12 text-center bg-zinc-900/50 rounded-xl border border-zinc-800 border-dashed">
                                <Clock size={40} className="mx-auto text-zinc-700 mb-4" />
                                <p className="text-zinc-500">No announcements posted yet.</p>
                            </div>
                        ) : (
                            <div className="grid gap-4">
                                {news.map((item) => (
                                    <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 group transition-all hover:bg-zinc-800/80">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold">{item.title}</h3>
                                            <button
                                                onClick={() => handleDeleteNews(item.id)}
                                                className="p-2 text-zinc-600 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                                title="Delete Announcement"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                        <p className="text-zinc-400 text-sm whitespace-pre-wrap leading-relaxed">{item.content}</p>
                                        <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                                            <Clock size={12} />
                                            {new Date(item.created_at).toLocaleDateString()} at {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
