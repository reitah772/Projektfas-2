'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TodoForm() {
  const [text, setText] = useState('');
const router = useRouter();
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text) return;
    await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' }
    });
    setText('');
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ny todo"
        required
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}
