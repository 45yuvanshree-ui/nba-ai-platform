import DashboardLayout from "../layouts/DashboardLayout"

function NBA() {
  return (
    <DashboardLayout title="NBA Dashboard">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-zinc-400 mb-2">
            Live Games
          </h3>

          <p className="text-4xl font-bold text-green-400">
            8
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-zinc-400 mb-2">
            Predictions Today
          </h3>

          <p className="text-4xl font-bold text-green-400">
            24
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-zinc-400 mb-2">
            Top Players
          </h3>

          <p className="text-4xl font-bold text-green-400">
            120
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-zinc-400 mb-2">
            Teams Tracked
          </h3>

          <p className="text-4xl font-bold text-green-400">
            30
          </p>
        </div>

      </div>

    </DashboardLayout>
  )
}

export default NBA