export default function QueryInfo() {
    return (
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                queryKey: ['users']
            </span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                StaleTime: 5000ms
            </span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200">
                Cached & background refresh
            </span>
        </div>
    )
}