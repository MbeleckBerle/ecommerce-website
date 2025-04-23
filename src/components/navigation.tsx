"use client";
import "tailwindcss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "@/app/ui/search";

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className=" pt-30 columns: columns-3 color: bg-white text-black ">
      <div className="">
        <Link href="/exclusive" className="font-bold  text-black">
          <button className="text-5xl">Exclusive</button>
        </Link>
      </div>

      <div className=" justify-items-center grid grid-cols-4 gap-20 h-5">
        <Link
          href="/home"
          className={
            pathname === "/home"
              ? "font-bold underline underline-offset-8 font-size: text-4xl"
              : "text-black text-4xl"
          }
        >
          Home
        </Link>
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? "font-bold underline underline-offset-8 font-size: text-4xl"
              : "text-black text-4xl"
          }
        >
          Contact
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? "font-bold underline underline-offset-8 font-size: text-4xl"
              : "text-black text-4xl"
          }
        >
          About
        </Link>
        <Link
          href="/signup"
          className={
            pathname === "/signup"
              ? " underline underline-offset-8 font-size: text-4xl font-bold"
              : "text-black text-4xl"
          }
        >
          SignUp
        </Link>
      </div>
      <div className="float-right">
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
