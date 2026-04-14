export default function UserCardSkeleton() {
    return (
        <div className="animate-pluse rounded-3xl border border-slate-200 p-5">
            <div className="mb-4 h-5 w-2/3 rounded bg-slate-200" />
            <div className="mb-3 h-4 w-1/2 rounded bg-slate-200" />
            <div className="mb-3 h-4 w-3/4 rounded bg-slate-200" />
            <div className="h-10 rounded-2xl bg-slate-100" />
        </div>
    )
}