import { ShoppingCart } from "lucide-react";
import slid from "../../assets/image1.png";
import card from "../../assets/image2.png";
import card1 from "../../assets/image.png";
import "./home.css";
import { useState } from "react";

function Home() {
  const CatagoryMenu = [
    { id: 1, name: "ส้มตำ", detail: "รายละเอียด", img: card },
    { id: 2, name: "ต้มแซ่บๆนัวๆ", detail: "รายละเอียด", img: card1 },
    { id: 3, name: "เมนูย่างทอด", detail: "รายละเอียด", img: card },
    { id: 4, name: "อาหารตามสั่ง", detail: "รายละเอียด", img: card1 },
  ];

  const [recommendMenus, setRecommendMenus] = useState([
    { id: 1, name: "ต้มแซ่บกระดูกอ่อน", price: 200, total: 1, img: card },
    { id: 2, name: "กะเพราเนื้อ", price: 80, total: 1, img: card },
    { id: 3, name: "ผัดไทยกุ้งสด", price: 90, total:1, img: card },
    { id: 4, name: "ข้าวมันไก่", price: 60, total:1, img: card },
  ]);

  const [bestSellers, setBestSellers] = useState([
    { id: 1, name: "ข้าวผัดกุ้ง", price: 75, total: 1, img: card },
    { id: 2, name: "ราดหน้าเนื้อ", price: 95, total: 1, img: card },
    { id: 3, name: "ก๋วยเตี๋ยวต้มยำ", price: 70, total: 1, img: card },
    { id: 4, name: "หมูกระเทียม", price: 85, total: 1, img: card },
  ]);
  
  const handleIncrese = (id: number, type: any) => {
    if(type === 'recommendMenus'){
      setRecommendMenus((prev) => prev.map((menu) => 
      menu.id === id ? {...menu, total:menu.total + 1} : menu
      ))
    } else if(type === 'bestSellers'){
      setBestSellers((prev) => prev.map((menu) => 
      menu.id === id ? {...menu, total: menu.total +1} : menu
      ))
    }
  }

  const handleDecline = (id:number, type:any) =>{
    if(type === 'recommendMenus'){
      setRecommendMenus((prev) => prev.map((menu) =>
      menu.id===id && menu.total > 1 ? {...menu, total: menu.total-1}:menu
      ))
    } else if(type === 'bestSellers'){
      setBestSellers((prev) => prev.map((menu) => 
      menu.id === id && menu.total> 1 ? {...menu, total:menu.total -1}: menu
      ))
    }
  } 
  return (
    <div className="container">
      <img src={slid} alt="background" className="img-head" />
      <div className="catagory-menu">
        <h1 className="text-class">ประเภทอาหาร</h1>
        <div className="catagory-grid">
          {CatagoryMenu.map((catagory) => (
            <div
              className="bg-catagory"
              key={catagory.id}
              style={{
                backgroundImage: `url(${catagory.img})`,
              }}
            >
              <div className="overlay">
                <h1>{catagory.name}</h1>
                <p>{catagory.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="best-sells">
        <div className="img-sells">
          <img src={slid} alt="" />
        </div>
        <div className="text-sells">
          <h1>หมี่ผัด 5 พลัง</h1>
          <p>ราคาเพียงแค่ 120 บาท</p>
        </div>
      </div>

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
                  <h2>{menu.price} ฿</h2>
                </div>

                <div className="total">
                  <p className="decline" onClick={() => handleDecline(menu.id , 'recommendMenus')}>-</p>
                  <p className="num">{menu.total}</p>
                  <p className="increse" onClick={() => handleIncrese(menu.id ,'recommendMenus')}>+</p>
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
                  <h2>{menu.price} ฿</h2>
                </div>
                <div className="total">
                  <p className="decline" onClick={() => handleDecline(menu.id , 'bestSellers')}>-</p>
                  <p className="num">{menu.total}</p>
                  <p className="increse" onClick={() => handleIncrese(menu.id ,'bestSellers')}>+</p>
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

      <div className="contact">
        <div className="name-res">
          <h2>ชื่อร้าน</h2>
        </div>

        <div className="contact-res">
          <div className="tel-email">
            <div className="con">
              <h2>ติดต่อ</h2>
            </div>
            <div className="con-res">
              <p>tel: 000-000-0000</p>
              <p>line: sarankvk</p>
              <p>FB: Zaabelider</p>
            </div>
          </div>

          <div className="address">
            <h2>ที่อยู่</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              sequi fugiat quo perspiciatis dolorem saepe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
