function App(){

  return(
    <div className="calc">
      <header>電卓</header>
    <div className="display">
<div className="number"></div>
    </div>
<div className="row">
  <button>7</button>
  <button>8</button>
  <button>9</button>
  <button>×</button>
</div>
<div className="row">
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button>-</button>
</div>

<div className="row">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>+</button>
</div>
<div className="row">
  <button>c</button>
  <button>0</button>
  <button>=</button>
  <button>÷</button>
</div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
