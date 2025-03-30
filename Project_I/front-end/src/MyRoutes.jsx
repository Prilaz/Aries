import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import MyNetwork from "./Pages/MyNetwork";
import Login from "./AuthPage/Login";
import Signup from "./AuthPage/Signin";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/mynetwork" element={<MyNetwork />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
