import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Advertising = () => {
  return (
    <section className="advertising">
      <div className="advertising_container">
        <div className="advertising_container_content">
          <div className="advertising_container_content_title">Advertising</div>
          <div className="advertising_container_content_info">
            <p>
              WorkWave - это один из самых популярных и стабильно растущих
              интернет ресурсов Азербайджана, который ежедневно посещают тысячи
              человек.
            </p>
            <p>
              Реклама на WorkWave - это один из лучших способов сообщить о ваших
              брендах, товарах, услугах, акциях и знаменательных событиях очень
              большой аудитории!
            </p>
            <p>
              Вы добьетесь как серьезного увеличения узнаваемости вашего бренда,
              так и широкого распространения информации о ваших продуктах, а
              также получите отличную возможность простым путем повысить
              посещаемость интернет сайтов ваших компаний и организаций.
            </p>
            <p>Мы будем рады сотрудничеству с вами!</p>
            <Link to={`mailto:anarmurado2004@gmail.com`}>
              anarmurado2004@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertising;
