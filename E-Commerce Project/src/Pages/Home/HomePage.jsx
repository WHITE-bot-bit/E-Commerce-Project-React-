import axios from "axios";
import { useEffect,useState } from "react";
import { Header } from "../../Components/Header"
import { ProductsGrid } from "./ProductGrid";
import "./HomePage.css";


export function HomePage({cart}) {
const [products, setProducts] = useState([]);



  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });  
  }, []);

  return (
    <>
      <Header cart={cart} />

      <title>E-Commerce Project</title>

      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}
