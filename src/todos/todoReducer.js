// src/todos/todoReducer.js

export const initialTodos = [{ id: 1, text: 'Complete homework', completed: false }];

export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const text = String(action.text || '').trim();
      if (!text) return state;

      const nextId = state.length ? Math.max(...state.map((t) => t.id)) + 1 : 1;

      return [{ id: nextId, text, completed: false }, ...state];
    }

    case 'TOGGLE': {
      return state.map((t) => (t.id === action.id ? { ...t, completed: !t.completed } : t));
    }

    case 'DELETE': {
      return state.filter((t) => t.id !== action.id);
    }

    default:
      return state;
  }
}
