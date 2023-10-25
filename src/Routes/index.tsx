import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Album from "../Album";
import ProductFeatures from "../features/Products";
import Todo from "../Todo/pages";
import "./style.scss";
import Header from "../components/Header";

const AppRoute = () => {
  return (

    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/todoList" component={Todo}></Route>
        <Route path="/todoList/:todoListID" component={Album}/>
        <Route path="/albumList" component={Album}/>
        <Route path="/products" component={ProductFeatures}/>
      </div>
    </BrowserRouter>
  );
};

export default AppRoute;
