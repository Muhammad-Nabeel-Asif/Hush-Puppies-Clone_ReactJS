import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import Layout from "./Navbar/Layout";
import Home from "./Home/Home";
import Signup from "./AuthUI/Signup";
import Login from "./AuthUI/Login";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import SingleItem from "./SingleItem/SingleItem";
import Help from "./Help/Help";
import PrivateRoute from "./AuthUI/PrivateRoute";

const App = () => {
  const { currentUser } = useAuth();
  let isAuthenticated;
  currentUser ? (isAuthenticated = true) : (isAuthenticated = false);

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Products />
              </PrivateRoute>
            }
          />
          <Route path="/product/:id" element={<SingleItem />} />
          <Route path="help" element={<Help />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route
            path="cart"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Cart />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default App;
