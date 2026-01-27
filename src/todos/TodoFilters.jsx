// src/todos/TodoFilters.jsx
export default function TodoFilters({ filter, setFilter }) {
  const cls = {
    root: 'row',
    btn: 'btn',
  };

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'completed', label: 'Completed' },
    { key: 'incomplete', label: 'Incomplete' },
  ];

  return (
    <>
      <div className={cls.root}>
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={cls.btn}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>
    </>
  );
}
