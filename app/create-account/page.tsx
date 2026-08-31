import { Inter } from "next/font/google";
import Link from "next/link";

import {
  CreateAccountAside,
  CreateAccountForm,
  TrustBar,
} from "@/components/create-account";
import { ArrowLeftIcon } from "@/components/create-account/icons";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SCREENS = ["account", "verify", "workspace", "checkout", "success"] as const;

type ScreenParam = (typeof SCREENS)[number];

function parseScreen(value?: string): ScreenParam {
  return SCREENS.includes(value as ScreenParam)
    ? (value as ScreenParam)
    : "account";
}

export default async function CreateAccountPage({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  // ?step=verify|workspace|checkout|success opens a later screen, for review.
  const { step } = await searchParams;

  return (
    <main
      className={`${inter.variable} relative w-full overflow-hidden bg-[#F8FAFC] pb-16 font-[family-name:var(--font-inter)]`}
    >
      {/* Radial wash behind the top of the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(at_8%_0%,#EEF2F7_0%,rgba(238,242,247,0)_70%)]"
      />

      {/*
        Decorative wave lines: five stacked arcs 50.4px apart, spanning the
        viewport from 287px down — matching the Figma background layer.
      */}
      <svg
        aria-hidden
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-[287px] hidden h-[756px] w-full opacity-50 sm:block"
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
          <CreateAccountAside />

          <div className="flex w-full min-w-0 flex-col lg:flex-1">
            <CreateAccountForm initialScreen={parseScreen(step)} />

            <Link
              href="/"
              className="mx-auto flex items-center gap-2 pt-8 text-lg font-semibold !leading-6 !text-black hover:underline"
            >
              <ArrowLeftIcon className="size-6" />
              Back to Website
            </Link>
          </div>
        </div>

        <TrustBar />
      </div>
    </main>
  );
}
