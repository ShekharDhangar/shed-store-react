import { navItems, navIcons } from "../navItems";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Navbar-Media.css";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { logoImg } from "../../assets/images.js";
import { BiSearch, IoChevronBack } from "../../icons/icons";


const Navbar = ({ menuRequired, navTxt, logoRemove ,prevPage}) => {
  const [sideBar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar((sideBar) => !sideBar);
  return (
    <>
      <section className="flex nav-section">
        {menuRequired && (
          <div onClick={showSidebar} className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        )}
        {navTxt && (
          <div className="nav-icon-grp lt-bold">
            <Link className="flex" to={prevPage}>
            <IoChevronBack className="back-arrow icon size-xs" />
              </Link>
            <span className="nav-txt">{navTxt}</span>
          </div>
        )}
        <div className="flex h-100 logo-container">
        < Link to ='/' >
          <img src={logoImg} alt="logo" className={`logoImg flex ${logoRemove}`} />
        </Link>
        </div>
        <nav className="w-100 h-100 navbar">
          <ul className="list-none flex nav-link-container">
            {navItems.map((navItem) => {
              return (
                <li key={navItem.id} className="nav-content lt-bold">
                    < Link className="nav-link" to ={navItem.url} >{navItem.title}</Link>
                </li>
              );
            })}
          </ul>
          <div className="flex nav-icon-container">
            <div className="flex search-container ">
              <input
                className="search-input"
                type="text"
                placeholder="Search..."
              />
              <div className="search-icon-container">
                <BiSearch className="search-btn" />
              </div>
            </div>
            {navIcons.map((navIcon) => {
              return (
                <div
                  key={navIcon.id}
                  className="flex pointer relative icon-container"
                >
                  {navIcon.icon}
                  <span className={navIcon.txtClassName}>{navIcon.title}</span>
                  {navIcon.logBtn && <button className="absolute btn log-out-btn" >Log out</button>}
                </div>
              );
            })}
            
          </div>
        </nav>
      </section>
      {sideBar && <Sidebar />}
    </>
  );
};
export default Navbar;
