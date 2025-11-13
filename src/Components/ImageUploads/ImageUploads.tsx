import { Camera, ImagePlus } from 'lucide-react'
import React, { useId, useState, type FC } from 'react'

type ImageUploadsComponentProps = {
  id?: string   // ✅ เพิ่ม id ที่ส่งจาก parent ได้
  label?: string
  onImageChange?: (file: File | null, imageURL: string | null) => void
}

const ImageUploads: FC<ImageUploadsComponentProps> = ({ id, label = "เลือกรูปภาพ", onImageChange }) => {
  const [preview, setPreview] = useState<string | null>(null)
  const generatedId = useId()                // ✅ id เฉพาะแต่ละ component
  const inputId = id || generatedId          // ✅ ใช้ id ที่ส่งมา หรือสร้างใหม่ถ้าไม่มี

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const ImageURL = URL.createObjectURL(file)
      setPreview(ImageURL)
      onImageChange?.(file, ImageURL)
    } else {
      setPreview(null)
      onImageChange?.(null, null)
    }
  }

  return (
    <div className="upload-headers">
      <div className="preview-box">
        {preview ? (
          <img src={preview} alt="preview" className="img-preview" />
        ) : (
          <div className="no-img">
            <ImagePlus size={28} />
            <p>ยังไม่มีรูปภาพ</p>
          </div>
        )}
      </div>

      <div className="btn-upload">
        {/* ✅ label ชี้ไปที่ input เฉพาะ */}
        <label htmlFor={inputId} className="upload-btn">
          <Camera size={18} style={{ marginRight: 8 }} />
          {label}
        </label>

        {/* ✅ input id ต้องตรงกับ label htmlFor */}
        <input
          type="file"
          id={inputId}
          accept="image/*"
          hidden
          onChange={handleFileChange}
        />
      </div>
    </div>
  )
}

export default ImageUploads
