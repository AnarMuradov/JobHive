import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { WishListContext } from "../../Context/WishListContext";
import "./style.scss";

const CvDetailPage = () => {
    const [api, setApi] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/cv/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  const { addWishList, removeWishList, isWishList } =
    useContext(WishListContext);

  return (
    <section className="cvDetail">
      <div className="cvDetail_container">
        <div className="cvDetail_container_title">
          <div className="cvDetail_container_title_content">
            <div className="cvDetail_container_title_content_name">
              <div className="cvDetail_container_title_content_name_position">
                {api.position}
              </div>
              <div className="cvDetail_container_title_content_name_company">
                {api.name} {api.surname}
              </div>
            </div>
            <div className="cvDetail_container_title_content_salaryColumn">
              <div
                className="cvDetail_container_title_content_salaryColumn_wishlist"
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
              <div className="cvDetail_container_title_content_salaryColumn_salary">
                {api.salary} AZN
              </div>
            </div>
          </div>
        </div>
        <div className="cvDetail_container_vacancyInfo">
          <div className="cvDetail_container_vacancyInfo_content">
            <div className="cvDetail_container_vacancyInfo_content_column">
              <ul className="cvDetail_container_vacancyInfo_content_column_list1">
                <li>Region</li>
                <li>Age</li>
                <li>Gender</li>
                {api.patronymic ? <li>Full name</li> :null}
              </ul>
              <ul className="cvDetail_container_vacancyInfo_content_column_list">
                <li>{api.region}</li>
                <li>{api.age} years</li>
                <li>{api.gender}</li>
                {api.patronymic ? <li>{api.name} {api?.patronymic} {api.surname}</li> :null}
              </ul>
            </div>
            <div className="cvDetail_container_vacancyInfo_content_column">
              <ul className="cvDetail_container_vacancyInfo_content_column_list1">
                <li>Phone</li>
                <li>Email</li>
                <li>Published on</li>
              </ul>
              <ul className="cvDetail_container_vacancyInfo_content_column_list">
                <Link to={`tel:${api.phones}`}>
                  <li>{api.phones}</li>
                </Link>
                <Link to={`mailto:${api.email}`}>
                  <li>{api.email}</li>
                </Link>
                <li>{api.date?.slice(0, 10)}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cvDetail_container_description">
          <div className="cvDetail_container_description_content">
            <div className="cvDetail_container_description_content_text">
              <div className="cvDetail_container_description_content_text_row">
              <span>Education</span>
              <p>{api.education}</p>
              </div>
              <div className="cvDetail_container_description_content_text_row">
              <span>Skills</span>
              <p>{api.skills}</p>
              </div>

            </div>
            <div className="cvDetail_container_description_content_text">
            
            <div className="cvDetail_container_description_content_text_row">
            <span>Experience</span>
              <p>{api.experience}</p>
            </div>
            <div className="cvDetail_container_description_content_text_row">
            <span>About</span>
              <p>{api.about}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CvDetailPage