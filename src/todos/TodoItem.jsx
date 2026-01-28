// src/todos/TodoItem.jsx
export default function TodoItem({ todo, onToggle, onDelete }) {
  const rowClass = todo.completed ? 'todo todo--done' : 'todo';

  return (
    <div className={rowClass}>
      <label className="todo__left">
        <input
          className="todo__check"
          type="hidden"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label={`Mark "${todo.text}" as completed`}
        />
        <span className="todo__text">{todo.text}</span>
      </label>

      <div className="todo__actions">
        <button className="btn" type="button" onClick={() => onToggle(todo.id)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="btn" type="button" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
