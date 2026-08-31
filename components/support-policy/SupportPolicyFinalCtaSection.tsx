'use client';

import Link from "next/link";

export default function SupportPolicyFinalCtaSection() {
  return (
    <section className="w-full bg-white pb-12 lg:pb-24 pt-4 lg:pt-0" id="final-cta">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* MOBILE-ONLY VIBRANT BLUE BANNER (block lg:hidden - MATCHING media_1788178000175.png) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1D60EB] via-[#2A52D8] to-[#4339C7] p-7 sm:p-12 text-left text-white shadow-xl">
          
          <h2 className="text-xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white mb-3">
            Stated once, from a source.
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
            Every commitment on this page carries a version, an effective date, a measurement basis and an owner — or it is not on this page.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-8">
            <Link
              href="#policy-summary"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-[#1D60EB] shadow-md hover:bg-slate-50 transition"
            >
              <span className="text-[#1D60EB] font-semibold">Review coverage</span>
            </Link>

            <Link
              href="#contact-support"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-200/60 bg-transparent px-6 text-center text-xs sm:text-sm font-semibold !text-white hover:bg-white/10 transition"
            >
              <span className="text-white font-semibold">Contact Support</span>
            </Link>
          </div>

          {/* Bottom Statement / Authority Links */}
          <p className="text-xs sm:text-sm text-blue-100/80 font-normal leading-relaxed max-w-xl">
            Current service state?{" "}
            <Link href="/trust" className="underline font-normal text-white hover:text-blue-100 transition">
              System Status
            </Link>
            . Product behavior?{" "}
            <Link href="/documentation" className="underline font-normal text-white hover:text-blue-100 transition">
              Documentation
            </Link>
            . Plan entitlement?{" "}
            <Link href="/pricing-and-plans" className="underline font-normal text-white hover:text-blue-100 transition">
              Pricing
            </Link>
            .
          </p>

        </div>

      </div>
    </section>
  );
}
