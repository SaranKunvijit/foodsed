import type { FC } from "react"

type Food = {
    id:string
    name:string
    price:string
    type:string
}
type TableProps = {
    title:string
    foods:Food[]
    onEdit: (food:Food) =>void
    onDelete: (id:string) => void
}

const TableComponent:FC<TableProps> = ({ title, foods, onEdit, onDelete }) => {
    return(
        <div>
            <h2>{title}</h2>
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
                  <button onClick={() => onEdit(f)}>แก้ไข</button>
                </td>

                <td>
                  <button onClick={() => onDelete(f.id)}>ลบ</button>
                </td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
}
export default TableComponent