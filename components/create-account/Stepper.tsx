const STEPS = [
  { id: 1, label: "Account" },
  { id: 2, label: "Workspace" },
  { id: 3, label: "Checkout" },
];

export default function Stepper({ current }: { current: number }) {
  return (
    <ol className="m-0 flex w-full list-none items-start p-0">
      {STEPS.map((step, index) => {
        // Every circle is identical - only the background changes: the step
        // you are on is blue, all others stay grey.
        const done = current > step.id;
        const isCurrent = current === step.id;

        const circle = isCurrent
          ? "bg-[#1F6FEB] !text-white"
          : "bg-[#EEF2F7] !text-[#94A3B8]";

        return (
          <li key={step.id} className="flex flex-1 items-start last:flex-none">
            <div className="flex flex-col items-center gap-2.5">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-2xl text-xs font-bold !leading-5 ${circle}`}
                aria-current={isCurrent ? "step" : undefined}
              >
                {step.id}
              </span>

              <span
                className={`whitespace-nowrap text-xs font-semibold !leading-5 ${
                  done || isCurrent ? "!text-[#1E293B]" : "!text-[#94A3B8]"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < STEPS.length - 1 && (
              <span
                aria-hidden
                className={`mx-2 mt-[13px] h-0.5 flex-1 sm:mx-4 ${
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
