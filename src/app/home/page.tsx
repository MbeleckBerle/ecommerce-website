// "use client";
import { Top } from "@/components/home/top";
import { Categories } from "@/components/home/categories";
import { ThisMonth } from "@/components/home/this_month";
import { Explore } from "@/components/home/explore";
import { Featured } from "@/components/home/featured";
import { Footer } from "@/components/home/footer";
import { Today } from "@/components/home/today/today";

export default function Home() {
  return (
    <div className="px-90 flex flex-col">
      <div className="">
        <div className="">
          <Top />
        </div>
        <Today />
        <Categories />
        <ThisMonth />
        <Explore />
        <Featured />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
