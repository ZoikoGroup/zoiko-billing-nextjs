import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { BookDemoForm, DemoAside, TrustBar } from "@/components/book-demo";
import type { DemoStep } from "@/components/book-demo/types";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});

function parseStep(value?: string): DemoStep {
  return value === "2" ? 2 : value === "3" ? 3 : 1;
}

export default async function BookDemoPage({
  searchParams,
}: {
  searchParams: Promise<{ step?: string }>;
}) {
  // ?step=2|3 opens a later step directly, for review.
  const { step } = await searchParams;

  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} w-full bg-[#F8FAFC] font-[family-name:var(--font-inter)]`}
    >
      {/* Soft radial wash behind the top of the page */}
      <div className="relative w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(at_8%_0%,#EEF2F7_0%,rgba(238,242,247,0)_70%)]"
        />

        {/*
          Decorative wave lines: five stacked arcs 50.4px apart, spanning the
          viewport — matching the Figma background layer.
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

        <div className="relative mx-auto flex w-full max-w-[1480px] flex-col gap-11 px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-7">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-14">
            <DemoAside />
            <BookDemoForm initialStep={parseStep(step)} />
          </div>

          <TrustBar />
        </div>
      </div>
    </main>
  );
}
