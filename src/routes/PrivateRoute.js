import { Navigate } from 'react-router';

const PrivateRoute = ({ children, redirectTo, id }) => {
  let isAuthenticated = id;
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute
