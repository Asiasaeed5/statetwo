import { useState } from "react";
import Counter from "./Counter";

function App() {
 let [show, setShow] = useState(false);
 const handleShow = () => {
    setShow(!show);
 };
 return (
    <div className="App">
      <button onClick={handleShow}>
        {show ? "Hide Counter" : "Show Profile"}
      </button>
      {show && <Counter />}
    </div>
 );
}

export default App;