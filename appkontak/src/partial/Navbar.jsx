import { NavLink } from 'react-router-dom';
import useWarna from '../hooks/useWarna';

const Navbar = () => {
  const { handleResetWarna, handleWarnaChange } = useWarna();
  return (
    <nav>
      <NavLink to={'/'}> home</NavLink>
      <NavLink to={'/berita'}> berita</NavLink>
      <NavLink to={'/ujian'}> ujian</NavLink>
      <button
        onClick={() => {
          handleWarnaChange();
          handleResetWarna();
        }}
      >
        logout
      </button>
    </nav>
  );
};

export default Navbar;
