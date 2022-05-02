import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Alert, AlertTitle, Button } from "@mui/material";
import { MdDeleteSweep } from "react-icons/md";

import { REMOVE_FROM_CART } from "../../features/Cart/CartSlice";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const style = { fontSize: "2rem" };

const Cart = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  let isCartEmpty;
  const cart = useSelector((state) => state.cart.cart);
  // console.log("cart = ", cart);

  if (cart.length === 0) {
    isCartEmpty = true;
  } else {
    isCartEmpty = false;
  }

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item?.qty;
      price += item?.qty * item?.currentItem?.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  //

  // Function called when Drag Ends
  const onDragEnd = (result) => {
    console.log(result);
    let foundItemIndex;

    if (result.destination.droppableId === "2") {
      cart.map((item) => {
        if (Number(item.currentItem.id) === Number(result.draggableId)) {
          foundItemIndex = Number(item.currentItem.id);
        }
      });
      dispatch(REMOVE_FROM_CART(foundItemIndex));
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        {isCartEmpty ? (
          <div className={styles.cart__empty}>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              Cart is Empty right now —{" "}
              <strong>Go back and add some Products</strong>
            </Alert>
          </div>
        ) : (
          <div>
            <Droppable droppableId="1">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <div className={styles.cart}>
                    <div className={styles.cart__items}>
                      {cart.map((item, index) => (
                        <Draggable
                          key={item.currentItem.id}
                          draggableId={`${item.currentItem.id}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <li
                              key={index}
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                              className={styles.cart_list}
                            >
                              {
                                <div className={styles.cart}>
                                  <div className={styles.cart__items}>
                                    <CartItem
                                      key={item?.currentItem?.id}
                                      item={item?.currentItem}
                                      qty={item?.qty}
                                    />
                                  </div>
                                </div>
                              }
                            </li>
                          )}
                        </Draggable>
                      ))}
                    </div>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="2">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <div>
                    <div className={styles.cart__delete}>
                      <h3>Drag the cart below this to delete</h3>
                      <Button variant="contained" color="error">
                        <MdDeleteSweep style={style} />
                      </Button>
                    </div>
                  </div>

                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <div className={styles.cart__summary}>
              <h4 className={styles.summary__title}>Cart Summary</h4>
              <div className={styles.summary__price}>
                <span>TOTAL: ({totalItems} items)</span>
                <span>$ {totalPrice}</span>
              </div>
              <button className={styles.summary__checkoutBtn}>
                Proceed To Checkout
              </button>
            </div>
          </div>
        )}
      </DragDropContext>
    </div>
  );
};

export default Cart;
