import { Pizza } from 'lucide-react'
import './ManagePageCss/ManageFoods.css'
import { useState } from 'react';

function ManageFoods() {
  const [selectType, setSelectype] = useState<string>('')
  const foodsByType = (typeName: string) => foods.filter((f) => f.type === typeName);
  const catagoryFood = [
    { id: '1', name: 'ส้มตำ' },
    { id: '2', name: 'ลาบ/ยำ' },
    { id: '3', name: 'ทอด/ย่าง' },
    { id: '4', name: 'ตามสั่ง' }
  ]
  const foods = [
    // ---------- ส้มตำ ----------
    { id: '1-1', name: 'ส้มตำไทย', price: 50, type: 'ส้มตำ' },
    { id: '1-2', name: 'ส้มตำปูปลาร้า', price: 55, type: 'ส้มตำ' },
    { id: '1-3', name: 'ส้มตำไข่เค็ม', price: 60, type: 'ส้มตำ' },
    { id: '1-4', name: 'ส้มตำผลไม้', price: 65, type: 'ส้มตำ' },
    { id: '1-5', name: 'ตำแตง', price: 45, type: 'ส้มตำ' },
    { id: '1-6', name: 'ตำข้าวโพดไข่เค็ม', price: 70, type: 'ส้มตำ' },
    { id: '1-7', name: 'ตำซั่วขนมจีน', price: 60, type: 'ส้มตำ' },
    { id: '1-8', name: 'ตำถั่วฝักยาว', price: 45, type: 'ส้มตำ' },
    { id: '1-9', name: 'ส้มตำปลาร้า', price: 50, type: 'ส้มตำ' },
    { id: '1-10', name: 'ตำมะม่วง', price: 55, type: 'ส้มตำ' },

    // ---------- ลาบ / ยำ ----------
    { id: '2-1', name: 'ลาบหมู', price: 70, type: 'ลาบ/ยำ' },
    { id: '2-2', name: 'ลาบไก่', price: 70, type: 'ลาบ/ยำ' },
    { id: '2-3', name: 'ลาบปลาดุก', price: 75, type: 'ลาบ/ยำ' },
    { id: '2-4', name: 'ยำวุ้นเส้น', price: 80, type: 'ลาบ/ยำ' },
    { id: '2-5', name: 'ยำหมูยอ', price: 75, type: 'ลาบ/ยำ' },
    { id: '2-6', name: 'ยำทะเล', price: 120, type: 'ลาบ/ยำ' },
    { id: '2-7', name: 'ยำไข่ดาว', price: 65, type: 'ลาบ/ยำ' },
    { id: '2-8', name: 'ยำมาม่า', price: 70, type: 'ลาบ/ยำ' },
    { id: '2-9', name: 'ยำไก่แซ่บ', price: 85, type: 'ลาบ/ยำ' },
    { id: '2-10', name: 'ยำกุ้งสด', price: 120, type: 'ลาบ/ยำ' },

    // ---------- ทอด / ย่าง ----------
    { id: '3-1', name: 'ไก่ย่าง', price: 80, type: 'ทอด/ย่าง' },
    { id: '3-2', name: 'หมูย่าง', price: 85, type: 'ทอด/ย่าง' },
    { id: '3-3', name: 'คอหมูย่าง', price: 90, type: 'ทอด/ย่าง' },
    { id: '3-4', name: 'ไก่ทอด', price: 70, type: 'ทอด/ย่าง' },
    { id: '3-5', name: 'หมูทอดกระเทียม', price: 75, type: 'ทอด/ย่าง' },
    { id: '3-6', name: 'กุ้งทอด', price: 95, type: 'ทอด/ย่าง' },
    { id: '3-7', name: 'ปลาเผา', price: 150, type: 'ทอด/ย่าง' },
    { id: '3-8', name: 'ปลาดุกย่าง', price: 70, type: 'ทอด/ย่าง' },
    { id: '3-9', name: 'หมูกรอบทอด', price: 80, type: 'ทอด/ย่าง' },
    { id: '3-10', name: 'ไก่ย่างสมุนไพร', price: 95, type: 'ทอด/ย่าง' },

    // ---------- ตามสั่ง ----------
    { id: '4-1', name: 'กระเพราไก่', price: 50, type: 'ตามสั่ง' },
    { id: '4-2', name: 'กระเพราหมู', price: 50, type: 'ตามสั่ง' },
    { id: '4-3', name: 'ข้าวผัดหมู', price: 55, type: 'ตามสั่ง' },
    { id: '4-4', name: 'ข้าวผัดกุ้ง', price: 65, type: 'ตามสั่ง' },
    { id: '4-5', name: 'ผัดพริกแกงหมู', price: 55, type: 'ตามสั่ง' },
    { id: '4-6', name: 'ผัดซีอิ๊วหมู', price: 55, type: 'ตามสั่ง' },
    { id: '4-7', name: 'ผัดไทยกุ้งสด', price: 70, type: 'ตามสั่ง' },
    { id: '4-8', name: 'ราดหน้า', price: 55, type: 'ตามสั่ง' },
    { id: '4-9', name: 'ผัดผงกะหรี่ทะเล', price: 90, type: 'ตามสั่ง' },
    { id: '4-10', name: 'ทอดกระเทียมหมู', price: 55, type: 'ตามสั่ง' }
  ];

  return (
    <div>
      <div className="foods-headers">
        {/* ครอบทั้ง text และ ปุ่มจัดการ */}
        <div className="texts-header">
          {/* ครอบtext */}
          <div className="total-food">
            <h1>รายการทั้งหมด</h1>
            <p>100 รายการ</p>
          </div>
          {/* ครอบปุ่มจัดการ */}
          <div className="btn-createselect">
            <select>
              <option value="">รายการทั้งหมด</option>
              {catagoryFood.map((catagory) => (
                <option key={catagory.id} value={catagory.id}>{catagory.name}</option>
              ))}
            </select>
            <button><Pizza />เพิ่มอาหาร</button>
          </div>
        </div>
        {selectType === '' && (
          <div className="table-show">
            {catagoryFood.map((cat) => {
              const list = foodsByType(cat.name)
              return (
                <div className="table-list">
                  <h2>{cat.name }</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>ชื่ออาหาร</th>
                        <th>ราคา</th>
                        <th>แก้ไข</th>
                        <th>ลบ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((f) => (
                        <tr key={f.id}>
                          <th>{f.name}</th>
                          <th>{f.price}</th>
                          <th></th>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>

              )
            })}

          </div>
        )}


      </div>
    </div>
  )
}

export default ManageFoods