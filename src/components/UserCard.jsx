export default function UserCard({ user, isSelected, onToggle }) {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">
                        {user.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                        {user.username}
                    </p>
                </div>

                <button
                    onClick={() => onToggle(user.id)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${isSelected
                            ? "bg-sky-100 text-sky-700"
                            : "bg-slate-100 text-slate-"
                        }`}
                >
                    {isSelected ? "Selected" : "Select"}
                </button>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
                <p><span className="font-semibold text-slate-800">Email:</span> {user.email}</p>
                <p><span className="font-semibold text-slate-800">Phone:</span> {user.phone}</p>
                <p><span className="font-semibold text-slate-800">Company:</span> {user.company?.name}</p>
                <p><span className="font-semibold text-slate-800">City:</span> {user.address?.city}</p>
            </div>
        </article>
    )
}