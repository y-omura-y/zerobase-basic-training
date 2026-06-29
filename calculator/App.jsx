const {useState} = React;

function App(){
const [display,setDisplay] = useState("0");
const [memory,setMemory] = useState(null);
const [operator,setOperator] = useState(null);

function handleOperator(op){
  setMemory(display);
  setOperator(op);
  setDisplay("0");
}

  function handleKey(key){
    if(display === "0"){
      setDisplay(key);
    }else{
      setDisplay(display + key);
    }
  }

  function handleEqual() {
  const left = parseFloat(memory);
  const right = parseFloat(display);

  let result;
  if (operator === "+") result = left + right;
  if (operator === "-") result = left - right;
  if (operator === "×") result = left * right;
  if (operator === "÷") result = left / right;

  setDisplay(String(result));
  setMemory(null);
  setOperator(null);
}

  return(
    <div className="calc">
    <div className="display">{display}</div>
<div className="number"></div>

<div className="row">
  <button className="btn" onClick={() => handleKey("7")}>7</button>
  <button className="btn" onClick={() => handleKey("8")}>8</button>
  <button className="btn" onClick={() => handleKey("9")}>9</button>
  <button className="btn" onClick={() => handleOperator("×")}>×</button>
</div>

<div className="row">
  <button className="btn" onClick={() => handleKey("4")}>4</button>
  <button className="btn" onClick={() => handleKey("5")}>5</button>
  <button className="btn" onClick={() => handleKey("6")}>6</button>
  <button className="btn" onClick={() => handleOperator("-")}>-</button>
</div>

<div className="row">
  <button className="btn" onClick={() => handleKey("1")}>1</button>
  <button className="btn" onClick={() => handleKey("2")}>2</button>
  <button className="btn" onClick={() => handleKey("3")}>3</button>
  <button className="btn" onClick={() => handleOperator("+")}>+</button>
</div>
<div className="row">
  <button className="btn" onClick={() => handleKey("")}>c</button>
  <button className="btn" onClick={() => handleKey("0")}>0</button>
  <button className="btn" onClick={() => handleEqual()}>=</button>
  <button className="btn" onClick={() => handleOperator("÷")}>÷</button>
</div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
