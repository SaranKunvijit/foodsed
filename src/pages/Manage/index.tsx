import React, { useState } from 'react'
import './manage.css'
import { Camera } from 'lucide-react'
import ManageHome from './ManagePage/ManageHome'
import ManageTable from './ManagePage/ManageTable'
import ManageFoods from './ManagePage/ManageFoods'


function Manage() {
  const [preview, setPreview] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'home' | 'table' | 'foods'>('home')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setPreview(imageURL)
    }
  }

  const renderComponent = () => {
    switch (activeTab) {
      case 'home':
        return <ManageHome />
      case 'table':
        return <ManageTable />
      case 'foods':
        return <ManageFoods />
      default:
        return null
    }
  }

  return (
    <div className='containers'>
      <div className="text-headers">
        <div className="text-manage">
          <h1>Manage Data</h1>
          <h2>จัดการข้อมูล</h2>
        </div>

        <div className="menus-manage">
          <ul>
            <li onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>
              จัดการหน้าหลัก
            </li>
            <li onClick={() => setActiveTab('table')} className={activeTab === 'table' ? 'active' : ''}>
              โต๊ะ
            </li>
            <li onClick={() => setActiveTab('foods')} className={activeTab === 'foods' ? 'active' : ''}>
              จัดการอาหาร
            </li>
          </ul>
        </div>
      </div>

      <div className="content-area">
        {renderComponent()}
      </div>
    </div>
  )
}

export default Manage
