import { useEffect } from 'react';
import { useState } from 'react';
import CardBerita from '../partial/CardBerita';

const BeritaPage = () => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    fetch('https://iqmn.my.id/api/post')
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <h1>ini halaman berita</h1>

      <div className='grid grid-cols-4 gap-4'>
        {datas?.map((data, index) => {
          return <CardBerita data={data} key={index} />;
        })}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        corporis molestiae, deleniti error mollitia quod fuga ipsa alias
        adipisci quaerat rerum recusandae placeat, saepe sed! Natus sed
        obcaecati dolorem veniam.
      </p>
    </div>
  );
};

export default BeritaPage;
