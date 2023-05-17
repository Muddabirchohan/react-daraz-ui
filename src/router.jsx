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
import Primitives from "./components/javascript/primitives";
import Productdetail from "./components/products/productdetail";
import Todo from "./todo/todo";
import TodoForm from "./todo/todoForm";

export default function Router() {
  return (
    <BrowserRouter basename="/react-daraz-ui">
<Header/>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/detail/:id" element={<Productdetail/>} />
    <Route path="/todo" element={<Todo />} />
    <Route path="/cart" element={<CartItem />} />
    <Route path="/javascript" element={<Primitives />} />



  </Routes>
  <Footer/>
</BrowserRouter>
  );
}