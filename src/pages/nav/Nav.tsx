import "./nav.css";
import logo from "../../assets/logo-res.png";
import {
  ClipboardList,
  LogOut,
  Settings,
  ShoppingCart,
  User,
  UtensilsCrossed,
  PizzaIcon,
  Home,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import type { FC } from "react";
interface NavProps {
  openCart: () => void;
}


const Nav: FC<NavProps> = ({ openCart }) => {
  const location = useLocation();




  const isHome = location.pathname === "/";

  return (
    <nav className={isHome ? "nav-home" : "nav-default"}>

      <div className="nav-container">
        {/* เมนูซ้าย */}
        <div className="menus">
          <ul className="items">
            <li><Link to="/"><Home /> Home</Link></li>
            <li><Link to="/menu"><PizzaIcon /> Menu</Link></li>
            <li><Link to="/tables"><UtensilsCrossed /> Table</Link></li>
            <li><Link to="/manage"><ClipboardList /> Manage</Link></li>
          </ul>
        </div>

        {/* โลโก้กลาง */}
        <div className="logos">
          <img src={logo} alt="logo" className="logo" />
        </div>

        {/* เมนูขวา */}
        <div className="menus">
          <ul className="items">
          <li onClick={openCart}>
          <span className="nav-item-btn"><ShoppingCart /> Cart</span>
        </li>

            <li className="dropdown">
              <div className="dropdown-btn"><User /> User</div>
              <ul className="dropdown-menu">
                <li><Link to="/user"><User /> Account</Link></li>
                <li><Link to="/settings"><Settings /> Settings</Link></li>
                <li><Link to="/logout"><LogOut /> Logout</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
