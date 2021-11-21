import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/authContext';
import { UserProvider } from './context/userContext';
import ContentRoutes from './routes/ContentRoutes';

ReactDOM.render(
  <UserProvider>
    <AuthProvider>
    <ContentRoutes />
    </AuthProvider>
  </UserProvider>,
  document.getElementById('root')
);
