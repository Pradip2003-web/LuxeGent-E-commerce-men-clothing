import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',

  initialState,

  reducers: {
    toggleWishlist(state, action) {
      const exists = state.items.find((item) => item.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        state.items.push(action.payload);
      }
    },

    addWishlist(state, action) {
      state.items.push(action.payload);
    },

    removeWishlist(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleWishlist, addWishlist, removeWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
