const CardBerita = ({ data }) => {
  return (
    <div>
      <img src={'https://iqmn.my.id/storage/' + data.photo} alt='' />
      <h1>{data.title}</h1>
    </div>
  );
};

export default CardBerita;
