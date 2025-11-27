import { useState } from 'react'
import './AllFood.css'
import { foodsData } from '../Manage/ManagePage/foodData'

import { ShoppingCart } from 'lucide-react';



function AllFood() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div>
      <div className="containers">
      <div className="header-card">
          {foods.map((menu) => (
            <div className="rec-card" key={menu.id}>
              <img src={menu.image} alt="" />

              <div className="detail-card">
                <div className="name-price">
                  <h1>{menu.name}</h1>
                  <h2>{menu.price} ฿</h2>
                </div>

                <div className="total">
                  <p className="decline">-</p>
                  <p className="num"></p>
                  <p className="increse">+</p>
                </div>

                <button>
                  <ShoppingCart />
                  ลงตะกร้า
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default AllFood