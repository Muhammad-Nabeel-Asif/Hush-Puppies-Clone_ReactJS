import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AiFillDelete } from "react-icons/ai";

import {
  ADJUST_QUANTITY,
  REMOVE_FROM_CART,
} from "../../../features/Cart/CartSlice";
import styles from "./CartItem.module.css";

const CartItem = ({ item, qty }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(ADJUST_QUANTITY({ id: item.id, qty: e.target.value }));
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item?.image}
        alt={item?.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item?.title}</p>
        <p className={styles.details__desc}>{item?.description}</p>
        <p className={styles.details__price}>$ {item?.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => dispatch(REMOVE_FROM_CART(item?.id))}
          className={styles.actions__deleteItemBtn}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
