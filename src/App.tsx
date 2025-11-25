import { useState } from "react";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 0, text: "Todo1", done: false },
    { id: 1, text: "Todo2", done: false },
    { id: 2, text: "Todo3", done: true },
  ]);
  // const [finTodos, setFinTodos] = useState([
  //   { id: 0, text: "Todo1", done: false },
  //   { id: 1, text: "Todo2", done: false },
  // ]);

  const textUpdate = (e: string) => {
    //動作確認済み
    setTodoText(e);
  };

  const addTodo = () => {
    const text = todoText.trim();
    if (!text) return;
    const newTodo = { id: Date.now(), text: text, done: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoText("");
  };
  const toggleTodo = (id: number) => {
    const target = todos.find((todo) => todo.id === id);
    if (!target) return;
    const newTodo = { id: id, text: target.text, done: !target.done };
    const newTodos = [...todos.filter((todo) => todo != target), newTodo];
    setTodos(newTodos);
  };
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  console.log(todos);
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
            <button type="button" onClick={addTodo}>
              追加
            </button>
          </form>
        </div>

        <div className="inProgress">
          <p className="title">inProgress</p>
          <ul>
            {todos
              .filter((todo) => !todo.done)
              .map((todo) => {
                return (
                  <li>
                    {todo.text}
                    <button onClick={() => toggleTodo(todo.id)}>完了！</button>
                    <button onClick={() => deleteTodo(todo.id)}>削除</button>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="finishedTodo">
          <p className="title">finishedTodo</p>
          <ul>
            {todos
              .filter((todo) => todo.done)
              .map((todo) => {
                return (
                  <li>
                    {todo.text}
                    <button onClick={() => toggleTodo(todo.id)}>戻す</button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
