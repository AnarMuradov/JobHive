import React, { useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { WishListContext } from "../../Context/WishListContext";
import { SearchContext } from "../../Context/SearchContext";

const WishListPage = () => {
  const { addWishList, removeWishList, isWishList, wishlist } =
    useContext(WishListContext);
    const {search,setSearch} = useContext(SearchContext)


  return (
    <section className="wishList">
      <div className="wishList_container">
        <div className="wishList_container_title">WishList</div>
        <div className="wishList_container_allCards">
          {wishlist.filter(
              (x) =>
                x.position.toLowerCase().includes(search.toLowerCase())
            )
            .map((x) => {
              return (
                <div key={x._id} className="wishList_container_allCards_card">
                  <div className="wishList_container_allCards_card_content">
                    <div className="wishList_container_allCards_card_content_title">
                      <div className="wishList_container_allCards_card_content_title_vacancyName">
                        <Link to={`/vacancydetailpage/${x._id}`}>
                          {x.position}
                        </Link>
                      </div>
                      <div className="wishList_container_allCards_card_content_title_companyName">
                        {x?.company} {x?.name} {x?.surname}
                      </div>
                      <div className="wishList_container_allCards_card_content_title_published">
                        <i className="fa-regular fa-calendar"></i>
                        {x.date.slice(0, 10)}
                      </div>
                    </div>
                    <div className="wishList_container_allCards_card_content_salary">
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
                      <div className="wishList_container_allCards_card_content_salary_slr">
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

export default WishListPage;
