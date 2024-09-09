import { RouterProvider } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';

const router = createHashRouter([
  {
    path: '/',
    element: <PostList />,
  },
  {
    path: '/detail/:postId',
    element: <PostDetail />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
