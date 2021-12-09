import React, { useContext } from "react";
import {  Route, Routes } from "react-router";
import Home from "../container/Home";
import AuthContext from "../context/authContext";
import PrivateRoute from "../routes/PrivateRoute";
import NoMatch from '../container/NoMatch'
const Layout = ({name}) => {
  const {authEmail} = useContext(AuthContext)
  return (
    <Routes>
      <Route path='*' element={<NoMatch />} />
      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/login" id={authEmail}>
            <Home emailUser={authEmail} name={name}/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Layout;
