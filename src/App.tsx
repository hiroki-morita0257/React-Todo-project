import { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo1", done: false },
    { id: 2, text: "Todo2", done: false },
  ]);

  const textUpdate = (e: string) => {
    //動作確認済み
    setTodoText(e);
  };

  const addTodo = () => {
    const text = todoText.trim();
    if (!text) return;
    const newTodo = { id: todos.length + 1, text: text, done: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  console.log(todos[2]);
  return (
    <div>
      <div className="app">
        <h1>Todo App</h1>

        <div className="addTodo">
          <form action="">
            <input
              value={todoText}
              type="text"
              placeholder="ToDoを入力"
              onChange={(e) => textUpdate(e.target.value)}
            />
            <button onClick={addTodo}>追加</button>
          </form>
        </div>

        <div className="inProgress">
          <p className="title">inProgress</p>
          <ul>
            {todos.map((todo) => {
              return <li>{todo.text}</li>;
            })}
            <li>
              <div className="listRow">
                <p>やること１</p>
                <button>完了！</button>
                <button>削除</button>
              </div>
            </li>
          </ul>
        </div>

        <div className="finishedTodo">
          <p className="title">finishedTodo</p>
          <ul>
            <li>
              <div className="listRow">
                <p></p>
                <button>戻す</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
