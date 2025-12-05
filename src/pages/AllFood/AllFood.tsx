import { useState, type FC } from 'react'
import './AllFood.css'
import { foodsData } from '../../types/foodData'
import CardComponent from '../../Components/CardComponent/CardComponent';

type AllFoodProps = {
  handleAddCart: (menu: any, qty: number) => void;
};
const AllFood:FC<AllFoodProps> =({handleAddCart})=> {
  const [foods] = useState(foodsData);
  const [selectTypeFoods, setSelectTypeFoods] = useState('ทั้งหมด');
  const [addCart, setAddCart] = useState(foodsData.map(item => ({ id: item.id, total: 1 })))
  

  const allType = ['ทั้งหมด', ...new Set(foodsData.map(item => item.type))];
  const fillterType = selectTypeFoods === 'ทั้งหมด' ? foods : foods.filter(item => item.type === selectTypeFoods);
  const handleIncrese = (id: number) => {
    setAddCart(prev => prev.map(item => item.id === id ? { ...item, total: item.total + 1 } : item))
  }
  const handleDecline = (id: number) => {
    setAddCart(prev => prev.map(item => item.id === id && item.total > 1 ? { ...item, total: item.total - 1 } : item))
  }
  const getTotal = (id: number) => {
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
                data={{
                  id:menu.id,
                  image:menu.image,
                  name:menu.name,
                  price:menu.price,
                  qty:getTotal(menu.id),
                  type:menu.type
                }}               
                  key={menu.id}
                  onIncrese={() => handleIncrese(menu.id)}
                  onDecline={() => handleDecline(menu.id)}
                  addCart={(qty) => handleAddCart( menu, qty ?? 1)}

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
