import { type FC } from "react";
import "./CardComponent.css";
import { ShoppingCart } from "lucide-react";
import type { CardComponentProps } from "../../types";
const CardComponent: FC<CardComponentProps> = ({
  data,
  onDecline,
  onIncrese,
  addCart,
}) => {
  const handleAddToCart = () => {
    addCart( data.qty);
  };
  return (
    <div>
      <div className="headers-card">
        <div className="text-card" key={data.id}>
          <img src={data.image} alt="" />
        </div>
        <div className="card-content">
          <div className="card-details">
            <h1 className="card-title">{data.name}</h1>
            <p className="card-price">{data.price} ฿</p>
          </div>
          <div className="card-btn">
            <p className="increse" onClick={onDecline}>
              -
            </p>
            <p className="qty">{data.qty}</p>
            <p className="decline" onClick={onIncrese}>
              +
            </p>
          </div>
          <button onClick={handleAddToCart} className="addtocart">
            <ShoppingCart />
            ลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
