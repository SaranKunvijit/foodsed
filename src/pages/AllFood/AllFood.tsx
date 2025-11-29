import { useState } from 'react'
import './AllFood.css'
import { foodsData } from '../Manage/ManagePage/foodData'
import CardComponent from '../../Components/CardComponent/CardComponent';

function AllFood() {
  const [foods] = useState(foodsData);
  const [selectTypeFoods, setSelectTypeFoods] = useState('ทั้งหมด');
  const [addCart, setAddCart] = useState(foodsData.map(item => ({ id: item.id, total: 1 })))
  

  const allType = ['ทั้งหมด', ...new Set(foodsData.map(item => item.type))];
  const fillterType = selectTypeFoods === 'ทั้งหมด' ? foods : foods.filter(item => item.type === selectTypeFoods);
  const handleIncrese = (id: any) => {
    setAddCart(prev => prev.map(item => item.id === id ? { ...item, total: item.total + 1 } : item))
  }
  const handleDecline = (id: any) => {
    setAddCart(prev => prev.map(item => item.id === id && item.total > 1 ? { ...item, total: item.total - 1 } : item))
  }
  const getTotal = (id: any) => {
    const items = addCart.find(c => c.id === id)
    return items ? items.total : 1;
  }

  const groupedMenus: { [key: string]: typeof foodsData } = {};
  fillterType.forEach(menu => {
    if (!groupedMenus[menu.type]) groupedMenus[menu.type] = [];
    groupedMenus[menu.type].push(menu);
  });

  return (
    <div>
      <div className="containers">
        <div className="types-headers">
           <div className="food-types">
          {allType.map((type) => (
            <p
              key={type}
              className={selectTypeFoods === type ? 'active-type' : ''}
              onClick={() => setSelectTypeFoods(type)}
            >
              {type}
            </p>
          ))}
        </div>
        </div>
       
        {Object.keys(groupedMenus).map((type) => (
          <div key={type} className="food-group">
            <h2 className="food-type-title">{type}</h2>
            <div className="card-wrap">
              <div className="header-card">
              {groupedMenus[type].map((menu) => (
                <CardComponent
                  key={menu.id}
                  image={menu.image}
                  title={menu.name}
                  price={menu.price}
                  qty={getTotal(menu.id)}
                  onIncrese={() => handleIncrese(menu.id)}
                  onDecline={() => handleDecline(menu.id)}
                  addCart={(qty) => console.log('เพิ่มลงตะกร้าแล้ว', menu.name, qty)}
                />
              ))}
            </div>
            </div>
            
          </div>
        ))}

      </div>
    </div>
  )
}

export default AllFood;
