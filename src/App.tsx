import { Routes, Route } from "react-router-dom"
import { About, Landing, Projects } from "./pages"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<About />} />
    </Routes>
  )
}

export default App
