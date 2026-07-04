import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  category: [],
  size: [],
  color: [],
  brand: [],
  minPrice: 0,
  maxPrice: 10000,
  sort: 'Newest',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setSize: (state, action) => {
      state.size = action.payload;
    },

    setColor: (state, action) => {
      state.color = action.payload;
    },

    setBrand: (state, action) => {
      state.brand = action.payload;
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    setSort: (state, action) => {
      state.sort = action.payload;
    },

    clearFilters: (state) => {
      state.search = '';
      state.category = [];
      state.size = [];
      state.color = [];
      state.brand = [];

      state.maxPrice = 10000;
      state.sort = 'Newest';
    },
  },
});

export const {
  setSearch,
  setCategory,
  setSize,
  setColor,
  setBrand,

  setMaxPrice,
  setSort,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
