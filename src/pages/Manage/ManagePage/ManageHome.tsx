
import ImageUploads from '../../../Components/ImageUploads/ImageUploads'

function ManageHome() {

  const handleImageChange = (file:File |null, ImageURL:string| null) => {
    console.log("รูปที่อัปโหลด:", file)
    console.log("URL preview:", ImageURL)
  }
  const handleImageChangeRec = (file:File |null, ImageURL:string| null) => {
    console.log("รูปที่อัปโหลด:", file)
    console.log("URL preview:", ImageURL)
  }
  return (
    <div>
     
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
        <ImageUploads id="rec-image" onImageChange={handleImageChangeRec} />
      </div>

    </div>
  )
}

export default ManageHome