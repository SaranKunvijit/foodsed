
import ImageUploads from '../../../Components/ImageUploads/ImageUploads'
import '../ManagePage/ManagePageCss/ManageHome.css'
function ManageHome() {
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
      {/* โลโก้ */}
      <div className="texts-logo">
        <p>ชื่อร้าน</p>
        <input type="text" placeholder='กรอกชื่อโลโก้' />
      </div>
      {/* อัพรูปหน้าหลัก */}
      <div className="image-headers">
        <div className="text-uploadheader">
          <h1>รูปสำหรับเมนูหลัก</h1>
          <h2>อัพโหลดรูปภาพที่ใช้เป็นภาพหลักในการแสดงรูปภาพ</h2>
        </div>
        <ImageUploads id="main-image" onImageChange={handleImageChange} />
      </div>

      {/* อัพรูปอาหารแนะนำ */}
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

      {/* ปุ่มบันทึกข้อมูล */}
      <div className="btn-savehome">
        <button onClick={handleSubmit}>บันทึกข้อมูล</button>
      </div>
    </div>
  )
}

export default ManageHome