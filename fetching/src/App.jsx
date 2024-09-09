import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [datas, setDatas] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    function getData() {
      fetch('https://dummyjson.com/quotes')
        .then((response) => response.json())
        .then((data) => setDatas(data.quotes));
    }

    getData();
  }, []);

  return (
    <div>
      {datas.map((data) => (
        <div>
          <q>{data.quote}</q>
          <span>{data.author}</span>
        </div>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <h1>contoh</h1>
  //     {selected ? (
  //       <>
  //         <button onClick={() => setSelected(undefined)}>Kembali</button>
  //         <div>
  //           <h2>{selected.name}</h2>
  //           <img src={selected.image} width={300} />
  //           <ul>
  //             {selected.ingredients.map((ing) => (
  //               <li>{ing}</li>
  //             ))}
  //           </ul>
  //         </div>
  //       </>
  //     ) : (
  //       <>
  //         {datas.map((data) => (
  //           <div onClick={() => setSelected(data)}>
  //             <h2>{data.name}</h2>
  //             <img src={data.image} width={300} />
  //             <ul>
  //               {data.ingredients.map((ing) => (
  //                 <li>{ing}</li>
  //               ))}
  //             </ul>
  //           </div>
  //         ))}
  //       </>
  //     )}
  //   </div>
  // );
};

export default App;
