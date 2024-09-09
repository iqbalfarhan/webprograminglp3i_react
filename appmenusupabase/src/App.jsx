import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient(
  'https://ghswwbleazlttofzgmcg.supabase.co/',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdoc3d3YmxlYXpsdHRvZnpnbWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0NDg5NjcsImV4cCI6MjA0MTAyNDk2N30.OGGWEp5x0IyvqPMB9zQH4LxKTLQBV1WPOsNrfwAI0eE',
);

const App = () => {
  const [menuList, setMenuList] = useState([]);

  async function getDataMenu() {
    const { data } = await client.from('menu').select();
    setMenuList(data);
  }

  useEffect(() => {
    getDataMenu();
  }, []);

  return (
    <div className='grid md:grid-cols-3 gap-6 p-6 max-w-5xl mx-auto'>
      {menuList.map((menu) => (
        <div key={menu.id} className='card bg-base-200 card-compact'>
          <figure className='aspect-video'>
            <img src={menu.photo} alt={menu.nama} />
          </figure>
          <div className='card-body'>
            <h2 className='truncate font-bold text-lg'>{menu.nama}</h2>
            <small>
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
              }).format(menu.harga)}
            </small>
            <p className='line-clamp-3 text-sm'>{menu.keterangan}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
