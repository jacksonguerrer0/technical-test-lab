import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './context/userContext';
import ContentRoutes from './routes/ContentRoutes';

ReactDOM.render(
  <UserProvider>
    <ContentRoutes />
  </UserProvider>,
  document.getElementById('root')
);
