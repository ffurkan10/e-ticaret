import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [kupon, setKupon] = useState("");
  const [stok, setStok] = useState(false);
  const [marka, setMarka] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get("https://localhost:7249/api/Default/urunler")
      .then((response) => {
        setProducts(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProduct = () => {
    setLoading(true);

    axios
      .get(
        `https://localhost:7249/api/Default/urun-ekle?urunadi=${name}&urunkategorisi=${category}&urunfiyati=${price}&indirimoran%C4%B1=${discount}&kuponkodu=${kupon}&urunsatisdurumu=${stok}&urunmarka=${marka}
  `
      )
      .then((response) => {
        console.log(response.data);
        fetchProducts();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (productId) => {
    setLoading(true);

    axios
      .get(`https://localhost:7249/api/Default/urun-sil?id=${productId}`)
      .then((response) => {
        console.log(response.data);
        fetchProducts();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section className="App__list">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  loading={loading}
                  deleteProduct={deleteProduct}
                />
              }
            />
            <Route
              path="/new"
              element={
                <NewProduct
                  loading={loading}
                  addProduct={addProduct}
                  name={name}
                  setName={setName}
                  category={category}
                  price={price}
                  discount={discount}
                  kupon={kupon}
                  stok={stok}
                  marka={marka}
                  setCategory={setCategory}
                  setDiscount={setDiscount}
                  setPrice={setPrice}
                  setKupon={setKupon}
                  setStok={setStok}
                  setMarka={setMarka}
                />
              }
            />
          </Routes>
        </section>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
