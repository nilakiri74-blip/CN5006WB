import './App.css';

function AppColor(props) {
  function greetUser() {
    const inputValue = document.getElementById(props.color).value;
    if (inputValue) {
      document.body.style.background = inputValue;
      alert("Welcome! Background color changed to " + inputValue);
    }
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>
      <label>{props.lbl}</label>
      <input id={props.color} type="text" placeholder={props.color} />
      <button onClick={greetUser}>Colour me {props.color}</button>
    </div>
  );
}

export default AppColor;
