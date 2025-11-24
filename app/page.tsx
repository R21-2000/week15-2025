//535240192
import { prisma } from '@/app/lib/prisma';

export default async function Home() {
  // Mengambil data dari database (Read Operation)
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
      </ul>
      <p>Catatan: Di Vercel, fitur tambah data (Write) mungkin tidak akan tersimpan permanen karena keterbatasan SQLite Serverless.</p>
    </main>
  );
}