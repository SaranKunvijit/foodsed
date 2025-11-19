import { Pencil, PencilLine, Pizza, Trash2 } from "lucide-react";
import "./ManagePageCss/ManageFoods.css";
import { useState } from "react";
import {foodsData} from './foodData'
function ManageFoods() {
  const [editItem, setEditItem] = useState<any>(null)
  const [editName, setEditName] = useState('')
  const [editPrice, setEditPrice] = useState('')
  const [selectType, setSelectype] = useState<string>("");
  const [foods, setFoods] =useState(foodsData)
  const foodsByType = (typeName: string) =>
    foods.filter((f) => f.type === typeName);
  
  const catagoryFood = [
    { id: "1", name: "ส้มตำ" },
    { id: "2", name: "ลาบ/ยำ" },
    { id: "3", name: "ทอด/ย่าง" },
    { id: "4", name: "ตามสั่ง" },
  ];

   const totalFoods = selectType ===""? foods.length : foods.filter((f) => f.type ===catagoryFood.find((c) => c.id === selectType)?.name ).length;

   const handleEdit =(food:any)=>{
      setEditItem(food)
      setEditName(food.name)
      setEditPrice(food.price)
   } 
   const handleDelete = (id:string) => {
    if(confirm('ต้องการลบเมนูนี้หรือไม่')){
      setFoods(foods.filter((f) => f.id !== id))
    }
   }

  return (
    <div>
      <div className="foods-headers">
        {/* ครอบทั้ง text และ ปุ่มจัดการ */}
        <div className="texts-header">
          {/* ครอบtext */}
          <div className="total-food">
            <h1>รายการทั้งหมด</h1>
            <p>{totalFoods} รายการ</p>
          </div>
          {/* ครอบปุ่มจัดการ */}
          <div className="btn-createselect">
            <select value={selectType}
            onChange={(e) => setSelectype(e.target.value)}>
              <option value="">รายการทั้งหมด</option>
              {catagoryFood.map((catagory) => (
                <option key={catagory.id} value={catagory.id}>
                  {catagory.name}
                </option>
              ))}
            </select>
            <button>
              <Pizza />
              เพิ่มอาหาร
            </button>
          </div>
        </div>
        {selectType === "" && (
          <div className="table-show">
            {catagoryFood.map((cat) => {
              const list = foodsByType(cat.name);
              return (
                <div>
                   <h2>{cat.name}</h2>
                   <div className="table-list">
                 
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>ชื่ออาหาร</th>
                        <th>ราคา</th>
                        <th>แก้ไข</th>
                        <th>ลบ</th>
                        <th>ปริ้นเตอร์</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((f) => (
                        <tr key={f.id}>
                          <th>1</th>
                          <th>{f.name}</th>
                          <th>{f.price}</th>
                          <th><PencilLine color="green" cursor='pointer' onClick={() => handleEdit(f)} /></th>
                          <th ><Trash2 color="red" cursor='pointer' onClick={() => handleDelete(f.id)} /></th>
                          <th></th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                </div>
               
              );
            })}
          </div>
        )}

        {selectType !== "" && (
          <div className="table-show">
            {(() => {
              const selectCatagory = catagoryFood.find(
                (c) => c.id === selectType
              );
              if (!selectCatagory) return null;
              const list = foodsByType(selectCatagory.name);

              return (
                <div>
                   <h2>{selectCatagory.name}</h2>
                   <div className="table-list">
                 
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>ชื่ออาหาร</th>
                        <th>ราคา</th>
                        <th>แก้ไข</th>
                        <th>ลบ</th>
                        <th>ปริ้นเตอร์</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((f) => (
                        <tr key={f.id}>
                          <th>1</th>
                          <th>{f.name}</th>
                          <th>{f.price}</th>
                          <th><PencilLine color="green" cursor='pointer' /></th>
                          <th><Trash2 color="red" cursor='pointer' /></th>
                          <th></th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                </div>
               
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageFoods;
