import React from "react";
import { BrowserRouter, Link, NavLink, Route,  Switch } from "react-router-dom";
import Album from "../Album";
import ProductFeatures from "../features/Products";
import Todo from "../Todo/pages";
import "./style.scss";

const AppRoute = () => {
  return (
    <BrowserRouter>
      {/* <NavLink to="/todoList">Todos</NavLink>
      /<br />
      <NavLink to="/albumList">Album</NavLink>
      /<br />
      <Link to="/albumList">Adsffdlbum</Link> */}
      <Switch>
        <Route path="/todoList" component={Todo }></Route>
        <Route path="/todoList/:todoListID" component={Album } />

        <Route path="/albumList" component={Album } />
        <Route path="/products" component={ProductFeatures } />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
