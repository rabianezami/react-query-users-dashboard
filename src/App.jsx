import Header from "./components/Header"


function App() {
  

  return (
    <main className="min-h-screen bg-gradient-t0-br from-slate-100 via-white to-sky-100 px-4 py-10 text-slate-900">
      <div>
        <Header 
        totalUsers={0} 
        selectedCount={0}
        isFetching={false} 
        />
      </div>
    </main>
  )
}

export default App
