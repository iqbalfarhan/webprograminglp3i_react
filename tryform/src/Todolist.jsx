import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Todolist = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [datas, setDatas] = useState([]);

  const simpan = (data) => {
    setDatas([...datas, data.todo]);
    reset();
  };

  return (
    <>
      <div>Kegiatan hari sabtu</div>

      <form action='' onSubmit={handleSubmit(simpan)}>
        <input type='text' {...register('todo', { required: true })} />
        {errors.todo && <small>todo harus diisi</small>}
        <button>simpan</button>
      </form>

      <ul>
        {datas.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </>
  );
};

export default Todolist;
