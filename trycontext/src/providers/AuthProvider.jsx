import { useState } from 'react';
import AuthContext from '../contexts/authContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(user) {
    setUser(user);
  }
  function logout() {
    setUser(null);
  }

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
