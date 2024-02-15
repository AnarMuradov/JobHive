import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
const SearchSeaction = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="seachSct">
      <div className="seachSct_container">
        <div className="seachSct_container_items">
          <div className="seachSct_container_items_vacancy">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Vacancies
            </NavLink>
          </div>
          <div className="seachSct_container_items_">
            <NavLink
              to={"/cv"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              CV's
            </NavLink>
          </div>
        </div>
        <div className="seachSct_container_input">
          <input className={isOpen ? "active" : ""}  type="text"/>
          <i onClick={handleToggle} className={isOpen ? "fa-solid fa-x" : "fa-solid fa-search"}></i>
        </div>
      </div>
    </section>
  );
};

export default SearchSeaction;