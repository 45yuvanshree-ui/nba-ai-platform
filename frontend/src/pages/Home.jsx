import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-3xl font-bold text-green-400">
          NBA AI Platform
        </h1>

        <Link
          to="/live-games"
          className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded-lg font-semibold"
        >
          Live Games
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-28">

        <h2 className="text-6xl md:text-7xl font-extrabold leading-tight max-w-5xl">
          AI-Powered <span className="text-green-400">NBA & WNBA</span>
          <br />
          Analytics Platform
        </h2>

        <p className="text-zinc-400 text-lg mt-8 max-w-2xl">
          Real-time basketball analytics, live predictions,
          player intelligence, matchup insights, and advanced AI-powered sports analysis.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center">

          <Link
            to="/nba"
            className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl text-xl font-bold"
          >
            Explore NBA
          </Link>

          <Link
            to="/wnba"
            className="bg-zinc-800 hover:bg-zinc-700 transition px-8 py-4 rounded-xl text-xl font-bold border border-zinc-700"
          >
            Explore WNBA
          </Link>

        </div>

      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 pb-20">

        {/* Card 1 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-400 transition duration-300">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Live Games
          </h3>

          <p className="text-zinc-400">
            Real-time NBA & WNBA scores, match stats,
            momentum tracking, and live analytics.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-400 transition duration-300">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            AI Predictions
          </h3>

          <p className="text-zinc-400">
            Advanced ML predictions for points,
            rebounds, assists, steals, and match outcomes.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-400 transition duration-300">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Player Analytics
          </h3>

          <p className="text-zinc-400">
            Deep player insights including shooting,
            3PT analysis, FT trends, and performance variance.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-400 transition duration-300">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Team Intelligence
          </h3>

          <p className="text-zinc-400">
            Pace analysis, defensive matchups,
            H2H comparisons, and tactical insights.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Home