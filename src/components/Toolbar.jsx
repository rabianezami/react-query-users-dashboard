 export default function Toolbaar({search, setSearch, onRefrech, isFetching}) {
    return (
        <div className="mb-6 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
                <input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, email or company..."
                  className="w-full border border-slate-200 bg-slate-50 rounded-2xl px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white"
                />
            </div>

            <button
              onClick={onRefrech}
              disabled={isFetching}
              className="bg-slate-900 text-white hover:bg-slate-800 inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isFetching ? "Refreshing..." : "Manually Refresh"}
            </button>
        </div>
    )
 }