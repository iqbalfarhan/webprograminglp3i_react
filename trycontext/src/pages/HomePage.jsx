import useAuth from '../hooks/useAuth';

const HomePage = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>ini halaman home gais, ga boleh liat kalo belum login</h1>

      <p>
        selamat dataang {user.username} kamu masuk dengan password{' '}
        {user.password}
      </p>

      <button onClick={logout}>logout</button>
    </div>
  );
};

export default HomePage;
