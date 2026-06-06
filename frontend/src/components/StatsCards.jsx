function StatsCards({ stats }) {
  const safeStats = stats || {
    total: 0,
    critical: 0,
    successRate: 0
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-slate-800 p-6 rounded-xl">
        <h3>Total Logs</h3>
        <p className="text-3xl font-bold">{safeStats.total}</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h3>Critical Issues</h3>
        <p className="text-3xl font-bold text-red-400">
          {safeStats.critical}
        </p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h3>Success Rate</h3>
        <p className="text-3xl font-bold text-green-400">
          {safeStats.successRate}%
        </p>
      </div>

    </div>
  );
}

export default StatsCards;