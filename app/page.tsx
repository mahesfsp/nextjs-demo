import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>MAheswari</h1>
      <button className="bg-blue-500 rounded text-wite font-bold py-2 px-4">BAck</button>
      <Link className="text-red-600" href="/dashboard">Dashboard</Link>
      <Link className="text-red-600" href="/dashboard/settings">Settings</Link>
       </main>
    </div>
  );
}
