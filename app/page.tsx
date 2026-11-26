import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">Job Board</h1>
      <p className="text-xl">Welcome To Production App!</p>
      <Link href="/jobs" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Brows Hobs</Link>
    </div>
  );
}
