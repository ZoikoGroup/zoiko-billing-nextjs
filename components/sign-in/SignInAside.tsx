import {
  AsideGlobeIcon,
  AsideLockIcon,
  AsideShieldIcon,
} from "./icons";

const FEATURES = [
  { icon: AsideLockIcon, label: "Enterprise-grade security" },
  { icon: AsideShieldIcon, label: "Your data is always protected" },
  { icon: AsideGlobeIcon, label: "Trusted by global businesses" },
];

export default function SignInAside() {
  return (
    <div className="w-full pb-3 lg:w-96 lg:shrink-0">
      <h1 className="!m-0 !text-[34px] !font-extrabold !leading-[1.05] !tracking-[-0.02em] !text-[#0F172A] sm:!text-[40px] lg:!text-5xl lg:!leading-[50.4px]">
        Welcome back
      </h1>

      <p className="m-0 pt-3 text-xl !leading-8">
        <span className="font-semibold !text-[#1E293B]">Sign in to </span>
        <span className="font-bold !text-[#1F6FEB]">Zoiko Billing</span>
      </p>

      <p className="m-0 pt-3 text-base font-normal !leading-6 !text-[#64748B]">
        Access your billing workspace securely.
      </p>

      <div className="flex flex-col gap-1.5 pt-5">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-[#EEF2F7]">
              <Icon className="size-4" />
            </span>

            <span className="text-sm font-medium !leading-5 !text-[#1E293B]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
