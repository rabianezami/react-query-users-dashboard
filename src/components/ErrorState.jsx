export default function ErrorState({ message, onRetry }) {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-sky-100 py-10 px-4 text-slate-900">
            <div className="mx-auto max-w-3xl rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm">
                <h2 className="text-lg font-bold text-red-700">Failed to load users</h2>
                <p className="mt-2 text-sm text-red-600">{message}</p>
                <button
                    onClick={onRetry}
                    className="mt-4 rounded-2xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                    Try Again
                </button>
            </div>
        </main>
    )
}