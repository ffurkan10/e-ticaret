import React, { useRef } from "react";
import Loading from "../../components/loading/Loading";
import Items from "../../components/items/Items";
import * as IconFa from "react-icons/fa";
import * as IconGi from "react-icons/gi";
import * as IconAi from "react-icons/ai";
import blueContent from "../../assets/items.jpg";

const Home = ({ products, deleteProduct, loading }) => {
  const targetRef = useRef(null);

  if (loading) {
    return <Loading />;
  }

  const handleClick = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="home__view">
        <div className="home__view__welcome">
          <h1>Mağazamıza hoş geldiniz!</h1>
          <p>
            Uygun fiyatlarla son teknoloji ürünlere ulaşabileceğiniz sanal
            mağazamıza hoşgeldiniz.{" "}
          </p>
          <button>Daha fazla bilgi</button>
          <span>Tıkla</span>
          <IconAi.AiOutlineArrowDown
            style={{ cursor: "pointer" }}
            onClick={handleClick}
            size={40}
            className="home__view__welcome__btn"
          />
        </div>
      </div>

      <div ref={targetRef} className="home__container">
        <div className="home__container__content">
          <div className="home__container__content__header">
            <h2>Ürünlerimiz</h2>
          </div>
          <ul className="home__container__content__lists">
            {products?.map((list) => (
              <Items
                key={list.UrunId}
                deleteProduct={deleteProduct}
                list={list}
              />
            ))}
          </ul>
        </div>

        <div className="home__container__desc">
          <div className="home__container__desc__left">
            <h3>Sizin için en iyisini sunuyoruz</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              facilis provident quas dolore sit necessitatibus obcaecati quo
              nulla perferendis corporis iure rerum quae eius natus, eligendi id
              similique fugiat incidunt odit vitae animi temporibus earum ipsam.
              Omnis beatae recusandae molestiae nulla porro laudantium tenetur
              optio ea, animi nostrum distinctio pariatur.
            </p>
          </div>
          <div className="home__container__desc__right">
            <div className="home__container__desc__right__img">
              <img src={blueContent} alt="" />
            </div>
          </div>
        </div>

        <div className="home__container__cargo">
          <div className="home__container__cargo__header">
            <h2>Neden bizi seçmelisiniz?</h2>
          </div>
          <ul className="home__container__cargo__cards">
            <li className="home__container__cargo__cards__list">
              <div className="home__container__cargo__cards__list__img">
                <IconFa.FaShippingFast size={"30px"} />
              </div>
              <div className="home__container__cargo__cards__list__desc">
                <h4>HIZLI TESLİMAT</h4>
                <p>Herhangi bir adrese 2 gün içinde teslimat.</p>
              </div>
            </li>
            <li className="home__container__cargo__cards__list">
              <div className="home__container__cargo__cards__list__img">
                <IconFa.FaLuggageCart size={"30px"} />
              </div>
              <div className="home__container__cargo__cards__list__desc">
                <h4>ÜCRETSİZ KARGO</h4>
                <p>Ülkenin her yerine ücretsiz gönderim.</p>
              </div>
            </li>
            <li className="home__container__cargo__cards__list">
              <div className="home__container__cargo__cards__list__img">
                <IconGi.GiAchievement size={"30px"} />
              </div>
              <div className="home__container__cargo__cards__list__desc">
                <h4>EN İYİ KALİTE</h4>
                <p>Tamamen orjinal ürünler ve en iyi hizmet kalitesi.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
