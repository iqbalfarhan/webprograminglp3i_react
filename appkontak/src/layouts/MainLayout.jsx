import { Outlet } from 'react-router-dom';
import Navbar from '../partial/Navbar';
import useWarna from '../hooks/useWarna';

const MainLayout = () => {
  const { warna } = useWarna();
  return (
    <div className={`w-full h-screen`} style={{ backgroundColor: warna }}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
