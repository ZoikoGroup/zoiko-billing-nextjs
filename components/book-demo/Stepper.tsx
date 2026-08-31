import type { DemoStep } from "./types";

const STEPS: { id: DemoStep; label: string }[] = [
  { id: 1, label: "Your Details" },
  { id: 2, label: "Select Time" },
  { id: 3, label: "Confirmation" },
];

export default function Stepper({ current }: { current: DemoStep }) {
  return (
    <ol className="m-0 flex w-full list-none items-center p-0">
      {STEPS.map((step, index) => {
        // Every circle is identical - only the background changes: the step
        // you are on is blue, all others stay grey.
        const done = current > step.id;
        const isCurrent = current === step.id;

        const circle = isCurrent
          ? "bg-[#1F6FEB] !text-white"
          : "bg-[#EEF2F7] !text-[#94A3B8]";

        return (
          <li
            key={step.id}
            className="flex flex-1 items-center gap-2 last:flex-none"
          >
            <span
              className={`flex size-7 shrink-0 items-center justify-center rounded-2xl text-xs font-bold !leading-5 ${circle}`}
              aria-current={isCurrent ? "step" : undefined}
            >
              {step.id}
            </span>

            {/*
              Labels are hidden on the narrowest screens — all three at once
              overflow a ~288px card. The numbered rail still shows progress,
              and each step renders its own heading below.
            */}
            <span
              className={`hidden whitespace-nowrap text-xs font-semibold !leading-5 sm:inline sm:text-sm ${
                done || isCurrent ? "!text-[#0F172A]" : "!text-[#94A3B8]"
              }`}
            >
              {step.label}
            </span>

            {index < STEPS.length - 1 && (
              <span
                aria-hidden
                className={`mx-2 h-0.5 flex-1 ${
                  done ? "bg-[#1F6FEB]" : "bg-[#E2E8F0]"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
