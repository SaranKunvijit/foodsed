import type { FC } from "react";
import "./SildeBarComponent.css";
import { Plus } from "lucide-react";
type SildeBarComponentProps ={
    isOpen: boolean
    onClose: () => void
}
const SildeBarComponent:FC<SildeBarComponentProps> = ({ isOpen, onClose }) => {
  return (
    <>
     {isOpen && (
       <div className="cart-overlay" onClick={onClose}>
  <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
    
    <p className="close-btn" onClick={onClose}>
      x
    </p>

    <h2>ยินดีต้อนรับ</h2>

    <div className="cart-content"></div>
  </div>
</div>

     )}
    </>
  );
}

export default SildeBarComponent;
