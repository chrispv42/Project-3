// src/todos/TodoList.jsx
import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, onToggle, onDelete }) {
  const cls = {
    root: 'grid',
    muted: 'muted',
  };

  return (
    <>
      <div id="todo-list" className={cls.root}>
        {todos.length === 0 ? (
          <p className={cls.muted}>No tasks yet. Add one above.</p>
        ) : (
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {todos.map((t) => (
              <li key={t.id} style={{ marginBottom: 10 }}>
                <TodoItem todo={t} onToggle={onToggle} onDelete={onDelete} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
