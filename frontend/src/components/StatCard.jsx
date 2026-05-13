function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-green-400 transition duration-300">

      <h3 className="text-zinc-400 mb-2">
        {title}
      </h3>

      <p className="text-4xl font-bold text-green-400">
        {value}
      </p>

    </div>
  )
}

export default StatCard