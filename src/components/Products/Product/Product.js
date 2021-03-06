import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  LOAD_CURRENT_ITEM,
} from "../../../features/Cart/CartSlice";

import styles from "./Product.module.css";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(ADD_TO_CART(product.id));
  };

  const viewItemHandler = () => {
    dispatch(LOAD_CURRENT_ITEM(product));
  };

  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={viewItemHandler}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
        <button
          onClick={addToCartHandler}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
