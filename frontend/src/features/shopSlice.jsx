import { createSlice } from '@reduxjs/toolkit';

const products = [
  {
    id: 1,
    name: 'Premium Black T-Shirt',
    brand: 'Nike',
    category: 'T-Shirts',
    color: 'Black',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 999,
    originalPrice: 1499,
    rating: 4.7,
    reviews: 120,
    badge: 'New',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLMfhz671ASe9ebi37MuXxTS9ZRWLNwGBWOQMFQw9ZkSxlV83rweSKyc&s=10',
  },
  {
    id: 2,
    name: 'Shirt',
    brand: 'Zara',
    category: 'Shirts',
    color: 'White',
    sizes: ['M', 'L', 'XL'],
    price: 1499,
    originalPrice: 1999,
    rating: 4.5,
    reviews: 95,
    badge: 'Sale',
    image: 'https://picsum.photos/300/400?random=2',
  },
  {
    id: 3,
    name: 'Olive Cargo Jacket',
    brand: 'Puma',
    category: 'Jackets',
    color: 'Olive',
    sizes: ['L', 'XL'],
    price: 2499,
    originalPrice: 3299,
    rating: 4.8,
    reviews: 88,
    badge: 'Best Seller',
    image: 'https://picsum.photos/300/400?random=3',
  },
  {
    id: 4,
    name: 'Slim Fit Jeans',
    brand: "Levi's",
    category: 'Jeans',
    color: 'Blue',
    sizes: ['30', '32', '34', '36'],
    price: 1999,
    originalPrice: 2599,
    rating: 4.6,
    reviews: 210,
    badge: 'Sale',
    image: 'https://picsum.photos/300/400?random=4',
  },
];

const initialState = {
  products,
  filteredProducts: products,
  filters: {
    search: '',
    category: '',
    brand: '',
    color: '',
    size: '',
    minPrice: 0,
    maxPrice: 5000,
    sort: 'Newest',
    currentPage: 1,
  },
  cart: [],
  wishlist: [],
};

const applyFilters = (state) => {
  let data = [...state.products];
  const filters = state.filters;

  if (filters.search) {
    data = data.filter((product) =>
      product.name.toLowerCase().includes(filters.search.toLowerCase()),
    );
  }

  if (filters.category) {
    data = data.filter((product) => product.category === filters.category);
  }

  if (filters.brand) {
    data = data.filter((item) => item.brand === filters.brand);
  }

  if (filters.color) {
    data = data.filter((item) =>
      Array.isArray(item.color)
        ? item.color.includes(filters.color)
        : item.color === filters.color,
    );
  }

  if (filters.size) {
    data = data.filter((item) => item.sizes.includes(filters.size));
  }

  data = data.filter(
    (item) => item.price >= filters.minPrice && item.price <= filters.maxPrice,
  );

  switch (filters.sort) {
    case 'Price Low':
      data.sort((a, b) => a.price - b.price);
      break;

    case 'Price High':
      data.sort((a, b) => b.price - a.price);
      break;

    case 'Highest Rated':
      data.sort((a, b) => b.rating - a.rating);
      break;

    case 'Newest':
    default:
      data.sort((a, b) => b.id - a.id);
  }

  state.filteredProducts = data;
};

const shopSlice = createSlice({
  name: 'shop',

  initialState,

  reducers: {
    setSearch(state, action) {
      state.filters.search = action.payload;
      applyFilters(state);
    },

    setCategory(state, action) {
      state.filters.category = action.payload;
      applyFilters(state);
    },

    setBrand(state, action) {
      state.filters.brand = action.payload;
      applyFilters(state);
    },

    setColor(state, action) {
      state.filters.color = action.payload;
      applyFilters(state);
    },

    setSize(state, action) {
      state.filters.size = action.payload;
      applyFilters(state);
    },

    setPriceRange(state, action) {
      state.filters.minPrice = action.payload.min;
      state.filters.maxPrice = action.payload.max;
      applyFilters(state);
    },

    setSort(state, action) {
      state.filters.sort = action.payload;
      applyFilters(state);
    },
  },
});

export const {
  setSearch,
  setCategory,
  setBrand,
  setColor,
  setSize,
  setPriceRange,
  setSort,
  clearFilters,
  toggleWishlist,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = shopSlice.actions;

export default shopSlice.reducer;
