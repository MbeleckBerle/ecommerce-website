"use client";
import { useRouter } from "next/navigation";

export default function contact() {
  const router = useRouter();
  return (
    <div>
      <h1>Contact Page</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p2 rounded-md"
      >
        Go home
      </button>
    </div>
  );
}
