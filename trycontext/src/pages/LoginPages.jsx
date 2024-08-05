import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const LoginPages = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    login({
      username: username,
      password: password,
    });
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='card bg-base-300 max-w-lg'>
        <div className='card-body'>
          <input
            type='text'
            className='input'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='text'
            className='input'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='card-actions'>
            <button onClick={handleLogin} className='btn btn-primary'>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
