'use client';

import Link from "next/link";

export default function AccessibilityFinalCtaSection() {
  return (
    <section className="w-full bg-white pb-12 lg:pb-24 pt-4 lg:pt-0" id="final-cta">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* MOBILE-ONLY VIBRANT BLUE BANNER (block lg:hidden - MATCHING media_1788178990003.png) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1D60EB] via-[#2A52D8] to-[#4339C7] p-7 sm:p-12 text-left text-white shadow-xl">
          
          <h2 className="text-xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white mb-3">
            If we have not measured it, we say so.
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
            Scoped evidence, published limitations, and a barrier report that asks about the product rather than about you.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-8">
            <Link
              href="#report-barrier"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-[#1D60EB] shadow-md hover:bg-slate-50 transition"
            >
              <span className="text-[#1D60EB] font-semibold">Report a barrier</span>
            </Link>

            <Link
              href="#known-limitations"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-200/60 bg-transparent px-6 text-center text-xs sm:text-sm font-semibold !text-white hover:bg-white/10 transition"
            >
              <span className="text-white font-semibold">Known limitations</span>
            </Link>
          </div>

          {/* Bottom Statement / Authority Links */}
          <p className="text-xs sm:text-sm text-blue-100/80 font-normal leading-relaxed max-w-xl">
            Conformance artifacts? Trust Center. Product behavior?{" "}
            <Link href="/documentation" className="underline font-normal text-white hover:text-blue-100 transition">
              Documentation
            </Link>
            . Account help?{" "}
            <Link href="#report-barrier" className="underline font-normal text-white hover:text-blue-100 transition">
              Contact Support
            </Link>
            .
          </p>

        </div>

      </div>
    </section>
  );
}
