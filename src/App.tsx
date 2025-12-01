  import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
  import Nav from "./pages/nav/Nav"
  import Home from "./pages/Home/Home"
  import Manage from "./pages/Manage/Manage"
  import AllFood from "./pages/AllFood/AllFood"
  import Tables from "./pages/Tables/Tables"
  import SildeBarComponent from "./Components/SildeBarComponent/SildeBarComponent"
  import { useState, type FC } from "react"

  type CartItemProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    qty: number;
  }

  const App:FC<CartItemProps> = () => {

      const [isCartOpen, setIsCartOpen] = useState(false);
      const [cartItem,setCartItem] = useState<CartItemProps[]>([]);
      const handleAddCart =(menu:any, qty:number)=>{
        setCartItem((prev) =>{
          const exits= prev.find((item) => item.id ===menu.id)
          if(exits){
            return prev.map((item) => 
            item.id === menu.id ? {...item, qty:item.qty + qty }:item
            )
          }
            return [...prev, { ...menu,qty}]
        })
      }
    return (
      <Router>
              <SildeBarComponent
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
        <Nav openCart={() => setIsCartOpen(true)} /> 
        
        <Routes>
          <Route path="/" element={<Home handleAddCart={handleAddCart} />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/menu" element={<AllFood handleAddCart={handleAddCart} />} />
          <Route path="/tables" element={<Tables />} />
          
        </Routes>
      </Router>
    )
  }

  export default App
