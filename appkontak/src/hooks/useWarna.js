import { useContext } from 'react';
import WarnaContext from '../context/WarnaContext';

const useWarna = () => {
  return useContext(WarnaContext);
};

export default useWarna;
