import React, { useState, useEffect } from "react";
import axios from "axios";
import "../src/styles/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
