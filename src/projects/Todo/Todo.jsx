import "./Todo.css";
import { useEffect, useMemo, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const STORAGE_KEY = "todo:tasks:v1";

export const Todo = () => {
  const [task, setTask] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : [];

      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed.filter(
        (item) =>
          item &&
          typeof item.id === "string" &&
          typeof item.content === "string" &&
          typeof item.completed === "boolean",
      );
    } catch {
      return [];
    }
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(task));
  }, [task]);

  const taskCount = task.length;
  const remainingCount = useMemo(
    () => task.filter((item) => !item.completed).length,
    [task],
  );

  const handleFormSubmit = (rawInputValue) => {
    const inputValue = rawInputValue.trim();
    if (!inputValue) {
      setErrorMessage("Task cannot be empty.");
      return;
    }

    const hasDuplicate = task.some(
      (item) => item.content.toLowerCase() === inputValue.toLowerCase(),
    );

    if (hasDuplicate) {
      setErrorMessage("Task already exists.");
      return;
    }

    setTask((prevTask) => [
      ...prevTask,
      {
        id: crypto.randomUUID(),
        content: inputValue,
        completed: false,
      },
    ]);
    setErrorMessage("");
  };

  const handleDeleteToDo = (id) => {
    setTask((prevTask) => prevTask.filter((curTask) => curTask.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTask((prevTask) =>
      prevTask.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const handleClearTodoData = () => {
    setTask([]);
    setErrorMessage("");
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
        <p className="todo-meta">
          {remainingCount} remaining / {taskCount} total
        </p>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />
      {errorMessage ? (
        <p className="todo-error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <section>
        <ul>
          {task.length === 0 ? (
            <li className="todo-empty">No tasks yet. Add your first task.</li>
          ) : (
            task.map((curTask) => (
              <TodoList
                key={curTask.id}
                todo={curTask}
                onHandleDeleteTodo={handleDeleteToDo}
                onHandleToggleTodo={handleToggleTodo}
              />
            ))
          )}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};