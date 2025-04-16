"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

import "tailwindcss";

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="justify-items-center-safe pt-10 columns: columns-3 gap-4 color: bg-amber-50 text-black height: h-20">
      <div className="">
        <Link
          href="/exclusive"
          className="font-bold mr-4 font-size: text-2xl text-black text-2xl"
        >
          <button className="font-size: text-2xl">Exclusive</button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-20 h-5">
        <Link
          href="/home"
          className={
            pathname === "/home"
              ? " underline underline-offset-8 font-size: text-xl"
              : "text-black mr-1.5"
          }
        >
          Home
        </Link>
        <Link
          href="/contact"
          className={
            pathname === "/contact"
              ? " underline underline-offset-8 font-size: text-xl"
              : "text-black mr-1.5"
          }
        >
          Contact
        </Link>
        <Link
          href="/about"
          className={
            pathname === "/about"
              ? " underline underline-offset-8 font-size: text-xl"
              : "text-black mr-1.5"
          }
        >
          About
        </Link>
        {/* <Link
          href="/signup"
          className={
            pathname === "/signup"
              ? " underline underline-offset-8 font-size: text-xl"
              : "text-black mr-1.5"
          }
        >
          SignUp
        </Link> */}
      </div>
      <div>Search/cart</div>
    </div>
  );
}

{
  /* <Link href="/exclusive" className={ pathname ==="/exclusive" ? "font-weight: font-bold"} >
<button className="font-size: text-2xl">Exclusive</button>
</Link> */
}
