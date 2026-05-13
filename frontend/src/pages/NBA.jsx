import DashboardLayout from "../layouts/DashboardLayout"
import StatCard from "../components/StatCard"

function NBA() {
  return (
    <DashboardLayout title="NBA Dashboard">

      {/* Top Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard title="Live Games" value="8" />

        <StatCard title="Predictions Today" value="24" />

        <StatCard title="Top Players" value="120" />

        <StatCard title="Teams Tracked" value="30" />

      </div>

      {/* Section Title */}
      <div className="mt-12 mb-6">
        <h2 className="text-3xl font-bold">
          Today's Featured Games
        </h2>
      </div>

      {/* Live Game Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Game Card 1 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-400 transition">

          <div className="flex items-center justify-between mb-6">
            <span className="text-red-400 font-bold">
              LIVE
            </span>

            <span className="text-zinc-400">
              Q3 • 08:21
            </span>
          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Lakers
              </h3>

              <p className="text-3xl font-bold text-green-400">
                88
              </p>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Warriors
              </h3>

              <p className="text-3xl font-bold text-green-400">
                91
              </p>
            </div>

          </div>

        </div>

        {/* Game Card 2 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-400 transition">

          <div className="flex items-center justify-between mb-6">
            <span className="text-yellow-400 font-bold">
              UPCOMING
            </span>

            <span className="text-zinc-400">
              8:30 PM
            </span>
          </div>

          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Celtics
              </h3>

              <p className="text-xl text-zinc-400">
                vs
              </p>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Bucks
              </h3>

              <p className="text-xl text-zinc-400">
                Tonight
              </p>
            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default NBA