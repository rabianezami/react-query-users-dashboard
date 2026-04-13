export default function Header({ totalUsers, selectedCount, isFetching }) {
  return (
    <header className="mb-8 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-2 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700">
            TanStack Query v5 Demo
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            React Query Users Dashboard
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
            A clean component-based example with React + Vite + Tailwind using the official Vite plugin.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:min-w-80">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Total Users</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{totalUsers}</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Selected</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{selectedCount}</p>
          </div>

          <div className="col-span-2 rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Background Refetch</p>
            <p className="mt-2 text-sm font-semibold text-slate-700">
              {isFetching ? 'Refreshing data...' : 'Data is fresh from cache/server'}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
