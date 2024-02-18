import React, { useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
const Navbar = () => {
  const { decode, LogOut } = useContext(UserContext);
  return (
    <nav className="navbar">
      <div className="navbar_top">
        <div className="navbar_top_container">
          <div className="navbar_top_container_lang">EN</div>
          <Link to={"/advertising"}>
            <div className="navbar_top_container_ad">Advertising</div>
          </Link>

          <div className="navbar_top_container_theme">DarkMode</div>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="navbar_bottom_container">
          <div className="navbar_bottom_container_logo">
            <img src="/src/Image/logo.png" alt="" />
          </div>
          <div className="navbar_bottom_container_items">
            {decode ? (
              <>
                <div
                  onClick={() => {
                    LogOut();
                  }}
                  className="navbar_bottom_container_items_login"
                >
                  <span>LogOut</span>
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                </div>
                <div className="navbar_bottom_container_items_ad">
                  Post your ad
                </div>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <div className="navbar_bottom_container_items_login">
                    <span>Login</span>
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                  </div>
                </Link>
              </>
            )}
            <Link to={"/wishlist"}>
              <div className="navbar_bottom_container_items_wishlist">
                <i className="fa-regular fa-heart"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
