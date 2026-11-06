import Image from "next/image";
import Link from "next/link";

import { DISPLAY, EXPLORE_HREF } from "./shared";

function Badge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex size-40 flex-col items-center justify-center rounded-full bg-[#00b8d6] text-[#082f49] shadow-[0_18px_40px_rgba(1,8,20,0.35)] outline-[10px] outline-offset-[-10px] outline-[#010814] lg:size-56 ${DISPLAY} ${className}`}
    >
      <span className="text-2xl font-bold uppercase leading-7 tracking-wide lg:text-3xl">Black Friday</span>
      <span className="text-6xl font-bold uppercase leading-[1] lg:text-7xl">2026</span>
    </div>
  );
}

export default function BlackFridayHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010814]">
      {/* Image: stacked on mobile, diagonal split on desktop */}
      <div className="relative h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[58%] lg:[clip-path:polygon(0_0,92%_0,70%_100%,0_100%)]">
        <Image
          src="/images/black-friday/hero-invoices-desk.webp"
          alt="Invoices, receipts and a calculator laid out on a desk"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 58vw"
          className="object-cover opacity-90"
        />
      </div>

      {/* Decorative rings and dots (desktop only) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <span className="absolute left-[-16px] top-[52%] size-11 rounded-full border-8 border-[#082f49]" />
        <span className="absolute left-[30%] top-[15%] size-9 rounded-full border-8 border-[#082f49]" />
        <span className="absolute left-[55%] top-[85%] size-10 rounded-full border-8 border-[#00b8d6]" />
        <span className="absolute right-[5%] top-[46%] size-9 rounded-full border-8 border-[#00b8d6]" />
        <span className="absolute right-[-64px] top-[61%] size-32 rounded-full bg-[#00b8d6]" />
        <span className="absolute bottom-[-56px] left-[6%] size-28 rounded-full bg-[#7fe3f5]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] px-5 sm:px-8 lg:min-h-[698px] lg:px-6">
        <Badge className="absolute -top-20 right-5 sm:right-8 lg:left-[49%] lg:right-auto lg:top-[-34px]" />

        <div className="hidden flex-1 lg:block" />
        <div className="flex flex-1 flex-col items-center pb-14 pt-28 text-center lg:pb-24 lg:pt-52">
          <h1
            className={`!mb-0 !text-6xl !font-bold uppercase !leading-[0.95] !tracking-wide text-white sm:!text-7xl xl:!text-8xl xl:!leading-[80px] ${DISPLAY}`}
          >
            From invoice
            <br />
            to insight.
          </h1>
          <p className="!mb-0 !mt-8 max-w-72 text-base font-medium uppercase !leading-6 tracking-[0.16em] !text-[#e9eef5]">
            Your revenue workflows deserve a simpler view.
          </p>
          <p className="!mb-0 !mt-4 max-w-96 text-base !leading-6 !text-[#a9bfdc]">
            Billing, invoicing, collections and revenue operations, unified from bill generation through
            follow-up.
          </p>
          <Link
            href={EXPLORE_HREF}
            className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#00b8d6] px-8 py-4 text-xl font-bold uppercase leading-5 tracking-wide text-[#082f49] transition-colors hover:bg-[#19c6e2] ${DISPLAY}`}
          >
            Explore Zoiko Billing
          </Link>
        </div>
      </div>
    </section>
  );
}
