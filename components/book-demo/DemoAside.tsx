import { CalendarIcon, CapterraMarkIcon, ClockIcon, ShieldIcon } from "./icons";

const BENEFITS = [
  {
    icon: CalendarIcon,
    title: "Personalized walkthrough",
    body: "See how Zoiko Billing solves your specific challenges.",
  },
  {
    icon: ClockIcon,
    title: "30 minutes",
    body: "Focused, efficient, and built around your priorities.",
  },
  {
    icon: ShieldIcon,
    title: "No commitment",
    body: "Ask anything. No account needed to book or attend.",
  },
];

export default function DemoAside() {
  return (
    <div className="w-full lg:w-[384px] lg:shrink-0">
      <h1 className="!m-0 !text-[34px] !font-extrabold !leading-[1.04] !tracking-[-0.02em] !text-[#0F172A] sm:!text-[40px] lg:!text-5xl lg:!leading-[49.68px]">
        See Zoiko Billing
        <br className="hidden lg:block" /> in action
      </h1>

      <p className="m-0 max-w-80 pt-[5.2px] text-base font-normal !leading-6 !text-[#64748B]">
        A personalized demo tailored to your business. No pressure. Just real
        answers.
      </p>

      {/* Benefits */}
      <div className="flex flex-col gap-2.5 pt-5">
        {BENEFITS.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex items-start gap-3.5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2F7]">
              <Icon className="size-5" />
            </span>

            <div className="flex min-w-0 flex-col gap-1 pt-px">
              <p className="m-0 text-base font-bold !leading-6 !text-[#0F172A]">
                {title}
              </p>

              <p className="m-0 max-w-64 text-sm font-normal !leading-5 !text-[#64748B]">
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Review badges */}
      <div className="flex flex-col items-start gap-3.5 pt-5">
        <div className="flex h-16 items-center gap-2.5 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)]">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-xl bg-[#FF492C] text-xs font-extrabold !leading-4 !text-white">
            G2
          </span>

          <div className="flex flex-col gap-[2.5px]">
            <span className="text-sm font-normal !leading-5 tracking-wider !text-[#F59E0B]">
              ★★★★★
            </span>

            <span className="text-xs font-semibold !leading-5 !text-[#64748B]">
              4.8/5 on G2
            </span>
          </div>
        </div>

        <div className="flex h-16 items-center gap-2.5 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)]">
          <span className="flex shrink-0 items-center gap-1.5">
            <CapterraMarkIcon className="size-3.5" />

            <span className="text-xs font-bold !leading-5 !text-[#0D5A6D]">
              Capterra
            </span>
          </span>

          <div className="flex flex-col gap-[3.38px]">
            <span className="text-sm font-normal !leading-5 tracking-wider !text-[#F59E0B]">
              ★★★★☆
            </span>

            <span className="text-xs font-semibold !leading-5 !text-[#64748B]">
              4.7/5 on Capterra
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
