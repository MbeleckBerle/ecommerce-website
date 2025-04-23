"use client";
import { useRouter } from "next/navigation";

export function Categories() {
  const router = useRouter();
  return (
    <div className="h-30 bg-green-400">
      <h1>Categories</h1>
    </div>
  );
}
