const { useState } = React;

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (input.trim() === "") return;

    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Todo List</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="タスク入力"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTask}>追加</button>
      </div>

      <p>入力：{input}</p>

      <div className="task-box">
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" />
              <h2>{task}</h2>
              <button>けす</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);