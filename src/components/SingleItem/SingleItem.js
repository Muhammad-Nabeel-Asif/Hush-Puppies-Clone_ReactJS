import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ADD_TO_CART } from "../../features/Cart/CartSlice";
import styles from "./SingleItem.module.css";

const SingleItem = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.cart.currentItem);
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>$ {current.price}</p>

        <button
          onClick={() => dispatch(ADD_TO_CART(current.id))}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
