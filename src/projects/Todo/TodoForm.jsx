import { useState } from "react";
import { FiPlus } from "react-icons/fi";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const nextValue = inputValue.trim();
    if (!nextValue) {
      return;
    }

    onAddTodo(nextValue);

    setInputValue("");
  };

  return (
    <section className="todo-form-panel">
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            placeholder="Enter your next priority"
            aria-label="Task name"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="todo-btn">
            <FiPlus aria-hidden="true" />
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};