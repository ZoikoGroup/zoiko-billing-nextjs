import { TrustCloudIcon, TrustGlobeIcon, TrustLockIcon, TrustShieldIcon } from "./icons";

const ITEMS = [
  { icon: TrustLockIcon, label: "SOC 2 Type II Compliant" },
  { icon: TrustShieldIcon, label: "GDPR Ready" },
  { icon: TrustCloudIcon, label: "99.9% Uptime" },
  { icon: TrustGlobeIcon, label: "Trusted by businesses worldwide" },
];

export default function TrustBar() {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-[#E2E8F0] bg-white px-7 py-8 shadow-[0px_1px_2px_0px_rgba(15,23,42,0.06)]">
      <p className="m-0 text-center text-xl font-extrabold !leading-8 !text-[#1F6FEB]">
        Built for trust. Designed for you.
      </p>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#EFF4FF]">
              <Icon className="size-6" />
            </span>

            <p className="m-0 text-center text-sm font-bold !leading-5 !text-[#0F172A]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
