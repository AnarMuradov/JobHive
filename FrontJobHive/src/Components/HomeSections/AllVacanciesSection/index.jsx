import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { WishListContext } from "../../../Context/WishListContext";
import { Link } from "react-router-dom";
const AllVacancies = () => {
  const [api, setApi] = useState([]);
  const {addWishList,removeWishList,isWishList} = useContext(WishListContext)

  useEffect(() => {
    fetch("http://localhost:3000/vacancies")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  return (
    <section className="allVacancies">
      <div className="allVacancies_container">
        <div className="allVacancies_container_title">All Vacancies</div>
        <div className="allVacancies_container_allCards">
          {api.map((x) => {
            return (
              <div key={x._id} className="allVacancies_container_allCards_card">
                <div className="allVacancies_container_allCards_card_content">
                <div className="allVacancies_container_allCards_card_content_title">
                <div className="allVacancies_container_allCards_card_content_title_vacancyName">
                <Link to={`/vacancydetailpage/${x._id}`}>{x.position}</Link>
                </div>
                <div className="allVacancies_container_allCards_card_content_title_companyName">
                {x.company}
                </div>
                <div className="allVacancies_container_allCards_card_content_title_published">
                <i className="fa-regular fa-calendar"></i>
                {x.date.slice(0,10)}
                </div>
                </div>
                <div className="allVacancies_container_allCards_card_content_salary">
                <div className="allCv_container_allCards_card_content_salary_wishlist" onClick={()=>addWishList(x)}>
              {!isWishList(x) ? <i className="fa-regular fa-heart"></i> :<i onClick={()=>removeWishList(x)} className="fa-solid fa-heart"></i>}
              </div>
                <div className="allVacancies_container_allCards_card_content_salary_slr">
                {x.salary} AZN
                </div>
                </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllVacancies;
