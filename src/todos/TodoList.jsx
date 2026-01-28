// src/todos/TodoList.jsx
import TodoItem from './TodoItem.jsx';

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="muted">No tasks yet. Add one to start your organized journey 😎</p>;
  }

  return (
    <ul id="todo-list" className="todo-list" aria-label="Todo list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-list__item">
          <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
