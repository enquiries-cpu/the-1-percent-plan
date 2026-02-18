'use client';

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <div className="text-zinc-500 text-sm">{new Date().toLocaleDateString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Users" value="--" />
        <StatCard title="Active Subs" value="--" />
        <StatCard title="Unread Messages" value="--" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="text-zinc-500 text-sm py-8 text-center italic">
            No recent activity.
          </div>
        </div>

        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">System Status</h2>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-zinc-300">Database connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
      <h3 className="text-zinc-400 text-xs font-medium uppercase tracking-wider mb-2">{title}</h3>
      <p className="text-4xl font-bold text-white">{value}</p>
    </div>
  );
}
