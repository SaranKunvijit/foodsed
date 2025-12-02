
import { useState } from 'react'
import '../ManagePage/ManagePageCss/ManageTable.css'
import { Plus, Trash2 } from 'lucide-react'
function ManageTable() {

  const [tableTotal, setTableTotal] = useState(0)
  const [inputTables, setInputTables] = useState('')
  const tables = Array.from({length: tableTotal},(_,i) =>i+1)
  const handleSetTables = () =>{
    const numbers = Number(inputTables)
    if (isNaN(numbers) || numbers < 0) {
      console.log("กรุณากรอกตัวเลขที่ถูกต้อง")
      return
    }

    setTableTotal(numbers)
    setInputTables('')

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
        <input
              type="text"
              value={inputTables}
              onChange={(e) => setInputTables(e.target.value)}
              placeholder="กรอกจำนวนโต๊ะ"
              className="input-table"
              min="0"
            />
             <button onClick={handleSetTables} className='btn-create'>
              <Plus /> ตั้งจำนวนโต๊ะ
            </button>
        
        </div>
        </div>
        
        
       
        <div className="btn-table">
          {tables.map((id) => (
            <div key={id} className="table-box">
              <button
            
            className='table-id'
            onClick={() => console.log(`โต๊ะ ${id}`)}
            >{id}</button>
           
            </div>
            
          ))}
        </div>

      </div>
    </div>
  )
}

export default ManageTable