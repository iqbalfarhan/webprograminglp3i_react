import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import UserProvider from './providers/userProvider.jsx';
import ThemeProvider from './providers/ThemeProvider.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { RoleProvider } from './contexts/roleContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoleProvider>
      <AuthProvider>
        <ThemeProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ThemeProvider>
      </AuthProvider>
    </RoleProvider>
  </React.StrictMode>,
);
