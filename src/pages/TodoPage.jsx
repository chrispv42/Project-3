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

  const cls = {
    root: 'grid',
    card: 'card',
    row: 'row',
    muted: 'muted',
  };

  return (
    <>
      <div className={cls.root}>
        {/* Simple “extra” card (not fancy) */}
        <WorldClock />

        {/* Side-by-side requirement: controls + list (desktop), wraps on small screens */}
        <section className={`${cls.card} ${cls.row}`} aria-label="Todo controls and list">
          <div style={{ flex: '1 1 280px', minWidth: 260 }}>
            <section>
              <h1>Task Ops</h1>
              <p className={cls.muted}>Add tasks, filter them, mark complete, delete.</p>
            </section>
            <TodoForm onAdd={(text) => dispatch({ type: 'ADD', text })} />
            <TodoFilters filter={filter} setFilter={setFilter} />
          </div>

          <div style={{ flex: '2 1 360px', minWidth: 280 }}>
            <h2>Task List</h2>
            <TodoList
              todos={filteredTodos}
              onToggle={(id) => dispatch({ type: 'TOGGLE', id })}
              onDelete={(id) => dispatch({ type: 'DELETE', id })}
            />
          </div>
        </section>
      </div>
    </>
  );
}
