"use client";
import { useRouter } from "next/navigation"; // Correct import for useRouter in Next.js 13+

export default function Home() {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Dashboard page</h1>
        <button
          onClick={back}
          className="bg-blue-500 rounded text-white font-bold py-2 px-4"
        >
          Back
        </button>
      </main>
    </div>
  );
}
