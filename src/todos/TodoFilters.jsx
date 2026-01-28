// src/todos/TodoFilters.jsx
export default function TodoFilters({ filter, setFilter }) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'completed', label: 'Completed' },
    { key: 'incomplete', label: 'Incomplete' },
  ];

  return (
    <div className="filters" role="group" aria-label="Todo filters">
      {filters.map((f) => (
        <button
          key={f.key}
          type="button"
          className="btn"
          onClick={() => setFilter(f.key)}
          aria-pressed={filter === f.key}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
