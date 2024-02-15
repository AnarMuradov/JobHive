import React, { useEffect, useState } from "react";
import "./style.scss";
const AllVacancies = () => {
  const [api, setApi] = useState([]);
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
                {x.position}
                </div>
                <div className="allVacancies_container_allCards_card_content_title_companyName">
                    {x.company}
                </div>
                <div    className="allVacancies_container_allCards_card_content_title_published">
                <i className="fa-regular fa-calendar"></i>
                {x.date.slice(0,10)}
                </div>
                </div>
                <div className="allVacancies_container_allCards_card_content_salary">
                <div className="allVacancies_container_allCards_card_content_salary_wishlist">
                <i className="fa-regular fa-heart"></i>
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
