import { useState } from 'react';
import UserContext from '../contexts/userContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('iqbalfarhan08');

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
