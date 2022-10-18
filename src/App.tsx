import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import loading from "./assets/img/loading.gif";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

import "./scss/app.scss";

const Cart = React.lazy(
  () => import(/*webpackChunkName:"Cart"*/ "./pages/Cart")
);
const FullPizza = React.lazy(
  () => import(/*webpackChunkName:"FullPizza"*/ "./pages/FullPizza")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName:"NotFound"*/ "./pages/NotFound")
);

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div className="loading__container">
                <img className="loading" src={loading} alt="загрузка..." />
              </div>
            }>
            <MainLayout />
          </Suspense>
        }>
        <Route path="/" element={<Home />} />

        <Route
          path="/cart"
          element={
            <Suspense
              fallback={
                <div className="loading__container">
                  <img className="loading" src={loading} alt="загрузка..." />{" "}
                </div>
              }>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense
              fallback={
                <div className="loading__container">
                  <img className="loading" src={loading} alt="загрузка..." />{" "}
                </div>
              }>
              <FullPizza />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div className="loading__container">
                  <img className="loading" src={loading} alt="загрузка..." />{" "}
                </div>
              }>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
