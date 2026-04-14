import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Header from "./components/Header"
import Toolbaar from "./components/Toolbar"
import { fetchUsers } from "./api/users"
import QueryInfo from "./components/QueryInfo"
import UserCard from "./components/UserCard"
import LoadingState from "./components/LoadingState"
import ErrorState from "./components/ErrorState"




function App() {

  const [search, setSearch] = useState("")
  const [selectedIds, setSelectedIds] = useState([])

  const { data = [], isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,

  })

  const filteredUsers = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return data

    return data.filter((user) => {
      return (
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.company?.name.toLowerCase().includes(term)
      )
    })
  }, [data, search])

  const toggleSelected = (id) => {
    setSelectedIds((prev) => 
      prev.includes(id) 
        ? prev.filter((item) => item !== id) 
        : [...prev, id]
    )
  }

  if (isLoading) return <LoadingState />
  if (isError) return <ErrorState message={error.message} onRetry={refetch} />

  return (
    <main className="min-h-screen bg-gradient-t0-br from-slate-100 via-white to-sky-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <Header
          totalUsers={data.length}
          selectedCount={selectedIds.length}
          isFetching={isFetching}
        />

        <Toolbaar
          search={search}
          setSearch={setSearch}
          onRefrech={refetch}
          isFetching={isFetching}
        />

        <QueryInfo />

        {filteredUsers.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-800">No users found.</p>
            <p className="mt-2 text-sm text-slate-500">Try a different search keyword</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isSelected={selectedIds.includes(user.id)}
                onToggle={toggleSelected}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  )
}

export default App
