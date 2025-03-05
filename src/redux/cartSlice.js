import { createSlice } from "@reduxjs/toolkit";

// Load cart data from localStorage
const loadCartFromStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

// Save cart data to localStorage
const saveCartToStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: loadCartFromStorage(),
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.cartItems.find((item) => item.id === payload.id);
      existingItem ? existingItem.quantity++ : state.cartItems.push({ ...payload, quantity: 1 });
      saveCartToStorage(state.cartItems);
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      saveCartToStorage(state.cartItems);
    },
    increaseQuantity: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item) item.quantity++;
      saveCartToStorage(state.cartItems);
    },
    decreaseQuantity: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload);
      if (item) {
        item.quantity > 1 ? item.quantity-- : state.cartItems = state.cartItems.filter((i) => i.id !== payload);
        saveCartToStorage(state.cartItems);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
