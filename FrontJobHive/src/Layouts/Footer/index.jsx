import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_container">
        <div className="footer_container_logo">
          <img src="/src/Image/footer_logo.png" alt="" />
          <div className="footer_container_logo_slogan">Shape your success</div>
        </div>
        <div className="footer_container_content">
          <div className="footer_container_content_block">
            <div className="footer_container_content_block_title">
              <Link to={"/"}>WorkWave</Link>
            </div>
            <div className="footer_container_content_block_items">
              <ul className="footer_container_content_block_items_list">
                <li>About</li>
                <li>Advertising</li>
              </ul>
            </div>
          </div>

          <div className="footer_container_content_block">
            <div className="footer_container_content_block_title">Ads</div>
            <div className="footer_container_content_block_items">
              <ul className="footer_container_content_block_items_list">
                <li>
                  <Link to={"/"}>All vacancies</Link>
                </li>
                <li>
                  <Link to={'/cv'}>All CV's</Link>
                </li>
                <li>
                  <Link>Post your ad</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_container_content_icons">
            <Link to={"https://www.instagram.com/muradov_v04"}>
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to={"https://t.me/muradov_v"}>
              <i className="fa-brands fa-telegram"></i>
            </Link>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
