import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { WishListContext } from "../../../Context/WishListContext";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../Context/SearchContext";
const AllCvSection = () => {
    const {addWishList,removeWishList,isWishList} = useContext(WishListContext)
    const {search,setSearch} = useContext(SearchContext)

    const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cv")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  return (
    <section className="allCv">
    <div className="allCv_container">
      <div className="allCv_container_title">All Vacancies</div>
      <div className="allCv_container_allCards">
        {api.filter((x) =>
                    x.position.toLowerCase().includes(search.toLowerCase()) || x.name.toLowerCase().includes(search.toLowerCase())
                  )
        .map((x) => {
          return (
            <div key={x._id} className="allCv_container_allCards_card">
              <div className="allCv_container_allCards_card_content">
              <div className="allCv_container_allCards_card_content_title">
              <Link to={`/cvdetailpage/${x._id}`}><div className="allCv_container_allCards_card_content_title_vacancyName">
              {x.position}
              </div></Link>
              <div className="allCv_container_allCards_card_content_title_name">
              {x.name} {x.surname}
              </div>
              <div    className="allCv_container_allCards_card_content_title_published">
              <i className="fa-regular fa-calendar"></i>
              {x.date.slice(0,10)}
              </div>
              </div>
              <div className="allCv_container_allCards_card_content_salary">
              <div className="allCv_container_allCards_card_content_salary_wishlist" onClick={()=>addWishList(x)}>
              {!isWishList(x) ? <i className="fa-regular fa-heart"></i> :<i onClick={()=>removeWishList(x)} className="fa-solid fa-heart"></i>}
              </div>

              <div className="allCv_container_allCards_card_content_salary_slr">
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

export default AllCvSection