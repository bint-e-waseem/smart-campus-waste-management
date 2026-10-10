export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Campus Waste Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm font-medium text-slate-500">Total Bins</p>
          <h2 className="text-3xl font-extrabold text-slate-800 mt-2">24</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm font-medium text-slate-500">Bins Needing Attention</p>
          <h2 className="text-3xl font-extrabold text-amber-600 mt-2">4</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm font-medium text-slate-500">Recycling Rate</p>
          <h2 className="text-3xl font-extrabold text-emerald-600 mt-2">68%</h2>
        </div>
      </div>
    </div>
  );
}