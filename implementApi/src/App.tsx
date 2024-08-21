import { useEffect, useState } from 'react';
import FormUser from './FormUser';

type User = {
  id: number;
  name: string;
  umur: number;
};

const App = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  const fetchData = () => {
    fetch('http://127.0.0.1:3000/users')
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (id: number) => {
    fetch('http://127.0.0.1:3000/users/' + id, { method: 'DELETE' }).then(() =>
      fetchData(),
    );
  };

  return (
    <>
      <h1>hallo</h1>

      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.umur}th)
            <button onClick={() => handleDelete(user.id)}>hapus</button>
          </li>
        ))}
      </ul>

      <FormUser />
    </>
  );
};

export default App;
