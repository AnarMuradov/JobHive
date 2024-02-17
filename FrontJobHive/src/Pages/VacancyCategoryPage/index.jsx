import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { WishListContext } from "../../Context/WishListContext";

const VacancyCategoryPage = () => {
    const [api, setApi] = useState([]);
    const [category, setCategory] = useState([]);
    const {addWishList,removeWishList,isWishList} = useContext(WishListContext)
    const { id } = useParams();
  
    useEffect(() => {
        fetch(`http://localhost:3000/vacancycategories/${id}`)
          .then((res) => res.json())
          .then((data) => setCategory(data));
      }, []);
    useEffect(() => {
      fetch(`http://localhost:3000/vacancybycategory/${id}`)
        .then((res) => res.json())
        .then((data) => setApi(data));
    }, []);
  return (
    <section className="vacancyCategory">
    <div className="vacancyCategory_container">
      <div className="vacancyCategory_container_title">{category.category}</div>
      <div className="vacancyCategory_container_allCards">
        {api.map((x) => {
          return (
            <div key={x._id} className="vacancyCategory_container_allCards_card">
              <div className="vacancyCategory_container_allCards_card_content">
              <div className="vacancyCategory_container_allCards_card_content_title">
              <div className="vacancyCategory_container_allCards_card_content_title_vacancyName">
              <Link to={`/vacancydetailpage/${x._id}`}>{x.position}</Link>
              </div>
              <div className="vacancyCategory_container_allCards_card_content_title_companyName">
              {x.company}
              </div>
              <div className="vacancyCategory_container_allCards_card_content_title_published">
              <i className="fa-regular fa-calendar"></i>
              {x.date.slice(0,10)}
              </div>
              </div>
              <div className="vacancyCategory_container_allCards_card_content_salary">
              <div className="allCv_container_allCards_card_content_salary_wishlist" onClick={()=>addWishList(x)}>
            {!isWishList(x) ? <i className="fa-regular fa-heart"></i> :<i onClick={()=>removeWishList(x)} className="fa-solid fa-heart"></i>}
            </div>
              <div className="vacancyCategory_container_allCards_card_content_salary_slr">
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
  )
}

export default VacancyCategoryPage