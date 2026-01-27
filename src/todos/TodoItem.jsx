// src/todos/TodoItem.jsx
export default function TodoItem({ todo, onToggle, onDelete }) {
  const cls = {
    row: `todo${todo.completed ? ' todo--done' : ''}`,
    btn: 'btn',
  };

  const textStyle = todo.completed ? { textDecoration: 'line-through' } : undefined;

  return (
    <>
      <div className={cls.row}>
        <span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            aria-label={`Mark "${todo.text}" as completed`}
          />{' '}
          <span style={textStyle}>{todo.text}</span>
        </span>

        <span className="row">
          <button className={cls.btn} type="button" onClick={() => onToggle(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button className={cls.btn} type="button" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </span>
      </div>
    </>
  );
}
