'use client';

export default function AdminDashboard() {
  return (
    <div className="space-y-10 animate-fade-in">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter mb-2">
            SYSTEM <span className="text-brand-orange">OVERVIEW</span>
          </h1>
          <p className="text-zinc-500 font-medium">Real-time performance architecture monitoring.</p>
        </div>
        <div className="px-5 py-2.5 bg-zinc-900/50 border border-white/5 rounded-full text-zinc-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Athletes" value="1,284" icon="Users" color="blue" />
        <StatCard title="Active Subscriptions" value="942" icon="CreditCard" color="orange" />
        <StatCard title="System Uptime" value="99.9%" icon="Activity" color="green" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange opacity-40 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-xl font-black italic tracking-tight mb-6 flex items-center gap-2">
              RECENT ACTIVITY
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <span className="font-bold">#</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">New user registration: damonpf@hotmail.co.uk</p>
                    <p className="text-xs text-zinc-500 font-medium mt-0.5">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="backdrop-blur-xl bg-zinc-900/30 border border-white/5 rounded-3xl p-8">
            <h2 className="text-xl font-black italic tracking-tight mb-6">QUICK ACTIONS</h2>
            <div className="grid gap-3">
              <ActionButton label="Broadcast Update" sub="Post to news feed" />
              <ActionButton label="Manage Billing" sub="Stripe dashboard" />
              <ActionButton label="Export Data" sub="CSV format" />
            </div>
          </div>

          <div className="backdrop-blur-xl bg-zinc-950/50 border border-white/5 rounded-3xl p-8 border-dashed flex flex-col items-center justify-center text-center py-12">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-700 mb-4">
              <span className="font-black italic">!</span>
            </div>
            <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest">No Critical Alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }: { title: string, value: string, icon: string, color: 'blue' | 'orange' | 'green' }) {
  const colors = {
    blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20 shadow-blue-500/5',
    orange: 'text-brand-orange bg-brand-orange/10 border-brand-orange/20 shadow-brand-orange/5',
    green: 'text-green-500 bg-green-500/10 border-green-500/20 shadow-green-500/5'
  };

  return (
    <div className={`backdrop-blur-xl bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/60 transition-all duration-300 group relative shadow-2xl ${colors[color].split(' ').pop()}`}>
      <div className={`absolute top-0 right-0 p-4 font-black italic text-4xl opacity-[0.03] group-hover:opacity-[0.07] transition-opacity`}>
        {title.split(' ')[0]}
      </div>
      <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{title}</h3>
      <p className="text-5xl font-black italic tracking-tighter text-white mb-2">{value}</p>
      <div className="flex items-center gap-2 mt-4">
        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${color === 'orange' ? 'bg-brand-orange' : color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Live Metrics</span>
      </div>
    </div>
  );
}

function ActionButton({ label, sub }: { label: string, sub: string }) {
  return (
    <button className="w-full text-left p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group">
      <p className="text-sm font-bold group-hover:text-brand-orange transition-colors">{label}</p>
      <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-tight mt-0.5">{sub}</p>
    </button>
  );
}
