import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const roleList = ['admin', 'user', 'manager'];
  const [role, setRole] = useState('admin');

  const value = {
    role,
    setRole,
    roleList,
  };

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
};

export const useRole = () => {
  return useContext(RoleContext);
};
