import { AsideChartIcon, AsideShieldIcon, BoltIcon, CapterraMarkIcon } from "./icons";

const FEATURES = [
  {
    icon: BoltIcon,
    bg: "bg-[#EEF2F7]",
    title: "Get started in minutes",
    body: "Create your account and set up your workspace in just a few steps.",
  },
  {
    icon: AsideShieldIcon,
    bg: "bg-[#DCFCE7]",
    title: "Enterprise-grade security",
    body: "Your data is protected with industry-leading security and compliance standards.",
  },
  {
    icon: AsideChartIcon,
    bg: "bg-[#EDE9FE]",
    title: "Scale with your business",
    body: "Flexible plans and powerful features for teams of any size.",
  },
];

export default function CreateAccountAside() {
  return (
    <div className="flex w-full flex-col gap-4 lg:w-96 lg:shrink-0">
      <h1 className="!m-0 !text-[34px] !font-extrabold !leading-[1.04] !tracking-[-0.02em] sm:!text-[40px] lg:!text-5xl lg:!leading-[49.68px]">
        <span className="block !text-[#0F172A]">Create your</span>
        <span className="block !text-[#1F6FEB]">Zoiko Billing</span>
        <span className="block !text-[#0F172A]">account</span>
      </h1>

      <p className="m-0 max-w-80 text-base font-normal !leading-6 !text-[#64748B]">
        Set up your billing workspace and continue to onboarding in a few steps.
      </p>

      <div className="flex flex-col gap-4 pt-4">
        {FEATURES.map(({ icon: Icon, bg, title, body }) => (
          <div key={title} className="flex items-start gap-3.5">
            <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${bg}`}>
              <Icon className="size-5" />
            </span>

            <div className="flex min-w-0 flex-col gap-1 pt-px">
              <p className="m-0 text-base font-bold !leading-6 !text-[#0F172A]">{title}</p>
              <p className="m-0 max-w-64 text-sm font-normal !leading-5 !text-[#64748B]">{body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Review badges */}
      <div className="mt-5 flex w-fit overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col items-center justify-center gap-0.5 px-5 py-3">
          <span className="text-base font-normal !leading-6 tracking-widest !text-[#F59E0B]">
            ★★★★★
          </span>
          <span className="text-xs font-semibold !leading-5 !text-[#64748B]">4.8/5 on G2</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-0.5 border-l border-[#EEF2F7] px-5 py-3">
          <span className="flex items-center gap-1.5">
            <CapterraMarkIcon className="size-4" />
            <span className="text-sm font-bold !leading-5 !text-[#0D5A6D]">Capterra</span>
          </span>
          <span className="text-xs font-semibold !leading-5 !text-[#64748B]">Verified reviews</span>
        </div>
      </div>
    </div>
  );
}
