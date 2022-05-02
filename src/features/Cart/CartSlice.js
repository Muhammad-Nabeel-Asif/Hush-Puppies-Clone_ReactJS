import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "This is the COOLEST Cube Ever",
      description: "This shiny cube will keep you busy the entire day",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "The Large Coffee Cup For You",
      description: "Get a big cup of coffee to make your day special !",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Books That CHANGED My Life",
      description: "These books will keep you busy from famous people",
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    },
  ],
  cart: [],
  currentItem: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      // Get current product from products array
      const currentItem = state.products.find(
        (product) => product.id === action.payload
      );

      // Check if it is already present in cart
      let inCart = false;
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i]?.currentItem?.id === action.payload) {
          inCart = true;
        }
      }

      /* if it's not present in cart, i push it directly to cart array,
         otherwise i just increase it's quantity
      */
      if (inCart === false) {
        state.cart.push({ currentItem, qty: 1 });
      } else {
        state.cart.map((item) =>
          item.currentItem.id === action.payload ? item.qty++ : item.qty
        );
      }
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.currentItem.id !== action.payload
      );
    },
    // THIS FEATURE IS NOT WORKING YET
    ADJUST_QUANTITY: (state, action) => {
      // console.log(action.payload.id);
      // state.cart = state.cart.map((item) => {
      //   if (item.id === action.payload.id) {
      //     item.qty = Number(action.payload.qty);
      //   }
      // });
    },
    LOAD_CURRENT_ITEM: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  LOAD_CURRENT_ITEM,
} = cartSlice.actions;
export default cartSlice.reducer;
