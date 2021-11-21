import React from 'react'
import { Navigate } from 'react-router';

const PublicRoute =  ({ children, redirectTo, id }) => {
  let isAuthenticated = id;
  return isAuthenticated ? <Navigate to={redirectTo} /> : children;
}

export default PublicRoute
