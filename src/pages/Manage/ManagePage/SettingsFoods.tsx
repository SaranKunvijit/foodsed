import { ImagePlus, Package, Pizza } from "lucide-react";
import "../ManagePage/SettingsPageCss/SettingsFoods.css";
import { useState, type ChangeEvent } from "react";
import { foodsData } from '../../../types/foodData'
import TableComponent from "../../../Components/TableComponent/TableComponent";
import DialogComponent from "../../../Components/DialogComponent/DialogComponent";

function SettingsFoods() {
  const [openCatagory, setOpenCatagory] = useState(false)
  const [newCatagory, setNewCatagory] = useState('')
  const [editItem, setEditItem] = useState<any>(null)
  const [editImage, setEditImage] = useState('')
  const [editName, setEditName] = useState('')
  const [editPrice, setEditPrice] = useState('')
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [selectType, setSelectype] = useState<number>(0);
  const [foods, setFoods] = useState(foodsData)
  const [deleteCategoryId, setDeleteCategoryId] = useState<number | null>(null)
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false)


  const foodsByType = (typeName: string) =>
    foods.filter((f) => f.type === typeName);

  const [catagoryFood, setCatagoryFood] = useState([
    { id: 1, name: "ส้มตำ" },
    { id: 2, name: "ลาบ/ยำ" },
    { id: 3, name: "ทอด/ย่าง" },
    { id: 4, name: "ตามสั่ง" },
  ])


  const totalFoods = selectType === 0 ? foods.length : foods.filter((f) => f.type === catagoryFood.find((c) => c.id === selectType)?.name).length;
  const handleEdit = (food: any) => {
    setEditItem(food)
    setEditName(food.name)
    setEditImage(food.image)
    setEditPrice(food.price.toString())
    setOpenEdit(true)
  }
  const handleConfirmEdit = () => {
    if (editItem) {
      setFoods(foods.map(f =>
        f.id === editItem.id ? { ...f, image: editImage, name: editName, price: Number(editPrice) } : f))
    }
    setOpenEdit(false)
    setEditItem(null)
  }
  const handleDelete = (id: number) => {
    setDeleteId(id)
    setOpen(true)
  }
  const hanleDeleteCat = (id: number) => {
    setDeleteCategoryId(id);
    setOpenDeleteCategory(true)
  }
  const confirmDeleteCategory = () => {
    if (!deleteCategoryId) return;
    const categoryName = catagoryFood.find(c => c.id === deleteCategoryId)?.name;
    setCatagoryFood(prev => prev.filter(c => c.id !== deleteCategoryId));
    if (categoryName) {
      setFoods(prev => prev.filter(f => f.type !== categoryName));
    }
    setDeleteCategoryId(null);
    setOpenDeleteCategory(false);
  };

  const hanleEditImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && editItem) {
      const imgURL = URL.createObjectURL(file)
      setEditImage(imgURL)
      setFoods((prev) =>
        prev.map((f) => (f.id === editItem.id ? { ...f, image: imgURL } : f))
      )
    }
  }

  const handleAddFoods = (image: string, name: string, price: number, type:string,qty:number) => {
    const newFoods = {
      id: foods.length + 1,
      image,
      name,
      price,
      type,
      qty
    }
    setFoods([...foods, newFoods])
  }


  return (
    <div>
      {/* Dialog ลบ */}
      <DialogComponent open={open}
        title='ยืนยันการลบ'
        onClose={() => {
          setOpen(false)
          setDeleteId(null)
        }}
        onConfirm={() => {
          if (deleteId) {
            setFoods(foods.filter((f) => f.id !== deleteId))
          }
          setOpen(false)
          setDeleteId(null)
        }} >
        <p>คุณต้องการลบรายการนี้ใช่ไหม?</p>
      </DialogComponent >

      <DialogComponent
        open={openEdit}
        title="แก้ไขอาหาร"
        onClose={() => { setOpenEdit(false); setEditItem(null); }}
        onConfirm={handleConfirmEdit}
      >
        <div className="edit-dialog">
          {editImage ? (
            <div className="img-wrapper">
              <img src={editImage} alt="" className="show-images" />

              <div className="img-overlay">
                <button className="btn-change"
                  onClick={() => document.getElementById('imageUpload')?.click()}>
                  เปลี่ยนรูป
                </button>
                <button className="btn-remove" onClick={() => {
                  setEditImage('')
                  if (editItem) {
                    setFoods((prev) => prev.map((f) => (f.id === editItem.id ? { ...f, image: '' } : f)))
                  }
                }}>ลบรูปภาพ</button>
              </div>
            </div>

          ) : (
            <button onClick={() => document.getElementById('imageUpload')?.click()}
              className="btn-edit"
            >
              <ImagePlus size={50} className="icon-img" />
            </button>
          )}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={hanleEditImageUpload}
            style={{ display: "none" }}
          />
          <label>
            ชื่อสินค้า
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
          </label>
          <label>
            ราคา
            <input type="text" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
          </label>
        </div>
      </DialogComponent>
      <DialogComponent
        open={openCatagory}
        title='เพิ่มประเภทสินค้า'
        onClose={() => {
          setOpenCatagory(false)
          setNewCatagory("")
        }}
        onConfirm={() => {
          if (newCatagory.trim() !== '') {
            const newId = catagoryFood.length + 1
            const newItem = { id: newId, name: newCatagory };

            setCatagoryFood([...catagoryFood, newItem])
          }
          setOpenCatagory(false)
          setNewCatagory('')
        }}
      >
        <div className="edit-dialog">
          <label>
            ชื่อประเภทสินค้า
            <input
              type="text"
              value={newCatagory}
              onChange={(e) => setNewCatagory(e.target.value)}
            />
          </label>
        </div>
      </DialogComponent>
      <DialogComponent
        open={openDeleteCategory}
        title="ลบประเภทสินค้า"
        onClose={() => {
          setOpenDeleteCategory(false);
          setDeleteCategoryId(null);
        }}
        onConfirm={confirmDeleteCategory}
      >
        <p>คุณต้องการลบประเภทสินค้านี้ และรายการอาหารที่อยู่ในหมวดนี้ทั้งหมดใช่ไหม?</p>
      </DialogComponent>

      <div className="foods-headers">
        <div className="texts-header">
          <div className="total-food">
            <h1>รายการทั้งหมด</h1>
            <p>{totalFoods} รายการ</p>
          </div>

          <div className="btn-createselect">
            <select value={selectType}
              onChange={(e) => setSelectype(Number(e.target.value))}>
              <option value="">รายการทั้งหมด</option>
              {catagoryFood.map((catagory) => (
                <option key={catagory.id} value={catagory.id}>
                  {catagory.name}
                </option>
              ))}
            </select>
            <button onClick={() => setOpenCatagory(true)}><Package />  เพิ่มประเภทสินค้า</button>

            <button><Pizza />เพิ่มอาหาร</button>




          </div>
        </div>


        {selectType === 0 && (
          <div className="table-show">
            {catagoryFood.map((cat) => {
              const list = foodsByType(cat.name);
              return (
                <div>
                  <TableComponent
                    id={cat.id}
                    key={cat.id}
                    title={cat.name}
                    foods={list}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAddFood={handleAddFoods}
                    onDeleteCatagory={() => hanleDeleteCat(cat.id)}

                  />
                </div>

              );
            })}
          </div>
        )}

        {selectType !== 0 && (
          <div className="table-show">
            {(() => {
              const selectCatagory = catagoryFood.find(
                (c) => c.id === selectType
              );
              if (!selectCatagory) return null;
              const list = foodsByType(selectCatagory.name);

              return (
                <div>
                  <TableComponent
                    id={selectCatagory.id}
                    title={selectCatagory.name}
                    foods={list}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAddFood={handleAddFoods}
                    onDeleteCatagory={() => hanleDeleteCat(selectCatagory.id)}
                  />
                </div>
              );
            })()}
          </div>
        )}
      </div>


    </div>
  );
}

export default SettingsFoods;
