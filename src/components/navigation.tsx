"use client";
import "tailwindcss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "@/app/ui/search";

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="justify-items-center-safe pt-10 columns: columns-3 color: bg-white text-black height: h-23 border-2 border-gray-200">
      <div className="">
        <Link
          href="/exclusive"
          className="font-bold mr-4 font-size: text-2xl text-black"
        >
          <button className="font-size: text-2xl">Exclusive</button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-20 h-5">
        <Link
          href="/home"
          className={
            pathname === "/home"
              ? "font-bold underline underline-offset-8 font-size: text-xl"
              : "text-black "
          }
        >
          Home
        </Link>
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? "font-bold underline underline-offset-8 font-size: text-xl"
              : "text-black "
          }
        >
          Contact
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "font-bold underline underline-offset-8 font-size: text-xl"
              : "text-black "
          }
        >
          About
        </Link>
        <Link
          href="/signup"
          className={
            pathname === "/signup"
              ? " underline underline-offset-8 font-size: text-xl font-bold"
              : "text-black "
          }
        >
          SignUp
        </Link>
      </div>
      <div className="justify-items-center-safe">
        <Search />
        {/* <input className="" defaultValue="What are you looking for?" /> */}
      </div>
    </div>
  );
}

{
  /* <Link href="/exclusive" className={ pathname ==="/exclusive" ? "font-weight: font-bold"} >
<button className="font-size: text-2xl">Exclusive</button>
</Link> */
}
