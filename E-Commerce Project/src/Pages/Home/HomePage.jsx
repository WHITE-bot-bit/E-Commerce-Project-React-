import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { ProductsGrid } from "./ProductGrid";
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <title>E-Commerce Project</title>

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
