// src/pages/TodoPage.jsx
import React, { useMemo, useReducer, useState } from 'react';
import { initialTodos, todoReducer } from '../todos/todoReducer.js';
import TodoForm from '../todos/TodoForm.jsx';
import TodoFilters from '../todos/TodoFilters.jsx';
import TodoList from '../todos/TodoList.jsx';
import WorldClock from '../components/WorldClock.jsx';

export default function TodoPage() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [filter, setFilter] = useState('all');

  const filteredTodos = useMemo(() => {
    if (filter === 'completed') return todos.filter((t) => t.completed);
    if (filter === 'incomplete') return todos.filter((t) => !t.completed);
    return todos;
  }, [todos, filter]);

  function addTodo(text) {
    dispatch({ type: 'ADD', text });
  }

  function toggleTodo(id) {
    dispatch({ type: 'TOGGLE', id });
  }

  function deleteTodo(id) {
    dispatch({ type: 'DELETE', id });
  }

  return (
    <div className="grid">
      <WorldClock />

      <section className="card row" aria-label="Todo controls and list">
        <div className="todo-col todo-col--controls">
          <h1>Task Ops</h1>
          <p className="muted">Add tasks, filter them, mark complete, delete.</p>

          <TodoForm onAdd={addTodo} />
          <TodoFilters filter={filter} setFilter={setFilter} />
        </div>

        <div className="todo-col todo-col--list">
          <h2>Active Tasks</h2>
          <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </section>
    </div>
  );
}
