import useWarna from '../hooks/useWarna';

const HomePage = () => {
  const { warna } = useWarna();
  return <div>Ini dari halaman utama {warna}</div>;
};

export default HomePage;
