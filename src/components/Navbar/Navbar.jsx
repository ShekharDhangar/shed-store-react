import { navItems } from "../navItems";
import "./Navbar.css";
import "./Navbar-Media.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../components";
import { logoImg } from "../../assets/images.js";
import {
  FaShoppingCart,
  BiSearch,
  FaHeart,
  FaUserAlt,
  IoChevronBack,
} from "../../icons/icons";
import { useCartContext, useWishlistContext } from "../../context/context";

const Navbar = ({ menuRequired, navTxt, logoRemove }) => {
  const [DropDown, setDropDown] = useState(false);
  const { Cart } = useCartContext();
  const navigate = useNavigate();
  const { Wishlist } = useWishlistContext();
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
            <IoChevronBack
              onClick={() => navigate(-1)}
              className="back-arrow icon size-xs"
            />
            <span className="nav-txt">{navTxt}</span>
          </div>
        )}
        <div className="flex h-100 logo-container">
          <Link to="/">
            <img
              src={logoImg}
              alt="logo"
              className={`logoImg flex ${logoRemove}`}
            />
          </Link>
        </div>
        <nav className="w-100 h-100 navbar">
          <ul className="list-none flex nav-link-container">
            {navItems.map((navItem) => {
              return (
                <li key={navItem.id} className="nav-content lt-bold">
                  <Link className="nav-link" to={navItem.url}>
                    {navItem.title}
                  </Link>
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

            <div
              onClick={() => setDropDown((prev) => !prev)}
              className="flex pointer relative icon-container"
            >
              <FaUserAlt className="user-icon icon" />
              <span className="icon-txt">Profile</span>
              {DropDown && (
                <div className="absoloute inset-0 profile-box">
                  <button
                    onClick={() => navigate("/login")}
                    className="w-100 btn btn-xs"
                  >
                    Login/SignUp
                  </button>
                </div>
              )}
            </div>

            <div
              onClick={() => navigate("/wishlist")}
              className="flex pointer relative icon-container"
            >
              <FaHeart className="wishlist-icon icon " />
              {Wishlist.length > 0 && (
                <span className="flex number-badge">{Wishlist.length}</span>
              )}
              <span className="icon-txt">Wishlist</span>
            </div>

            <div
              onClick={() => navigate("/cart")}
              className="flex pointer relative icon-container"
            >
              <FaShoppingCart className="cart-icon icon " />
              {Cart.length > 0 && (
                <span className="flex number-badge">{Cart.length}</span>
              )}
              <span className="icon-txt">Cart</span>
            </div>
          </div>
        </nav>
      </section>
      {sideBar && <Sidebar />}
    </>
  );
};
export { Navbar };
