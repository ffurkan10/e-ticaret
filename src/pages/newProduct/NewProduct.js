import React from "react";
import Loading from "../../components/loading/Loading";

const NewProduct = ({
  name,
  setName,
  price,
  setPrice,
  category,
  setCategory,
  discount,
  setDiscount,
  kupon,
  setKupon,
  stok,
  setStok,
  marka,
  setMarka,
  addProduct,
  loading,
}) => {
  const changeName = (e) => {
    setName(e.currentTarget.value);
  };
  const changeCategory = (e) => {
    setCategory(e.currentTarget.value);
  };
  const changePrice = (e) => {
    setPrice(e.currentTarget.value);
  };
  const changeDiscount = (e) => {
    setDiscount(e.currentTarget.value);
  };
  const changeKupon = (e) => {
    setKupon(e.currentTarget.value);
  };
  const changeStok = (e) => {
    setStok(e.currentTarget.value);
  };
  const changeMarka = (e) => {
    setMarka(e.currentTarget.value);
  };

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="new">
      <h1>Yeni Ürün Eklemek İçin Alanları Doldurun</h1>
      <form onSubmit={addProduct}>
        <label htmlFor="name">Ürün Adı: </label>
        <input
          id="name"
          type="text"
          autoFocus
          autoComplete="name"
          name="name"
          required
          onChange={changeName}
          value={name}
        />
        <label htmlFor="category">Ürün Kategorisi: </label>
        <input
          id="category"
          type="text"
          autoComplete="category"
          name="category"
          required
          onChange={changeCategory}
          value={category}
        />
        <label htmlFor="price">Ürün Fiyatı:</label>
        <input
          id="price"
          type="text"
          autoComplete="price"
          name="price"
          required
          onChange={changePrice}
          value={price}
        />
        <label htmlFor="discount">İndirim:</label>
        <input
          id="discount"
          type="text"
          autoComplete="discount"
          name="discount"
          required
          onChange={changeDiscount}
          value={discount}
        />
        <label htmlFor="stok">Stok Durumu:</label>
        <input
          id="stok"
          type="text"
          autoComplete="stok"
          name="stok"
          placeholder="stok"
          required
          onChange={changeStok}
          value={stok}
        />
        <label htmlFor="kupon">Kupon Kodu:</label>
        <input
          id="kupon"
          type="text"
          autoComplete="kupon"
          name="kupon"
          required
          onChange={changeKupon}
          value={kupon}
        />
        <label htmlFor="marka">Ürünün Markası:</label>
        <input
          id="marka"
          type="text"
          autoComplete="marka"
          name="marka"
          required
          onChange={changeMarka}
          value={marka}
        />
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default NewProduct;
