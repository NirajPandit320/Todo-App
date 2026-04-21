import { MdCheck, MdDelete } from "react-icons/md";
export const TodoList = ({ todo, onHandleDeleteTodo, onHandleToggleTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span>{todo.content}</span>

      <button
        type="button"
        className="delete-btn"
        aria-label={`Delete ${todo.content}`}
        onClick={() => onHandleDeleteTodo(todo.id)}
      >
        <MdDelete />
      </button>

      <button
        type="button"
        className="check-btn"
        aria-label={`Mark ${todo.content} as ${todo.completed ? "incomplete" : "complete"}`}
        onClick={() => onHandleToggleTodo(todo.id)}
      >
        <MdCheck />
      </button>
    </li>
  );
};