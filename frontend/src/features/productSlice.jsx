import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {
    productName: '',
    shortDescription: '',
    description: '',

    mrp: '',
    sellingPrice: '',
    discount: '',
    tax: '',
    costPrice: '',

    category: '',
    brand: '',

    sku: '',

    stock: '',
    lowStock: '',

    sizes: [],
    colors: [],

    images: [],

    metaTitle: '',
    metaDescription: '',
    keywords: '',
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    updateField: (state, action) => {
      state.product[action.payload.field] = action.payload.value;
    },

    setImages: (state, action) => {
      state.product.images = action.payload;
    },

    setSizes: (state, action) => {
      state.product.sizes = action.payload;
    },

    setColors: (state, action) => {
      state.product.colors = action.payload;
    },

    resetProduct: (state) => {
      state.product = initialState.product;
    },
  },
});

export const { updateField, setImages, setSizes, setColors, resetProduct } =
  productSlice.actions;

export default productSlice.reducer;
