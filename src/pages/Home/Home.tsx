import { ShoppingCart } from "lucide-react";
import slid from "../../assets/image1.png";
import card from "../../assets/image2.png";
import "./home.css";

function Home() {
  const recommendMenus = [
    { id: 1, name: "ต้มแซ่บกระดูกอ่อน", price: 200, img: card },
    { id: 2, name: "กะเพราเนื้อ", price: 80, img: card },
    { id: 3, name: "ผัดไทยกุ้งสด", price: 90, img: card },
    { id: 4, name: "ข้าวมันไก่", price: 60, img: card },
  ];

  const bestSellers = [
    { id: 1, name: "ข้าวผัดกุ้ง", price: 75, img: card },
    { id: 2, name: "ราดหน้าเนื้อ", price: 95, img: card },
    { id: 3, name: "ก๋วยเตี๋ยวต้มยำ", price: 70, img: card },
    { id: 4, name: "หมูกระเทียม", price: 85, img: card },
  ];
  return (
    <div className="container">
      <img src={slid} alt="background" />
      <div className="recommend-menu">
        <div className="text-rec">
          <h1>เมนูแนะนำ</h1>
          <p>แสดงทั้งหมด</p>
        </div>

        <div className="header-card">
          {recommendMenus.map((menu) => (
            <div className="rec-card" key={menu.id}>
              <img src={menu.img} alt="" />

              <div className="detail-card">
                <div className="name-price">
                  <h1>{menu.name}</h1>
                  <h2>{menu.price}</h2>
                </div>

                <div className="total">
                  <p>-</p>
                  <p className="num">1</p>
                  <p>+</p>
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

      <div className="best-sell">
        <div className="text-best">
          <h1>เมนูยอดฮิต</h1>
          <p>แสดงทั้งหมด</p>
        </div>
        <div className="best-menu">
          {bestSellers.map((menu) => (
            <div className="best-card" key={menu.id}>
              <img src={menu.img} alt="" />
              <div className="detail-best">
                <div className="name-price">
                  <h1>{menu.name}</h1>
                  <h2>{menu.price}</h2>
                </div>
                <div className="total">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>

                <button>
                  <ShoppingCart />
                  ลงตะกร้า
                </button>
              </div>
            </div>
          ))}
 <div className="best-card">
            <img src={card} alt="" />
            <div className="detail-best">
            <div className="name-price">
              <h1>ชื่อ</h1>
              <h2>ราคา</h2>
              </div>
              <div className="total">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>

              <button>
                <ShoppingCart />
                ลงตะกร้า
              </button>
            </div>
          </div>  
            <img src={card} alt="" />
            <div className="detail-best">
              <div className="name-price">
                <h1>ชื่อ</h1>
                <h2>ราคา</h2>
              </div>
              <div className="total">
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>

              <button>
                <ShoppingCart />
                ลงตะกร้า
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;

