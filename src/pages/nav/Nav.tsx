import './nav.css'
import logo from '../../assets/logo-all-restuarant...png'
import { ClipboardList, LogOut, Settings, ShoppingCart, User, UtensilsCrossed,PizzaIcon   } from 'lucide-react'

function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />

      <div className="menus">
        <ul className="items">
          <li><ShoppingCart />Cart</li>
          <li><PizzaIcon   /> Menu</li>
          <li><UtensilsCrossed /> Table</li>

          <li className="dropdown">
            <div className="dropdown-btn">
              <User /> User
            </div>

            <ul className="dropdown-menu">
              <li><ClipboardList /> Manage</li>
              <li><Settings /> Settings</li>
              <li><LogOut /> Logout</li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
