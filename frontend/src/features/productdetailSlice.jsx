import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [
    {
      id: 1,
      color: 'Black',
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
    },
    {
      id: 2,
      color: 'Black',
      src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    },
    {
      id: 3,
      color: 'Navy',
      src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    },
    {
      id: 4,
      color: 'Olive',
      src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800',
    },
  ],

  currentImage: 0,

  selectedColor: 'Black',
  selectedSize: 'M',
  quantity: 1,

  wishlist: false,
  compare: [],
  recentlyViewed: [],
  loading: false,
};

const productDetailSlice = createSlice({
  name: 'productdetail',

  initialState,

  reducers: {
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },

    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
      state.currentImage = 0;
    },

    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
    },

    incrementQuantity: (state) => {
      if (state.quantity < 10) {
        state.quantity += 1;
      }
    },

    decrementQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },

    setQuantity: (state, action) => {
      const qty = Number(action.payload);

      if (qty >= 1 && qty <= 10) {
        state.quantity = qty;
      }
    },

    toggleWishlist: (state) => {
      state.wishlist = !state.wishlist;
    },

    addRecentlyViewed: (state, action) => {
      const exists = state.recentlyViewed.some(
        (item) => item.id === action.payload.id,
      );

      if (!exists) {
        state.recentlyViewed.unshift(action.payload);
      }

      state.recentlyViewed = state.recentlyViewed.slice(0, 10);
    },

    clearRecentlyViewed: (state) => {
      state.recentlyViewed = [];
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setCurrentImage,
  setSelectedColor,
  setSelectedSize,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  toggleWishlist,
  toggleCompare,
  addRecentlyViewed,
  clearRecentlyViewed,
  setLoading,
} = productDetailSlice.actions;

export default productDetailSlice.reducer;
