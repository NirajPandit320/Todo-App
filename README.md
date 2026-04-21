# Todo App (React + Vite)

A production-ready Todo application built with React and Vite.

## Features

- Add, complete, and delete tasks
- Duplicate task prevention (case-insensitive)
- Input validation for empty tasks
- Persistent tasks via localStorage
- Live date/time header
- Task counters (remaining and total)
- Accessible button labels

## Tech Stack

- React 19
- Vite 8
- ESLint 9
- react-icons

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Quality Checks

Run lint:

```bash
npm run lint
```

## Project Structure

- src/projects/Todo/Todo.jsx: main todo logic and persistence
- src/projects/Todo/TodoForm.jsx: task input form
- src/projects/Todo/TodoList.jsx: individual todo item UI/actions
- src/projects/Todo/TodoDate.jsx: live date/time component
- src/projects/Todo/Todo.css: todo feature styling
