import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>ini dari component App</h1>
      <Button onClick={() => setShow(!show)} label="Klik disini" />
      {show && <Alert nama="iqbal" color="red" />}
    </div>
  );
};

export default App;
