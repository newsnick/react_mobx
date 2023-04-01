import { observer } from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {
  return (
    <div>
      <h1>Fetch Todo Project</h1>
      <button onClick={() => todo.fetchTodo()}>fetch todo</button>
      {todo.todos.map((td) => (
        <div key={Math.random()}>
          <input
            type="checkbox"
            checked={td.completed}
            onChange={() => todo.completeTodo(td.id)}
          />
          {td.title}
          <button onClick={() => todo.removeTodo(td.id)}>X</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
