import { Package,  Pizza } from "lucide-react";
import "./ManagePageCss/ManageFoods.css";
import { useState } from "react";
import { foodsData } from './foodData'
import TableComponent from "../../../Components/TableComponent/TableComponent";
import DialogComponent from "../../../Components/DialogComponent/DialogComponent";

function ManageFoods() {
  const [openCatagory, setOpenCatagory] = useState(false)
  const [newCatagory, setNewCatagory] = useState('')
  const [editItem, setEditItem] = useState<any>(null)
  const [editName, setEditName] = useState('')
  const [editPrice, setEditPrice] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [selectType, setSelectype] = useState<string>("");
  const [foods, setFoods] = useState(foodsData)


  const foodsByType = (typeName: string) =>
    foods.filter((f) => f.type === typeName);

  const [catagoryFood, setCatagoryFood] = useState([
    { id: "1", name: "ส้มตำ" },
    { id: "2", name: "ลาบ/ยำ" },
    { id: "3", name: "ทอด/ย่าง" },
    { id: "4", name: "ตามสั่ง" },
  ])


  const totalFoods = selectType === "" ? foods.length : foods.filter((f) => f.type === catagoryFood.find((c) => c.id === selectType)?.name).length;
  const handleEdit = (food: any) => {
    setEditItem(food)
    setEditName(food.name)
    setEditPrice(food.price.toString())
    setOpenEdit(true)
  }
  const handleConfirmEdit = () => {
    if (editItem) {
      setFoods(foods.map(f =>
        f.id === editItem.id ? { ...f, name: editName, price: Number(editPrice) } : f))
    }
    setOpenEdit(false)
    setEditItem(null)
  }


  const handleDelete = (id: string) => {
    setDeleteId(id)
    setOpen(true)
  }

  const handleAddFoods = (typeName: string, name:string, price:number) =>{
    const newFoods = {
      id: (foods.length + 1 ).toString(),
      name,
      price,
      type:typeName
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
            const newId = (catagoryFood.length + 1).toString()
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

      <div className="foods-headers">
        <div className="texts-header">
          <div className="total-food">
            <h1>รายการทั้งหมด</h1>
            <p>{totalFoods} รายการ</p>
          </div>

          <div className="btn-createselect">
            <select value={selectType}
              onChange={(e) => setSelectype(e.target.value)}>
              <option value="">รายการทั้งหมด</option>
              {catagoryFood.map((catagory) => (
                <option key={catagory.id} value={catagory.id}>
                  {catagory.name}
                </option>
              ))}
            </select>
            <button onClick={() => setOpenCatagory(true)}><Package />  เพิ่มประเภทสินค้า</button>
            <button>
              <Pizza />
              เพิ่มอาหาร
            </button>

          </div>
        </div>


        {selectType === "" && (
          <div className="table-show">
            {catagoryFood.map((cat) => {
              const list = foodsByType(cat.name);
              return (
                <div>

                  <TableComponent
                    key={cat.id}
                    title={cat.name}
                    foods={list}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAddFood={handleAddFoods}
                  />
                </div>

              );
            })}
          </div>
        )}

        {selectType !== "" && (
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

                    title={selectCatagory.name}
                    foods={list}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAddFood={handleAddFoods}

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

export default ManageFoods;
