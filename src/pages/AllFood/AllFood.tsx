import { ShoppingCart } from 'lucide-react'
import React from 'react'

function AllFood() {
  return (
    <div>
        <div className="menu-headers">
            <div className="menu-headertext">
                <h1>Title</h1>
            </div>
            <div className="header-card">
         
            <div className="rec-card" >
              <img src='' alt="" />

              <div className="detail-card">
                <div className="name-price">
                  <h1></h1>
                  <h2> ฿</h2>
                </div>

                <div className="total">
                  <p className="decline" 
                //   onClick={() => handleDecline(menu.id , 'recommendMenus')}
                  >-</p>
                  <p className="num"></p>
                  <p className="increse" 
                //   onClick={() => handleIncrese(menu.id ,'recommendMenus')}
                  >+</p>
                </div>

                <button>
                  <ShoppingCart />
                  ลงตะกร้า
                </button>
              </div>
            </div>
          {/* ))} */}
        </div>
        </div>
    </div>
  )
}

export default AllFood