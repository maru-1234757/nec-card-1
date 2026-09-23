import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    const res = await axios("https://fakestoreapi.com/products");
    setProducts(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </ul>
    </div>
  );
}
