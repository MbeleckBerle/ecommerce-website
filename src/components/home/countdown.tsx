"use client";
import { useRouter } from "next/navigation";

export function Countdown() {
  const router = useRouter();
  return (
    <div className="font-bold">
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
          <span className="countdown font-mono text-5xl">
            <span className="--value:15;" aria-live="polite" aria-label="15">
              15
            </span>
          </span>
          days
        </div>
        <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
          <span className="countdown font-mono text-5xl">
            <span className="--value:10;" aria-live="polite" aria-label="10">
              10
            </span>
          </span>
          hours
        </div>
        <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
          <span className="countdown font-mono text-5xl">
            <span className="--value:24;" aria-live="polite" aria-label="24">
              24
            </span>
          </span>
          min
        </div>
        <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
          <span className="countdown font-mono text-5xl">
            <span className="--value:59;" aria-live="polite" aria-label="59">
              59
            </span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
}
