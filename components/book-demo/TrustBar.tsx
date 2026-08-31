import {
  TrustChartIcon,
  TrustGlobeIcon,
  TrustMessageIcon,
  TrustShieldIcon,
  TrustUsersIcon,
} from "./icons";

const ITEMS = [
  {
    icon: TrustShieldIcon,
    title: "SOC 2 Type II compliant",
    body: "Enterprise-grade security and availability.",
  },
  {
    icon: TrustGlobeIcon,
    title: "GDPR ready",
    body: "Your data is handled with strict care.",
  },
  {
    icon: TrustMessageIcon,
    title: "No spam, ever",
    body: "We'll only contact you about your demo.",
  },
  {
    icon: TrustUsersIcon,
    title: "Global team",
    body: "Worldwide experts, local support.",
  },
  {
    icon: TrustChartIcon,
    title: "Trusted by businesses",
    body: "Thousands manage billing with confidence.",
  },
];

export default function TrustBar() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)] sm:grid-cols-2 sm:p-7 lg:grid-cols-3 xl:grid-cols-5">
      {ITEMS.map(({ icon: Icon, title, body }) => (
        <div key={title} className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-3xl bg-[#EEF2F7]">
            <Icon className="size-5" />
          </span>

          <div className="flex min-w-0 flex-col gap-[3px]">
            <p className="m-0 text-sm font-bold !leading-5 !text-[#0F172A]">
              {title}
            </p>

            <p className="m-0 text-xs font-normal !leading-4 !text-[#64748B]">
              {body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
