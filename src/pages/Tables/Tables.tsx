import { useState } from 'react';
import './Tables.css'
import { DoorOpen, Percent, Plus, Trash2 } from 'lucide-react';
import type { Food } from '../../types';
import DialogComponent from '../../Components/DialogComponent/DialogComponent';
type TablesProps = {
  tableTotal: number
}

function Tables({ tableTotal }: TablesProps) {
  const [selectedTable, setSelectedTable] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const [checedFoodId, setCheckedFoodId] = useState<number[]>([])
  const [food, setFood] = useState<Food[]>([
    { id: 1, name: 'ต้มแซ่บ', price: 250, qty: 2 },
    { id: 2, name: 'ผัดไทย', price: 80, qty: 1 },
    { id: 3, name: 'ข้าวผัด', price: 60, qty: 1 },
    { id: 4, name: 'น้ำเปล่า', price: 20, qty: 1 },
  ])
  const toggleRow = (index: number) => {
    setCheckedFoodId(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const totalPrice = food.reduce((sum, item) => {
    return sum + item.qty * item.price
  }, 0)
  // const handleDeleteFoodsItem = () => {
  //   if (checedFoodId.length === 0) return
  //   setFood(prev =>
  //     prev.filter(food => !checedFoodId.includes(food.id))
  //   )
  //   setCheckedFoodId([])
  // }

  const tables = Array.from({ length: tableTotal }, (_, i) => i + 1);
  return (
    <>
      <DialogComponent
        open={open}
        title='ยืนยันการลบอาหาร'
        onClose={() => setOpen(false)}
        onConfirm={() => {
          setFood(prev => prev.filter(food => !checedFoodId.includes(food.id)))
          setCheckedFoodId([])
          setOpen(false)
        }}
      >
        <p>ต้องการลบรายการอาหารนี้ใช่หรือไหม ? </p>
      </DialogComponent>

      <div className="container-table">
        <div className="btn-tables">
          {tables.map((id) => (
            <div className="table-boxs">
              <button key={id} className={`table-id ${selectedTable === id ? 'active' : ''}`} onClick={() => setSelectedTable(id)}>
                โต๊ะ {id}
              </button></div>

          ))}
        </div>
        <div className="detail-tabless">
          <div className="data-table-items">

            <div className="table-num">
              <h1>โต๊ะ {selectedTable}</h1>
              <p>เวลา <span>10.00</span></p>
              <p>ใช้เวลา <span>35 นาที</span></p>
            </div>
            <div className="price-total">
              <p>ราคารวม <span>{totalPrice} ฿</span></p>
            </div>
          </div>
          <div className="btn-items">
            <button className='add'><Plus />เพิ่ม</button>
            <button className='discount'> <Percent />ส่วนลด</button>
            <button className='move'><DoorOpen />ย้ายโต๊ะ</button>
            <button className='removes' onClick={() => setOpen(true)} disabled={checedFoodId.length === 0}><Trash2 /> ลบรายการ</button>
          </div>

          <div className="show-foods">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>qty</th>
                  <th>อาหาร</th>
                  <th>ราคา</th>
                </tr>
              </thead>
              <tbody>
                {food.length === 0 && (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center' }}>
                      ไม่มีรายการอาหาร
                    </td>
                  </tr>
                )}
                {food.map(food => (
                  <tr
                    key={food.id}
                    onClick={() => toggleRow(food.id)}
                    className={checedFoodId.includes(food.id) ? 'row-active' : ''}
                    style={{ cursor: 'pointer' }}
                  >
                    <th>
                      <input
                        type="checkbox"
                        checked={checedFoodId.includes(food.id)}
                        onClick={(e) => e.stopPropagation()}
                        readOnly
                      />
                    </th>
                    <th>{food.qty}</th>
                    <th>{food.name}</th>
                    <th>{food.price}฿</th>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          <div className="btn-pay-printbill">
            <button className='print'>ปริ้นบิล</button>
            <button className='pay'>คิดเงิน <span>{totalPrice}</span>฿</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tables
