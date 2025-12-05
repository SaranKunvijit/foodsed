
import React, { useState } from 'react'
import ImageUploads from '../../../Components/ImageUploads/ImageUploads'
import '../ManagePage/SettingsPageCss/SettingsHome.css'
import { Plus } from 'lucide-react'

type SettingsProps = {
  tableTotal: number
  setTableTotal: React.Dispatch<React.SetStateAction<number>>
}
function SettingsHome({tableTotal,setTableTotal}:SettingsProps) {
  const [inputTables, setInputTables] = useState('')
  const tables = Array.from({ length: tableTotal }, (_, i) => i + 1)

  const handleSetTables = () => {
    const numbers = Number(inputTables)
    if (isNaN(numbers) || numbers < 0) {
      console.log("กรุณากรอกตัวเลขที่ถูกต้อง")
      return
    }
    setTableTotal(numbers)
    setInputTables('')
  }
  const handleSubmit = () => {
    alert('บันทึกข้อมูลเรียบร้อยแล้ว')
  }
  const handleImageChange = (file: File | null, ImageURL: string | null) => {
    console.log("รูปที่อัปโหลด:", file)
    console.log("URL preview:", ImageURL)
  }
  const handleImageChangeRec = (file: File | null, ImageURL: string | null) => {
    console.log("รูปที่อัปโหลด:", file)
    console.log("URL preview:", ImageURL)
  }
  return (
    <div>
      <div className="texts-logo">
        <p>ชื่อร้าน</p>
        <input type="text" placeholder='กรอกชื่อโลโก้' />
      </div>
      <div className="image-headers">
        <div className="text-uploadheader">
          <h1>รูปสำหรับเมนูหลัก</h1>
          <h2>อัพโหลดรูปภาพที่ใช้เป็นภาพหลักในการแสดงรูปภาพ</h2>
        </div>
        <ImageUploads id="main-image" onImageChange={handleImageChange} />
      </div>
      <div className="image-rec">
        <div className="text-recs">
          <h1>รูปเมนูแนะนำ</h1>
          <h2>อัพโหลดรูปภาพที่ใช้เป็นภาพเมนูแนะนำ</h2>
        </div>
        <div className="detail-recs">
          <ImageUploads id="rec-image" onImageChange={handleImageChangeRec} />
          <div className="text-recse">
            <input type="text" placeholder='ชื่ออาหาร' />
            <input type="text" placeholder='ราคา' />
          </div>
        </div>
      
      </div>
      <div className="create-tables">
        <div className="text-tables">
        <h1>รูปเมนูแนะนำ</h1>
          <h2>อัพโหลดรูปภาพที่ใช้เป็นภาพเมนูแนะนำ</h2>
        </div>
        <div className="input-all">
           <div className="inputs-table">
            <input
              type="text"
              value={inputTables}
              onChange={(e) => setInputTables(e.target.value)}
              placeholder="กรอกจำนวนโต๊ะ"
              min="0"
            />
            <button onClick={handleSetTables} >
              <Plus /> สร้าง
            </button>
         
           
        </div>
           <div className="all-table">
               <p><span>{tableTotal} </span>โต๊ะ</p>
            </div>
        </div>
       
      
        </div>
      <div className="btn-savehome">
        <button onClick={handleSubmit}>บันทึกข้อมูล</button>
      </div>
      
      <div className="btn-table">
          {tables.map((id) => (
            <div key={id} className="table-box">
              <button className='table-id'
                onClick={() => console.log(`โต๊ะ ${id}`)}>{id}</button>
            </div>
          ))}
        </div>

    </div>
  )
}

export default SettingsHome