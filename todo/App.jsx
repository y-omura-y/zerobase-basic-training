const { useState } = React;

function App(){

  

return(
  <div>
    <h1>Todo List</h1>

    <div className="input-row">
      <input type="text" placeholder="タスク入力"/>
      <button>追加</button>
    </div>

      <div className="task-box">
<ul>
  <li>
    <input type="checkbox" />
    <h2>タスク</h2>
    <button>けす</button>
  </li>
</ul>
      </div>
    
  </div>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
