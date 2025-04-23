// "use client";
import { useRouter } from "next/navigation";
import { Countdown } from "../countdown";
import { TodayItems } from "./todayItems";

export function Today() {
  // const router = useRouter();

  return (
    <div className="h-100">
      <div>
        <div>
          <div className="flex">
            <div className="w-5 h-8 rounded-sm bg-red-500"></div>
            <h1 className="place-self-center pl-5">Today's</h1>
          </div>
        </div>
        <div className="flex flex-left justify-stretchen">
          <h1 className="pr-20 place-self-center">Flash Sales</h1>
          <Countdown />
        </div>
        <h1>Fash Sales</h1>
        <div className="h-200">
          <TodayItems />
        </div>
      </div>
    </div>
  );
}
