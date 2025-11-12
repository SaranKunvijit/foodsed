import { Camera } from 'lucide-react'
import React, { useState } from 'react'

function ManageHome() {
    const [preview, setPreview] = useState<string | null>(null)
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
          const ImageURL = URL.createObjectURL(file)
          setPreview(ImageURL)
        }
      }
  return (
    <div>   <div className="image-headers">
    <div className="text-uploadheader">
      <h1>รูปสำหรับเมนูหลัก</h1>
      <h2>อัพโหลดรูปภาพที่ใช้เป็นภาพหลักในการแสดงรูปภาพ</h2>
    </div>
    <div className="upload-headers">
      <div className="preview-box">
        {preview ? (
          <img src={preview} alt="" className='img-preview' />
        ) : (
          <div className="no-img">
            <Camera size={28} />
            <p >ยังไม่มีรูปภาพ</p>
          </div>

        )}
      </div>

      <div className="btn-upload">
        <label htmlFor="upload" className='upload-btn'>เลือกรูปภาพ</label>
        <input type="file" id='upload' accept='image/*' hidden onChange={handleImageChange} />
      </div>
    </div>


  </div></div>
  )
}

export default ManageHome