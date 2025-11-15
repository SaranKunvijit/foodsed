
import { useState } from 'react'
import '../ManagePage/ManagePageCss/ManageTable.css'
function ManageTable() {

  const [tableTotal, setTableTotal] = useState(0)
  const tables = Array.from({length: tableTotal},(_,i) =>i+1)
  const handleremoveLastTable = () => {
    setTableTotal(prev =>(prev > 0? prev-1:0))
  }

  return (
    <div>
      <div className="table-text">
        <div className="all-table">
          <h1>จำนวนโต๊ะทั้งหมด</h1>
          <p>{tableTotal} Table</p>
          
        </div>
        
        <button onClick={() => setTableTotal(prev =>prev+1)} className='btn-create'>สร้างโต๊ะ</button>
        <button onClick={handleremoveLastTable}>ลบโต๊ะ</button>
        <div className="btn-table">
          {tables.map((id) => (
            <button
            key={id}
            className='table-id'
            onClick={() => console.log(`โต๊ะ ${id}`)}
            >{id}</button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ManageTable