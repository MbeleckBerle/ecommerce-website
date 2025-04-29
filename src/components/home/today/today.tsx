// "use client";
import { useRouter } from "next/navigation";
import { Countdown } from "../countdown";
import { TodayItems } from "./todayItems";
import CustomButton from "@/components/button";

export function Today() {
  // const router = useRouter();

  return (
    <div className="">
      <div>
        <div className="p-5 ">
          <div className="flex">
            <div className="w-8 h-15 rounded-sm bg-red-500"></div>
            <h1 className="place-self-center text-red-500 text-3xl font-bold pl-10 ">
              Today's
            </h1>
          </div>
        </div>
        <div className="flex flex-left justify-stretchen">
          <h1 className="text-7xl font-bold pr-20 place-self-center">
            Flash Sales
          </h1>
          <Countdown />
        </div>
        <TodayItems />
        <div className="place-self-center mt-40">
          {/* <button className="h-20 rounded-md w-100 bg-red-500  text-3xl font-bold hover:not-focus:bg-indigo-700">
            View All Products
          </button> */}
          <CustomButton text="View All Products" />
        </div>
      </div>
    </div>
  );
}
