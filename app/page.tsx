// /app/page.tsx

"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Abdullah Shakir</h1>
      <p className="text-lg">FAST NUCES ISLAMABAD</p>

      <p className="text-lg mt-4">
        I am a software engineer with a passion for web development and
        design...
      </p>

      <Link
        href="/users/abdullahshakir"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        View My Profile
      </Link>
    </main>
  );
}
