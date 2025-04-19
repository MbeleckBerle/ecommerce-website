"use client";
import { useRouter } from "next/navigation";
import { Top } from "@/components/home/top";
import { Today } from "@/components/home/today";
import { Categories } from "@/components/home/categories";
import { ThisMonth } from "@/components/home/this_month";
import { Explore } from "@/components/home/explore";
import { Featured } from "@/components/home/featured";

export default function Home() {
  const router = useRouter();
  return (
    <body>
      <div className="">
        <Top />
      </div>

      <Today />
      <Categories />
      <ThisMonth />
      <Explore />
      <Featured />
    </body>
  );
}
