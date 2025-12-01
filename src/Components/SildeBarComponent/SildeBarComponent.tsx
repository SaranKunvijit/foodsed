import type { FC } from "react";
import "./SildeBarComponent.css";
import { X } from "lucide-react";
import type React from "react";

type CartItmes = {
  id:number
  image:string
  name:string
  price:number
  qty:number
}
type SildeBarComponentProps ={
    isOpen: boolean
    onClose: () => void
    cartItem: CartItmes[]
    setCartItem: React.Dispatch<React.SetStateAction<CartItmes[]>>
    
}
const SildeBarComponent:FC<SildeBarComponentProps> = ({ isOpen, onClose,cartItem,setCartItem }) => {
  const handleIncrese = (id:number) =>{
    setCartItem(prev =>
      prev.map(item => item.id ===id ? {...item, qty:item.qty +1} : item)
    )
  }
  const handleDecline = (id:number) => {
    setCartItem(prev => 
      prev.map(item => item.id ===id ? {...item, qty:Math.max(item.qty-1,1)}:item )
    )
  }
  return (
    <>
     {isOpen && (
       <div className="cart-overlay" onClick={onClose}>
  <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
    
    <p className="close-btn" onClick={onClose}>
      <X />
    </p>

    <h2>ยินดีต้อนรับ</h2>

   <div className="cart-content">
  {cartItem.length === 0 ? (
    <p>ยังไม่มีสินค้าในตะกร้า</p>
  ) : (
    cartItem.map((item) => (
      <div key={item.id} className="cart-item">
        <img src={item.image  } alt={item.name} className="cart-image" />
        <div className="cart-detail">
          <p>{item.name}</p>
          <p className="cart-price">รวม {item.price * item.qty} ฿</p>
          <div className="btn-qty">
            <p onClick={() => handleDecline(item.id)} className="increse">-</p>
            <span>{item.qty}</span>
            <p onClick={() => handleIncrese(item.id)} className="decline">+</p>
          </div>
        </div>
       
      </div>
      
    ))
  )}
  <button className="save-btn">บันทึก</button>
</div>

   
  
  </div>

</div>

     )}
    </>
  );
}

export default SildeBarComponent;
