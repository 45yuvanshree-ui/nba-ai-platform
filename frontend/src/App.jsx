import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import NBA from "./pages/NBA"
import WNBA from "./pages/WNBA"
import LiveGames from "./pages/LiveGames"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/nba" element={<NBA />} />

        <Route path="/wnba" element={<WNBA />} />

        <Route path="/live-games" element={<LiveGames />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App