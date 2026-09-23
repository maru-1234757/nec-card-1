import React from "react";
import Address from "./components/Address";
import Cart from "./components/Cart";
import Category from "./components/category";
import Login from "./components/Login";
import Search from "./components/Search";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Signup from "./components/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/products">products</Link>

      <Routes>
        <Route path="/address" element={<Address />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
