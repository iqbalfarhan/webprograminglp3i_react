import { useState } from 'react';
import WarnaContext from '../context/WarnaContext';
import { useEffect } from 'react';

const WarnaProvider = ({ children }) => {
  const [warna, setWarna] = useState();

  const handleWarnaChange = (newWarna) => {
    setWarna(newWarna);

    localStorage.setItem('warna', newWarna);
  };

  const handleResetWarna = () => {
    localStorage.removeItem('warna');
  };

  const value = {
    warna,
    handleWarnaChange,
    handleResetWarna,
  };

  useEffect(() => {
    const savedWarna = localStorage.getItem('warna');
    if (savedWarna) {
      setWarna(savedWarna);
    }
  }, []);

  return (
    <WarnaContext.Provider value={value}>{children}</WarnaContext.Provider>
  );
};

export default WarnaProvider;
