import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./pages/nav/Nav"
import Home from "./pages/Home/Home"
import Manage from "./pages/Manage/Manage"
import AllFood from "./pages/AllFood/AllFood"
import Tables from "./pages/Tables/Tables"
import SildeBarComponent from "./Components/SildeBarComponent/SildeBarComponent"
import { useState } from "react"


function App() {

    const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <Router>
            <SildeBarComponent
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <Nav openCart={() => setIsCartOpen(true)} /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/menu" element={<AllFood />} />
        <Route path="/tables" element={<Tables />} />
        
      </Routes>
    </Router>
  )
}

export default App
