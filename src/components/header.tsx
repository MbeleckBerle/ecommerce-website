"use client";
import "tailwindcss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "@/app/ui/search";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="pt-10 columns: columns-3 color: bg-black text-black height: h-20 border-b-2 border-gray-200">
      {/* <h1 className="text-white justify-self-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </h1> */}
    </div>
  );
}
