"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p2 rounded-md"
      >
        Go home
      </button>
    </div>
  );
}
