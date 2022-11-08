import { useState } from "react";
import "./App.css";
import BigModal from "./components/Modal";
import Button from "react-bootstrap/Button";
import { getData } from "../data/getData";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <Button onClick={handleShow}>Mostar EPG</Button>
      <BigModal show={show} handleClose={handleClose} />
    </div>
  );
}


export default App;
