import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from "./App";
import CartItem from "./components/cart/cartItem";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Productdetail from "./components/products/productdetail";
import Todo from "./todo/todo";
import TodoForm from "./todo/todoForm";

export default function Router() {
  return (
    <BrowserRouter>
<Header/>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/detail/:id" element={<Productdetail/>} />
    <Route path="/todo" element={<Todo />} />
    <Route path="/cart" element={<CartItem />} />


  </Routes>
  <Footer/>
</BrowserRouter>
  );
}