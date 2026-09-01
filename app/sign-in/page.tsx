import { Inter } from "next/font/google";
import Link from "next/link";

import { SignInAside, SignInCard, TrustBar } from "@/components/sign-in";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy-and-data-governance" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "/security-advisories" },
  { label: "Help", href: "#" },
];

const STEPS = ["email", "password", "otp", "done"] as const;

type StepParam = (typeof STEPS)[number];

function parseStep(value?: string): StepParam {
  return STEPS.includes(value as StepParam) ? (value as StepParam) : "email";
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  // ?step=password|otp|done opens a later step directly, for review.
  const { step } = await searchParams;

  return (
    <main
      className={`${inter.variable} relative w-full overflow-hidden bg-[#F8FAFC] pb-16 font-[family-name:var(--font-inter)]`}
    >
      {/* Top gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-gradient-to-b from-[#FCFDFE] to-[#F8FAFC]"
      />

      {/*
        Decorative wave lines: five stacked arcs 50.4px apart, clipped to a
        1526x756 box starting 86px off the left edge — matching the Figma.
      */}
      <svg
        aria-hidden
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-[180px] hidden h-[756px] w-full opacity-50 sm:block"
      >
        {[369.94, 420.34, 470.74, 521.14, 571.54].map((y) => (
          <path
            key={y}
            d={`M0 ${y + 150} C 320 ${y + 30}, 820 ${y - 40}, 1440 ${y + 60}`}
            fill="none"
            stroke="#E8EDF3"
            strokeWidth="1.51"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 pt-10 sm:px-6 lg:px-7 lg:pt-12">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-12">
          <SignInAside />

          {/* Fills the space beside the aside; the card stays 384px, centred. */}
          <div className="flex w-full min-w-0 flex-col lg:flex-1 lg:items-center">
            <div className="flex w-full flex-col gap-3.5 lg:max-w-96">
              <Link
                href="/"
                className="w-fit px-1 py-1.5 text-xs font-semibold !leading-5 !text-[#64748B] hover:underline"
              >
                ← Back to website
              </Link>

              <SignInCard initialStep={parseStep(step)} />

              <div className="flex justify-center gap-5 pt-2">
                {FOOTER_LINKS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-xs font-medium !leading-5 !text-[#64748B] hover:underline"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <TrustBar />
      </div>
    </main>
  );
}
