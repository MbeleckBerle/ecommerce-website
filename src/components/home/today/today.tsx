// "use client";
import { useRouter } from "next/navigation";
import { Countdown } from "../countdown";
import { TodayItems } from "./todayItems";

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
      </div>
    </div>
  );
}
