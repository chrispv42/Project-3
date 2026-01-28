// src/todos/TodoForm.jsx
import React, { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  function submit(e) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;

    onAdd(value);
    setText('');
  }

  return (
    <form className="todo-form" onSubmit={submit} aria-label="Add a new task">
      <label htmlFor="taskInput">Organization Start Here</label>

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
  );
}
