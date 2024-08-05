import useAuth from './hooks/useAuth';
import LoginPages from './pages/LoginPages';
import HomePage from './pages/HomePage';
import { useRole } from './contexts/roleContext.jsx';

const App = () => {
  const { user } = useAuth();
  const { role } = useRole();

  if (user == null) {
    return <LoginPages />;
  } else {
    if (role != 'admin') {
      return <p>anda bukan admin</p>;
    } else {
      return <HomePage />;
    }
  }
};

export default App;
