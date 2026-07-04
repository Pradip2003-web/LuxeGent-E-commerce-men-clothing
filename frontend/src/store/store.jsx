import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/productSlice.jsx";
import FilterReducer from "../features/filterSlice.jsx";
import ShopReducer from "../features/shopSlice.jsx";
import WishlistReducer from "../features/wishlistSlice.jsx";
import ProductdetailReducer from "../features/productdetailSlice.jsx";
import CartReducer from "../features/cartSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
    wishlist: WishlistReducer,
    filters: FilterReducer,
    shops: ShopReducer,
    productdetail: ProductdetailReducer,
  },
});

export default store;
