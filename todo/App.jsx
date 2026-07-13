const { useState } = React;

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (input.trim() === "") return;

    const newTask = {
      text: input,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  function deleteTask(indexToDelete) {
    const newTasks = tasks.filter((task, index) => {
      return index !== indexToDelete;
    });

    setTasks(newTasks);
  }

  function toggleTask(indexToToggle) {
    const newTasks = tasks.map((task, index) => {
      if (index === indexToToggle) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
  <div className="todo-app">
    <h1>Todo List</h1>

    <div className="input-row">
      <input
        className="task-input"
        type="text"
        placeholder="タスク入力"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="add-button" onClick={addTask}>
        追加
      </button>
    </div>

    <div className="task-box">
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.done ? "task-item done" : "task-item"}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(index)}
            />

            <h2>{task.text}</h2>

            <button
              className="delete-button"
              onClick={() => deleteTask(index)}
            >
              けす
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);