import { RouterProvider } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BeritaPage from './pages/BeritaPage';
import MainLayout from './layouts/MainLayout';
import UjianPage from './pages/UjianPage';
import PilihWarnaPage from './pages/PilihWarnaPage';
import useWarna from './hooks/useWarna';
import { Navigate } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Navigate to={'/'} />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/berita', element: <BeritaPage /> },
      { path: '/ujian', element: <UjianPage /> },
    ],
  },
]);

const warnarouter = createHashRouter([
  {
    path: '/',
    element: <PilihWarnaPage />,
    errorElement: <Navigate to={'/'} />,
  },
]);

const App = () => {
  const { warna } = useWarna();
  return <RouterProvider router={warna ? router : warnarouter} />;
};

export default App;
