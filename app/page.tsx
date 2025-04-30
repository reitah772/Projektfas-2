import React from 'react';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Todo-app med SQLite</h1>
      <TodoForm  />
      <TodoList />
    </main>
  );
}
