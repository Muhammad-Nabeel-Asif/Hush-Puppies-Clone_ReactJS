import React from "react";
import { useSelector } from "react-redux";

import Product from "./Product/Product";
import styles from "./Products.module.css";

const Products = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
