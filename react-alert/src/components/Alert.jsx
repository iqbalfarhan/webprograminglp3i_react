const Alert = ({ nama, color }) => {
  return (
    <div style={{ color: color }}>
      hai {nama} ini alert dari component alert
    </div>
  );
};

export default Alert;
