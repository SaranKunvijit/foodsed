import { useState } from 'react';
import './Tables.css'
import { DoorOpen, Percent, Plus, Trash2 } from 'lucide-react';
type TablesProps = {
  tableTotal: number
}
function Tables({ tableTotal }: TablesProps) {
  const [selectedTable, setSelectedTable] = useState<number | null>(null)
  const [checkedRows, setCheckedRows] = useState<number[]>([]);
  const toggleRow = (index: number) => {
    setCheckedRows(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const tables = Array.from({ length: tableTotal }, (_, i) => i + 1);
  return (
    <>
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
              <p>ราคารวม <span>85 ฿</span></p>
            </div>
          </div>
          <div className="btn-items">
            <button className='add'><Plus />เพิ่ม</button>
            <button className='discount'> <Percent />ส่วนลด</button>
            <button className='move'><DoorOpen />ย้ายโต๊ะ</button>
            <button className='removes'><Trash2 /> ลบรายการ</button>
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
                {[0, 1, 2,3,4,5,6,7,8,9,10,11].map((row, index) => (
                  <tr
                    key={index}
                    onClick={() => toggleRow(index)}
                    className={checkedRows.includes(index) ? 'row-active' : ''}
                    style={{ cursor: 'pointer' }}
                  >
                    <th>
                      <input
                        type="checkbox"
                        checked={checkedRows.includes(index)}
                        onClick={(e) => e.stopPropagation()} 
                        readOnly
                      />
                    </th>
                    <th>2</th>
                    <th>ต้มแซ่บ</th>
                    <th>250฿</th>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tables
