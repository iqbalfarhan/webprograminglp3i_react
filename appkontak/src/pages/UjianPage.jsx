import useWarna from '../hooks/useWarna';

const UjianPage = () => {
  const { warna, handleWarnaChange } = useWarna();
  return (
    <div>
      <h1>ini halaman ujian {warna}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, magnam
        expedita distinctio odit earum ab quasi. Ducimus itaque animi corrupti
        quidem repudiandae omnis molestiae maxime non autem! Consectetur,
        perspiciatis ex.
      </p>

      <button onClick={() => handleWarnaChange('kuning')}>
        ubah warna ke kuning
      </button>
    </div>
  );
};

export default UjianPage;
