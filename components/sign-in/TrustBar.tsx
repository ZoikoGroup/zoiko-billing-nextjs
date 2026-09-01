import {
  TrustClockIcon,
  TrustGlobeIcon,
  TrustLockIcon,
  TrustPasskeyIcon,
  TrustShieldIcon,
  TrustWorkspaceIcon,
} from "./icons";

const ITEMS = [
  {
    icon: TrustShieldIcon,
    title: "Secure by design",
    body: "End-to-end encryption and data protection.",
  },
  {
    icon: TrustLockIcon,
    title: "SSO & MFA ready",
    body: "Enterprise identity and multi-factor authentication.",
  },
  {
    icon: TrustPasskeyIcon,
    title: "Passkey support",
    body: "Passwordless sign-in with WebAuthn.",
  },
  {
    icon: TrustWorkspaceIcon,
    title: "Multi-workspace",
    body: "Move between organizations you're authorized for.",
  },
  {
    icon: TrustClockIcon,
    title: "Always protected",
    body: "Monitored 24/7 with global security standards.",
  },
  {
    icon: TrustGlobeIcon,
    title: "Trusted globally",
    body: "Built for businesses around the world.",
  },
];

export default function TrustBar() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 rounded-2xl border border-[#EEF2F7] bg-white p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3 xl:grid-cols-6">
      {ITEMS.map(({ icon: Icon, title, body }) => (
        <div key={title} className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EEF2F7]">
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
