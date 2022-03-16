import "./Sidebar.css";
import {Link} from 'react-router-dom';
import { MdClose } from "../../icons/icons";
import { aboutUsMenu, contactUsMenu, navItems } from "../navItems";
function Sidebar() {
  return (
    <aside className="side-overlay">
      <section className="sidebar">
        <div className="sidebar-header">
          <span className="welcome-header txt-sm bold">Welcome</span>
          <div className="txt-grey register lt-bold">Login / SignUp</div>
        </div>
        <div className="divider">"</div>
        <div className="menu-content">
          <ul className="menu-list list-none ">
            <span className="menu-head txt-sm txt-grey">SHOP IN</span>
            {navItems.map((navItem) => {
              return (
                <li key={navItem.id} className="nav-content">
                  <Link className={navItem.className} to={navItem.url}>
                    {navItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="bg-grey menu-list list-none  ">
            <span className="menu-head txt-sm txt-grey ">CONTACT US</span>
            {contactUsMenu.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
          <ul className="bg-grey menu-list list-none  ">
            <span className="menu-head txt-sm txt-grey ">ABOUT US</span>
            {aboutUsMenu.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </aside>
  );
}
export default Sidebar;
