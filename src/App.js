import "./App.css"
import { Routes, Route, Link } from "react-router-dom"

// Pages
import About from "./pages/About/About.jsx"
import Home from "./pages/Home/Home.jsx"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  )
}

export default App
