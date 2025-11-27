import { useState } from 'react'
import './AllFood.css'
import { foodsData } from '../Manage/ManagePage/foodData'

import { ShoppingCart } from 'lucide-react';



function AllFood() {
  const [foods] = useState(foodsData);
  const [selectTypeFoods, setSelectTypeFoods] = useState('ทั้งหมด');

  const allType = ['ทั้งหมด',...new Set(foodsData.map(item => item.type))]
  const fillterType = selectTypeFoods === 'ทั้งหมด' ? foods : foods.filter(item => item.type === selectTypeFoods);


  return (
    <div>
      <div className="containers">
        <div className="food-types">
          {allType.map((type) => (
            <button key={type} className={selectTypeFoods === type? 'active-type' :''} 
            onClick={() => setSelectTypeFoods(type)}>{type}</button>
          ))}
        </div>
      <div className="header-card">
          {fillterType.map((menu) => (
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