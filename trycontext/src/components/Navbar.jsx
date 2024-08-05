import useUser from '../hooks/useUser';

const Navbar = () => {
  const { user } = useUser();
  return <div>selamat datang {user}</div>;
};

export default Navbar;
