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

function Nav() {
  return (
    <nav>
  <div className="nav-container">
    {/* เมนูซ้าย */}
    <div className="menus">
      <ul className="items">
        <li><Home /> Home</li>
        <li><PizzaIcon /> Menu</li>
        <li><UtensilsCrossed /> Table</li>
        <li><ClipboardList /> Manage</li>
      </ul>
    </div>

    {/* โลโก้กลาง */}
    <div className="logos">
      <img src={logo} alt="logo" className="logo" />
    </div>

    {/* เมนูขวา */}
    <div className="menus">
      <ul className="items">
        <li><ShoppingCart /> Cart</li>
        <li className="dropdown">
          <div className="dropdown-btn"><User /> User</div>
          <ul className="dropdown-menu">
            <li><Settings /> Settings</li>
            <li><LogOut /> Logout</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Nav;
