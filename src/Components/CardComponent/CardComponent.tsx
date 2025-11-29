
import { type FC } from 'react'
import './CardComponent.css'
import { ShoppingCart } from 'lucide-react'
type CardComponentProps = {
    image: string
    title: string
    price: number
    qty: number
    onIncrese: () => void
    onDecline: () => void
    addCart: (qty: number) => void
}
const CardComponent: FC<CardComponentProps> = ({ image, title, price, qty, onDecline, onIncrese, addCart }) => {


    const handleAddToCart = () => {
        addCart(qty)
    }
    return (
        <div>
            <div className="headers-card">
                <div className="text-card">
                <img src={image} alt="" />
            </div>
              <div className="card-content">
                <div className="card-details">
                    <h1 className='card-title'>{title}</h1>
                    <p className='card-price'>{price} ฿</p>
                </div>
                <div className="card-btn">
                    <p className='increse' onClick={onDecline}>-</p>
                    <p className='qty'>{qty}</p>
                    <p className='decline' onClick={onIncrese}>+</p>
                </div>
                <button onClick={handleAddToCart} className='addtocart'>
                    <ShoppingCart />
                    ลงตะกร้า
                </button>
            </div>
            </div>
            
          
        </div>
    )
}

export default CardComponent