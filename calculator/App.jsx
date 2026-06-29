function App(){

  return(
    <div className="calc">
      <header>電卓</header>
    <div className="display">
<div className="number"></div>
    </div>
<div className="row">
  <button className="btn">7</button>
  <button className="btn">8</button>
  <button className="btn">9</button>
  <button className="btn">×</button>
</div>
<div className="row">
  <button className="btn">4</button>
  <button className="btn">5</button>
  <button className="btn">6</button>
  <button className="btn">-</button>
</div>

<div className="row">
  <button className="btn">1</button>
  <button className="btn">2</button>
  <button className="btn">3</button>
  <button className="btn">+</button>
</div>
<div className="row">
  <button className="btn">c</button>
  <button className="btn">0</button>
  <button className="btn">=</button>
  <button className="btn">÷</button>
</div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
