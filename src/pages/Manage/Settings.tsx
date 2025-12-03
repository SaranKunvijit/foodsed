import { useState } from 'react'
import './Settings.css'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import SettingsHome from './ManagePage/SettingsHome'
import SettingsFoods from './ManagePage/SettingsFoods'
function Settings() {
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
      case 'home': return <SettingsHome />
      case 'foods': return <SettingsFoods />
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

export default Settings