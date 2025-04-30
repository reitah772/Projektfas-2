import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';

const db = new Database(`./sqlite.db`); 

export async function GET() {
  const todos = db.prepare('SELECT * FROM todos').all();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { text } = await request.json();
  const stmt = db.prepare('INSERT INTO todos (text) VALUES (?)');
  const result = stmt.run(text);
  return NextResponse.json({ text });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await db.run('DELETE FROM todos WHERE id = ?', [id]);
  return NextResponse.json({ success: true });
}
