import React, { useEffect, useState } from "react";
import "./style.scss";
const AllCvSection = () => {
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
        {api.map((x) => {
          return (
            <div key={x._id} className="allCv_container_allCards_card">
              <div className="allCv_container_allCards_card_content">
              <div className="allCv_container_allCards_card_content_title">
              <div className="allCv_container_allCards_card_content_title_vacancyName">
              {x.position}
              </div>
              <div className="allCv_container_allCards_card_content_title_name">
                  {x.name} {x.surname}
              </div>
              <div    className="allCv_container_allCards_card_content_title_published">
              <i className="fa-regular fa-calendar"></i>
              {x.date.slice(0,10)}
              </div>
              </div>
              <div className="allCv_container_allCards_card_content_salary">
              <div className="allCv_container_allCards_card_content_salary_wishlist">
              <i className="fa-regular fa-heart"></i>
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