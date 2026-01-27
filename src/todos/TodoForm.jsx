// src/todos/TodoForm.jsx
import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const value = String(text).trim();
    if (!value) return;
    onAdd(value);
    setText('');
  };

  return (
    <div className="row">
      <form onSubmit={submit} aria-label="Add a new task">
        <label htmlFor="taskInput">Organization Start Here</label>

        {/* input + button row */}
        <div className="todo-form__row">
          <input
            id="taskInput"
            className="input todo-form__input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task"
            autoComplete="off"
            maxLength={120}
            required
          />

          <button className="btn todo-form__btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
