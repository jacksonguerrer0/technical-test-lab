import React, { useContext } from "react";
import {  Route, Routes } from "react-router";
import Home from "../container/Home";
import AuthContext from "../context/authContext";
import PrivateRoute from "../routes/PrivateRoute";

const Layout = () => {
  const {authEmail} = useContext(AuthContext)
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/login" id={authEmail}>
            <Home emailUser={authEmail} />
          </PrivateRoute>
        }
      />
      <Route
        path="/xd"
        element={
          <PrivateRoute redirectTo="/login" id={authEmail}>
            <p>HOlaa</p>
          </PrivateRoute>
        }
      />
      <Route
        path="/xd"
        element={
          <PrivateRoute redirectTo="/login" id={authEmail}>
            <p>HOlaa t</p>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Layout;
