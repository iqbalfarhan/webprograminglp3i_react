import { useForm } from 'react-hook-form';
import useWarna from '../hooks/useWarna';

const PilihWarnaPage = () => {
  const { handleWarnaChange } = useWarna();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    handleWarnaChange(data.warna);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='color' {...register('warna')} />
      <button>submit warna</button>
    </form>
  );
};

export default PilihWarnaPage;
