import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useParams } from "react-router-dom";
import { WishListContext } from "../../Context/WishListContext";
import { SearchContext } from "../../Context/SearchContext";

const CvCategoryPage = () => {
  const [api, setApi] = useState([]);
  const { search, setSearch } = useContext(SearchContext);

  const [category, setCategory] = useState([]);
  const { addWishList, removeWishList, isWishList } =
    useContext(WishListContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/cvcategories/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:3000/cvbycategory/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  return (
    <section className="cvCategory">
      <div className="cvCategory_container">
        <div className="cvCategory_container_title">{category.category}</div>
        <div className="cvCategory_container_allCards">
          {api
            .filter(
              (x) =>
                x.position.toLowerCase().includes(search.toLowerCase()) ||
                x.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((x) => {
              return (
                <div key={x._id} className="cvCategory_container_allCards_card">
                  <div className="cvCategory_container_allCards_card_content">
                    <div className="cvCategory_container_allCards_card_content_title">
                      <div className="cvCategory_container_allCards_card_content_title_vacancyName">
                        <Link to={`/cvdetailpage/${x._id}`}>{x.position}</Link>
                      </div>
                      <div className="cvCategory_container_allCards_card_content_title_companyName">
                        {x.name} {x.surname}
                      </div>
                      <div className="cvCategory_container_allCards_card_content_title_published">
                        <i className="fa-regular fa-calendar"></i>
                        {x.date.slice(0, 10)}
                      </div>
                    </div>
                    <div className="cvCategory_container_allCards_card_content_salary">
                      <div
                        className="allCv_container_allCards_card_content_salary_wishlist"
                        onClick={() => addWishList(x)}
                      >
                        {!isWishList(x) ? (
                          <i className="fa-regular fa-heart"></i>
                        ) : (
                          <i
                            onClick={() => removeWishList(x)}
                            className="fa-solid fa-heart"
                          ></i>
                        )}
                      </div>
                      <div className="cvCategory_container_allCards_card_content_salary_slr">
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

export default CvCategoryPage;
