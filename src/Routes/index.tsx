import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Album from "../Album";
import Todo from "../Todo/pages";
import "./style.scss";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <NavLink to="/todoList">Todos</NavLink>
      /<br />
      <NavLink to="/albumList">Album</NavLink>
      /<br />
      <Link to="/albumList">Adsffdlbum</Link>
      <Routes>
        <Route path="/todoList" element={<Todo />}>


        </Route>
        <Route path="/todoList/:todoListID" element={<Album />} />

        <Route path="/albumList" element={<Album />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
