import useUser from '../hooks/useUser';

const Footer = () => {
  const { user } = useUser();
  return <div>website ini dikembangkan oleh {user}</div>;
};

export default Footer;
