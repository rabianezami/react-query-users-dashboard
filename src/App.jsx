import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Header from "./components/Header"
import Toolbaar from "./components/Toolbar"
import { fetchUsers } from "./api/users"
import QueryInfo from "./components/QueryInfo"


function App() {

  const [search, setSearch] = useState("")

  const { data = [], isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,

  })


  return (
    <main className="min-h-screen bg-gradient-t0-br from-slate-100 via-white to-sky-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <Header
          totalUsers={data.length}
          selectedCount={0}
          isFetching={isFetching}
        />

        <Toolbaar
          search={search}
          setSearch={setSearch}
          onRefrech={refetch}
          isFetching={isFetching}
        />

        <QueryInfo />
      </div>
    </main>
  )
}

export default App
