import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit } = useForm();

  const kirimPertanyaan = (data) => {
    console.log(data);
  };

  return (
    <>
      <h3>Kontak saya</h3>
      <form onSubmit={handleSubmit(kirimPertanyaan)}>
        <input
          type='text'
          {...register('nama', { required: true })}
          placeholder='nama user'
        />
        <input
          type='text'
          {...register('email', { required: true })}
          placeholder='Nama atau email'
        />
        <textarea
          type='text'
          placeholder='pertanyaan tulis disini'
          {...register('pertanyaan', { required: true })}
        ></textarea>
        <button type='submit'>Kirim</button>
      </form>
    </>
  );
};

export default App;
