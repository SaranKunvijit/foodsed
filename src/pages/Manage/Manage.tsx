import  { useState } from 'react'
import './manage.css'

import ManageHome from './ManagePage/ManageHome'
import ManageTable from './ManagePage/ManageTable'
import ManageFoods from './ManagePage/ManageFoods'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
function Manage() {


  const [activeTab, setActiveTab] = useState<'home' | 'table' | 'foods'>('home')
 

  const HeadersText = () => {
    switch (activeTab) {
      case 'home':
        return { title: 'Manage Home', subtitle: 'จัดการหน้าหลัก' }
      case 'table':
        return { title: 'Manage Table', subtitle: 'จัดการโต๊ะ' }
      case 'foods':
        return { title: 'Manage Foods', subtitle: 'จัดการรายการอาหาร' }
    }
  }

  const renderComponent = () => {
    switch (activeTab) {
      case 'home': return <ManageHome />
      case 'table': return <ManageTable />
      case 'foods': return <ManageFoods />
    }
  }
  const headerText = HeadersText()
  return (
    <div className='containers'>
      <div className="text-headers">
      <div className="text-manage">
          <h1>{headerText.title}</h1>
          <h2>{headerText.subtitle}</h2>
        </div>
        <div className="menus-manage">
          <ul>
            <li onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}><Home />จัดการหน้าหลัก</li>
            <li onClick={() => setActiveTab('table')} className={activeTab === "table" ? 'active' : ''}><UtensilsCrossed />โต๊ะ</li>
            <li onClick={() => setActiveTab('foods')} className={activeTab === 'foods' ? 'active' : ''}><Pizza />จัดการอาหาร</li>
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