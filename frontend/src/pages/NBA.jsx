import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { fetchRecentGames } from "../services/api";

export default function NBA() {

    const [games, setGames] = useState([]);

    useEffect(() => {

        const loadGames = async () => {

            const data = await fetchRecentGames();

            setGames(data);
        };

        loadGames();

    }, []);

    return (
        <DashboardLayout>

            <div className="p-8 bg-black min-h-screen text-white">

                <h1 className="text-5xl font-bold mb-10">
                    NBA Dashboard
                </h1>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

                    <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                        <p className="text-zinc-400 mb-2">Recent Games</p>
                        <h2 className="text-5xl font-bold text-green-400">
                            {games.length}
                        </h2>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                        <p className="text-zinc-400 mb-2">Tracked Team</p>
                        <h2 className="text-4xl font-bold text-green-400">
                            Lakers
                        </h2>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                        <p className="text-zinc-400 mb-2">AI Status</p>
                        <h2 className="text-3xl font-bold text-green-400">
                            Active
                        </h2>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
                        <p className="text-zinc-400 mb-2">Prediction Engine</p>
                        <h2 className="text-3xl font-bold text-green-400">
                            Online
                        </h2>
                    </div>

                </div>

                {/* Real NBA Games */}
                <div>

                    <h2 className="text-4xl font-bold mb-8">
                        Real Lakers Recent Games
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {games.map((game, index) => (

                            <div
                                key={index}
                                className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800"
                            >

                                <div className="flex justify-between items-center mb-6">

                                    <span className="
                                        bg-green-500/20
                                        text-green-400
                                        px-4
                                        py-2
                                        rounded-full
                                        text-sm
                                        font-bold
                                    ">
                                        {game.result === "W"
                                            ? "WIN"
                                            : "LOSS"}
                                    </span>

                                    <span className="text-zinc-400">
                                        {game.date}
                                    </span>

                                </div>

                                <h3 className="text-3xl font-bold mb-4">
                                    {game.matchup}
                                </h3>

                                <div className="flex justify-between items-center">

                                    <p className="text-zinc-400">
                                        Lakers Points
                                    </p>

                                    <h2 className="text-5xl font-bold text-green-400">
                                        {game.points}
                                    </h2>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </DashboardLayout>
    );
}