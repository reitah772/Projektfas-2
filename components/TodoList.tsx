'use client';
import React from 'react';
import { useEffect, useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  async function fetchTodos() {
    const res = await fetch('/api/todos');
    const data = await res.json();
    setTodos(data);
  }

  async function deleteTodo(id: number) {
    await fetch('/api/todos', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    });
    fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '1rem' }}>
            Ta bort
          </button>
        </li>
      ))}
    </ul>
  );
}
