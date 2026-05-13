import {
  Home,
  BarChart3,
  Trophy,
  Users,
  Activity,
} from "lucide-react"

function DashboardLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      {/* Sidebar */}
      <aside className="w-72 bg-zinc-900 border-r border-zinc-800 p-6 hidden md:flex flex-col">

        <h1 className="text-3xl font-bold text-green-400 mb-10">
          NBA AI
        </h1>

        <nav className="space-y-4">

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 cursor-pointer transition">
            <Home size={22} />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 cursor-pointer transition">
            <BarChart3 size={22} />
            <span>Analytics</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 cursor-pointer transition">
            <Trophy size={22} />
            <span>Predictions</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 cursor-pointer transition">
            <Users size={22} />
            <span>Players</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 cursor-pointer transition">
            <Activity size={22} />
            <span>Live Games</span>
          </div>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1">

        {/* Top Navbar */}
        <header className="border-b border-zinc-800 px-8 py-6 flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            {title}
          </h2>

          <div className="bg-green-500 px-4 py-2 rounded-lg font-semibold">
            AI Analytics
          </div>

        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>

      </main>

    </div>
  )
}

export default DashboardLayout