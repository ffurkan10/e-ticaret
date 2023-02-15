import React from "react";
import ReactStars from "react-rating-stars-component";

const Items = ({ list, deleteProduct }) => {
  const productStar = {
    size: 25,
    count: 5,
    isHalf: false,
    color: "grey",
    border: "yellow",
    activeColor: "#FFD700",
    onChange: (newValue) => {
      console.log(`Example 3: new value is ${newValue}`);
    },
  };

  return (
    <li className="home__container__content__lists__card">
      <div className="home__container__content__lists__card__title">
        <h3>{list?.UrunMarka}</h3>
        <div className="home__container__content__lists__card__title__detail">
          <p>{list?.UrunAdi}</p>
          <span>({list?.UrunKategorisi})</span>
        </div>
      </div>
      <div className="home__container__content__lists__card__price">
        <p>
          {list?.UrunFiyati.toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </p>
        <ReactStars value="0" {...productStar} />
      </div>
      <div className="home__container__content__lists__card__discount">
        <p>
          <strong>{list?.KuponKodu}</strong> kupon kodu ile sepette %
          <strong>{list.IndirimOrani}</strong> indirim.
        </p>
      </div>

      <button onClick={() => deleteProduct(list.UrunId)}>Ürün Sil</button>
    </li>
  );
};

export default Items;
