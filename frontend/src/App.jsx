import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useState,useEffect } from "react";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./Pages/About";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import NewArrivals from "./Pages/NewArrival";
import PolicyPage from "./Pages/PolicyPage";
import Contact from "./Pages/Contact";
import TermsConditions from "./Pages/Terms&Condition";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import Wishlist from "./Pages/Wishlist";
import AdminLogin from "./Pages/AdminLogin";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import AdminLayout from "./components/Dashboard/Adminlayout";
import ProductTable from "./components/Dashboard/ProductTable";
import AddProduct from "./Pages/AddProduct";
import ProductEdit from "./Pages/ProductEdit";
import ProductView from "./Pages/ProductView";
import CustomerTable from "./components/Dashboard/CustomerTable";
import CustomerView from "./Pages/CustomerView";
import CustomerEdit from "./Pages/CustomerEdit";
import RecentOrders from "./components/Dashboard/OrdersTable";
import InventoryTable from "./components/Dashboard/InventoryTable";
import AddInventory from "./Pages/AddInventory";
import InventoryView from "./Pages/Inventoryview";
import InventoryEdit from "./Pages/InventoryEdit";

function App() {
  const [Authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    
    const token = localStorage.getItem("userToken");
    // console.log(token);
    
    if (token) {
      setAuthenticated(true);
      
    }
  },[]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/product" element={<Product />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacypolicy" element={<PolicyPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/term&conditions" element={<TermsConditions />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

           <Route
            path="/adminlogin"
            element={ Authenticated ? <Navigate to="/admin/dashboard" />:<AdminLogin setAuthenticated={setAuthenticated} />}
          />
          <Route path="forgot-password" element={<ForgotPassword />} />

           <Route path="/admin" element={Authenticated ? <AdminLayout /> : <Navigate to ="/adminlogin"/>}>
            <Route index element={<Dashboard />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ProductTable />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="edit-product/:id" element={<ProductEdit />} />
            <Route path="view-product/:id" element={<ProductView />} />
            <Route path="customers" element={<CustomerTable />} />
            <Route path="customer/view/:id" element={<CustomerView />} />
            <Route path="customer/edit/:id" element={<CustomerEdit />} />
            <Route path="orders" element={<RecentOrders />} />
            <Route path="inventory" element={<InventoryTable />} />
            <Route path="add-inventory" element={<AddInventory />} />
            <Route path="view-inventory/:id" element={<InventoryView />} />
            <Route path="edit-inventory/:id" element={<InventoryEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
