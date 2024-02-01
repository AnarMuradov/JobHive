import React from "react";
import "./style.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_top">
        <div className="navbar_top_container">
          <div className="navbar_top_container_lang">EN</div>
          <div className="navbar_top_container_ad">Advertising</div>
          <div className="navbar_top_container_theme">DarkMode</div>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="navbar_bottom_container">
          <div className="navbar_bottom_container_logo">
            <img src="/src/Image/logo.png" alt="" />
          </div>
          <div className="navbar_bottom_container_items">
            <div className="navbar_bottom_container_items_login">
              <span>Login</span>
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </div>
            <div className="navbar_bottom_container_items_wishlist">
              <i className="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
