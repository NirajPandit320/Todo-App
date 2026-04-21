import "./Todo.css";
import { useEffect, useMemo, useState } from "react";
import { FiCheckCircle, FiClipboard, FiTarget } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
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
  const completedCount = taskCount - remainingCount;

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
      <div className="todo-shell">
        <header className="todo-header">
          <div>
            <p className="todo-kicker">Professional Task Manager</p>
            <h1>Execution Dashboard</h1>
            <p className="todo-subtitle">
              Capture priorities, track momentum, and finish with confidence.
            </p>
          </div>
          <TodoDate />
        </header>

        <section className="todo-stats" aria-label="Task summary">
          <article className="stat-card">
            <FiClipboard aria-hidden="true" />
            <div>
              <p>Total Tasks</p>
              <strong>{taskCount}</strong>
            </div>
          </article>
          <article className="stat-card">
            <FiTarget aria-hidden="true" />
            <div>
              <p>Remaining</p>
              <strong>{remainingCount}</strong>
            </div>
          </article>
          <article className="stat-card">
            <FiCheckCircle aria-hidden="true" />
            <div>
              <p>Completed</p>
              <strong>{completedCount}</strong>
            </div>
          </article>
        </section>

        <TodoForm onAddTodo={handleFormSubmit} />
        {errorMessage ? (
          <p className="todo-error" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <section className="todo-list-wrap">
          <ul className="todo-list">
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

        <section className="todo-actions">
          <button
            type="button"
            className="clear-btn"
            onClick={handleClearTodoData}
            disabled={taskCount === 0}
          >
            <MdDeleteSweep />
            Clear All
          </button>
        </section>
      </div>
    </section>
  );
};