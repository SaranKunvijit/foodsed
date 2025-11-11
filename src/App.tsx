import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./pages/nav/Nav"
import Home from "./pages/Home/Home"
import Manage from "./pages/Manage/Manage"


function App() {
  return (
    <Router>
      <Nav /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </Router>
  )
}

export default App
