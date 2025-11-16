
import { useState } from 'react'
import '../ManagePage/ManagePageCss/ManageTable.css'
import { Plus, Trash2 } from 'lucide-react'
function ManageTable() {

  const [tableTotal, setTableTotal] = useState(0)
  const tables = Array.from({length: tableTotal},(_,i) =>i+1)
  const handleremoveLastTable = () => {
    setTableTotal(prev =>(prev > 0? prev-1:0))
  }

  return (
    <div>
      <div className="table-text">
        <div className="table-headers">
          <div className="all-table">
          <h1>จำนวนโต๊ะทั้งหมด</h1>
          <p>{tableTotal} Table</p>
        </div>
        <div className="btn-createtable">
        <button onClick={() => setTableTotal(prev =>prev+1)} className='btn-create'><Plus />สร้างโต๊ะ</button>
        <button onClick={handleremoveLastTable} className='btn-delete'><Trash2 />ลบโต๊ะ</button>
        </div>
        </div>
        
        
       
        <div className="btn-table">
          {tables.map((id) => (
            <div key={id} className="table-box">
              <button
            
            className='table-id'
            onClick={() => console.log(`โต๊ะ ${id}`)}
            >{id}</button>
            {/* <span className="table-price">500</span> */}
            </div>
            
          ))}
        </div>

      </div>
    </div>
  )
}

export default ManageTable