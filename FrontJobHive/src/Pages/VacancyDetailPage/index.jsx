import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WishListContext } from "../../Context/WishListContext";
import "./style.scss";

const VacancyDetailPage = () => {
  const [api, setApi] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/vacancies/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  const { addWishList, removeWishList, isWishList } =
    useContext(WishListContext);

  return (
    <section className="vacancyDetail">
      <div className="vacancyDetail_container">
        <div className="vacancyDetail_container_title">
          <div className="vacancyDetail_container_title_content">
            <div className="vacancyDetail_container_title_content_name">
              <div className="vacancyDetail_container_title_content_name_position">
                {api.position}
              </div>
              <div className="vacancyDetail_container_title_content_name_company">
                {api.company}
              </div>
            </div>
            <div className="vacancyDetail_container_title_content_salaryColumn">
              <div
                className="vacancyDetail_container_title_content_salaryColumn_wishlist"
                onClick={() => addWishList(api)}
              >
                {!isWishList(api) ? (
                  <i className="fa-regular fa-heart"></i>
                ) : (
                  <i
                    onClick={() => removeWishList(api)}
                    className="fa-solid fa-heart"
                  ></i>
                )}
              </div>
              <div className="vacancyDetail_container_title_content_salaryColumn_salary">
                {api.salary} AZN
              </div>
            </div>
          </div>
        </div>
        <div className="vacancyDetail_container_vacancyInfo">
          <div className="vacancyDetail_container_vacancyInfo_content">
            <div className="vacancyDetail_container_vacancyInfo_content_column">
              <ul className="vacancyDetail_container_vacancyInfo_content_column_list1">
                <li>Region</li>
                <li>Age</li>
                <li>Education</li>
                <li>Experience</li>
              </ul>
              <ul className="vacancyDetail_container_vacancyInfo_content_column_list">
                <li>{api.region}</li>
                <li>{api.age}</li>
                <li>{api.education}</li>
                <li>{api.experience}</li>
              </ul>
            </div>
            <div className="vacancyDetail_container_vacancyInfo_content_column">
              <ul className="vacancyDetail_container_vacancyInfo_content_column_list1">
                <li>Phone</li>
                <li>Email</li>
                <li>Contact</li>
                <li>Published on</li>
              </ul>
              <ul className="vacancyDetail_container_vacancyInfo_content_column_list">
                <Link to={`tel:${api.phone}`}>
                  <li>{api.phone}</li>
                </Link>
                <Link to={`mailto:${api.email}`}>
                  <li>{api.email}</li>
                </Link>
                <li>{api.contact}</li>
                <li>{api.date?.slice(0, 10)}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="vacancyDetail_container_description">
          <div className="vacancyDetail_container_description_content">
            <div className="vacancyDetail_container_description_content_text">
              <span>Job description</span>
              <p>{api.description}</p>
            </div>
            <div className="vacancyDetail_container_description_content_text">
              <span>Requirements</span>
              <p>{api.requirements}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacancyDetailPage;
