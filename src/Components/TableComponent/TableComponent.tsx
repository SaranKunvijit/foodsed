import { ImagePlus, PencilLine, Pizza, Trash2 } from "lucide-react";
import React, { useState, type FC } from "react";
import "./TableComponent.css";
type Food = {
  id: string;
  image: string;
  name: string;
  price: number;
  type: string;
};
type TableProps = {
  title: string;
  foods: Food[];
  onEdit: (food: Food) => void;
  onDelete: (id: string) => void;
  onAddFood: (id: string, image: string, name: string, price: number) => void;
  onDeleteCatagory: (id: string) => void;
};

const TableComponent: FC<TableProps> = ({
  title,
  foods,
  onEdit,
  onDelete,
  onAddFood,
  onDeleteCatagory
}) => {

  const [newImage, setNewImage] = useState("");
  const [adding, setAdding] = useState(false);
  const [newFoodName, setNewFoodName] = useState("");
  const [newPrice, setNewPrice] = useState("");


  const handleAddFood = () => setAdding(true);
  const handleSaveNewFood = () => {
    if (newFoodName.trim() && newPrice) {
      onAddFood(title, newImage, newFoodName, Number(newPrice));
      setAdding(false);
      setNewFoodName("");
      setNewPrice("");
      setNewImage('');
    }
  };


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setNewImage(imgURL);
    }
  };
  return (
    <div>
      <div className="table-headerlist">
        <h2>{title}</h2>
        <div className="add-removebtn">
          <button onClick={handleAddFood}><Pizza />เพิ่มสินค้า</button>
          <button className="remove-cat" onClick={() => onDeleteCatagory(title)}><Trash2 />ลบประเภทสินค้า</button>
        </div>


      </div>

      <div className="table-list">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>รูปภาพ</th>
              <th>ชื่ออาหาร</th>
              <th>ราคา</th>
              <th>แก้ไข</th>
              <th>ลบ</th>
              <th>ปริ้นเตอร์</th>
            </tr>
          </thead>

          <tbody>
            {foods.map((f, index) => (

              <tr key={f.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={f.image}
                    width={90}
                    height={90}
                    style={{ borderRadius: "6px", objectFit:'cover' }}
                    alt=""
                  />
                </td>
                <td>{f.name}</td>
                <td>{f.price}</td>

                <td>
                  <PencilLine
                    color="green"
                    cursor="pointer"
                    onClick={() => onEdit(f)}
                  />
                </td>

                <td>
                  <Trash2
                    color="red"
                    cursor="pointer"
                    onClick={() => onDelete(f.id)}
                  />
                </td>

                <td></td>
              </tr>
            ))}

            {adding && (
              <tr>
                <td>#</td>
                <td>
                  {newImage ? (
                    <div className="img-wrappers">
                      <img src={newImage} alt="" className="show-image" />

                      <div className="img-overlays">
                        {/* <button className="btn-change" onClick={() => document.getElementById("addImageUpload")?.click()}>เปลี่ยนรูป</button> */}
                        <button className="btn-removes" onClick={() => setNewImage("")} >ลบรูป</button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => document.getElementById("addImageUpload")?.click()}className="btn-editimage"><ImagePlus /></button>
                  )}

                  <input
                    id="addImageUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    value={newFoodName}
                    onChange={(e) => setNewFoodName(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                </td>

                <td>
                  <div className="btn-can">
                    <button onClick={handleSaveNewFood}>บันทึก</button>
                    <button onClick={() => setAdding(false)}>ยกเลิก</button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableComponent;
