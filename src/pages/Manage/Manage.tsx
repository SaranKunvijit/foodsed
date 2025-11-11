import React, { useState } from 'react'
import './manage.css'
function Manage() {

  const [preview, setPreview] = useState<string | null>(null)
  const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if(file){
      const ImageURL = URL.createObjectURL(file)
      setPreview(ImageURL)
    }
  }
  return (
    <div className='containers'>
      <div className="text-headers">
          <h1>Manage Data</h1>
          <h2>จัดการข้อมูล</h2>
      </div>
    <div className="image-headers">
      <label htmlFor="upload" className='upload-btn'>เลือกรูปภาพ</label>
      <input type="file" id='upload' accept='image/*' hidden  onChange={handleImageChange}/>
     
     <div className="preview-box">
      {preview ? (
        <img src={preview} alt="" className='img-preview' />
      ) : (
        <p className='no-img'>ยังไม่มีรูปภาพ</p>
      )}
     </div>
     
    </div>
    </div>
  )
}

export default Manage