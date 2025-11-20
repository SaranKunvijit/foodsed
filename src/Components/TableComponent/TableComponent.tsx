import { PencilLine, Pizza, Trash2 } from "lucide-react"
import { useState, type FC } from "react"
import './TableComponent.css'
type Food = {
    id:string
    name:string
    price:number
    type:string
}
type TableProps = {
    title:string
    foods:Food[]
    onEdit: (food:Food) =>void
    onDelete: (id:string) => void
    onAddFood: (id:string, name:string, price:number) => void
}

const TableComponent:FC<TableProps> = ({ title, foods, onEdit, onDelete, onAddFood }) => {
  const [adding, setAdding] = useState(false)
  const [newFoodName, setNewFoodName] = useState('')
  const [newPrice, setNewPrice] = useState('')

  const handleAddFood = () => setAdding(true)
  const handleSaveNewFood = () =>{
    if(newFoodName.trim() && newPrice){
      onAddFood(title, newFoodName, Number(newPrice))
      setAdding(false)
      setNewFoodName('')
      setNewPrice('')
    }
  }
    return(
        <div>
          <div className="table-headerlist">
            <h2>{title}</h2>
            <button onClick={handleAddFood}><Pizza />เพิ่มอาหาร</button>
          </div>
            
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
            {foods.map((f, index) => (
              <tr key={f.id}>
                <td>{index + 1}</td>
                <td>{f.name}</td>
                <td>{f.price}</td>
                
                <td>
                <PencilLine color="green" cursor='pointer' onClick={() => onEdit(f)} />
                 
                </td>

                <td>
                <Trash2 color="red" cursor='pointer' onClick={() => onDelete(f.id)} />
                </td>

                <td></td>
              </tr>
            ))}

            {adding && (              
            <tr>
                <td>#</td>
                <td>
                  <input
                    type="text"
                    value={newFoodName}
                    onChange={(e) => setNewFoodName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                </td>
                
                <td >
                  <div className="btn-can">
                     <button onClick={handleSaveNewFood}>บันทึก</button>
                  <button onClick={() => setAdding(false)}>ยกเลิก</button>
                  </div>
                 
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
        </div>
    );
}
export default TableComponent