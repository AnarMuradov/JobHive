import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const AboutPage = () => {
  return (
    <section className="about">
      <div className="about_container">
        <div className="about_container_content">
          <div className="about_container_content_title">About</div>
          <div className="about_container_content_info">
            <p>
              WorkWave - это онлайн площадка для точного и быстрого поиска
              работы и подбора персонала, услугами которой могут воспользоваться
              все участники рынка труда. Проект предоставляет пользователям
              удобный доступ к обширной базе вакансий и резюме.
            </p>
            <p>
              Проект был основан в 2008-ом году и на данный момент является
              одним из крупнейших ресурсов в сфере трудоустройства на
              азербайджанском рынке.
            </p>
            <p>
              WorkWave не является компанией по трудоустройству и обеспечивает
              прямой и оперативный контакт между работодателем и соискателем.
            </p>
            <p>
              WorkWave предоставляет пользователям возможность самостоятельного
              размещения вакансий и резюме. Каждый пользователь может бесплатно
              разместить на сайте одну вакансию и/или одно резюме в месяц.
            </p>
            <p>
              Мы прикладываем все усилия к постоянному совершенствованию и
              развитию проекта и благодарны за отзывы, способствующие этому.
              Будем рады получить их по электронному адресу -
              <Link to={`mailto:anarmurado2004@gmail.com`}>
                anarmurado2004@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
