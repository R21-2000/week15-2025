//535240192
import { prisma } from '@/app/lib/prisma';
export const dynamic = 'force-dynamic';

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <main style={{ padding: '20px' }}>
      <h1>Daftar Todo (Latihan SQLite)</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Selesai" : "Belum Selesai"}
          </li>
        ))}
      </ul></main>
  );
}