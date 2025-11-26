import { useState } from 'react';
import './App.css';

function AddNumbers(props) {
  const [sum, setSum] = useState(0);

  function calculateSum() {
    setSum(Number(props.num1) + Number(props.num2));
  }

  return (
    <div className="App">
      <h1>Sum: {sum}</h1>
      <button onClick={calculateSum}>Add Numbers</button>
    </div>
  );
}

export default AddNumbers;
