import useUser from '../hooks/useUser';

const UserCard = () => {
  const { user, setUser } = useUser();
  return (
    <div>
      {user}
      <button onClick={() => setUser('farhansyuhada')}>ubah</button>
    </div>
  );
};

export default UserCard;
