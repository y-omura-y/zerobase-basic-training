const {useState} = React;

function App(){
const [display,setDisplay] = useState("0");

  function handleKey(key){
    if(display === "0"){
      setDisplay(key);
    }else{
      setDisplay(display + key);
    }
  }

  return(
    <div className="calc">
    <div className="display">{display}</div>
<div className="number"></div>

<div className="row">
  <button className="btn" onClick={() => handleKey("7")}>7</button>
  <button className="btn" onClick={() => handleKey("8")}>8</button>
  <button className="btn" onClick={() => handleKey("9")}>9</button>
  <button className="btn" onClick={() => handleKey("")}>×</button>
</div>

<div className="row">
  <button className="btn" onClick={() => handleKey("4")}>4</button>
  <button className="btn" onClick={() => handleKey("5")}>5</button>
  <button className="btn" onClick={() => handleKey("6")}>6</button>
  <button className="btn" onClick={() => handleKey("")}>-</button>
</div>

<div className="row">
  <button className="btn" onClick={() => handleKey("1")}>1</button>
  <button className="btn" onClick={() => handleKey("2")}>2</button>
  <button className="btn" onClick={() => handleKey("3")}>3</button>
  <button className="btn" onClick={() => handleKey("")}>+</button>
</div>
<div className="row">
  <button className="btn" onClick={() => handleKey("")}>c</button>
  <button className="btn" onClick={() => handleKey("0")}>0</button>
  <button className="btn" onClick={() => handleKey("")}>=</button>
  <button className="btn" onClick={() => handleKey("")}>÷</button>
</div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
