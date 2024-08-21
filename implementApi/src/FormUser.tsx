import { useState } from 'react';

const FormUser = () => {
  const [name, setName] = useState<string>('');
  const [umur, setUmur] = useState<string>('');

  const handleSubmit = () => {
    fetch('http://127.0.0.1:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, umur }),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={umur} onChange={(e) => setUmur(e.target.value)} />

      <button>simpan</button>
    </form>
  );
};

export default FormUser;
