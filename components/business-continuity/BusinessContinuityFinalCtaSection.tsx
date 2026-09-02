'use client';

import Link from "next/link";

export default function BusinessContinuityFinalCtaSection() {
  return (
    <section className="w-full bg-white pb-12 lg:pb-24 pt-4 lg:pt-0" id="final-cta">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12">
        
        {/* ========================================================================= */}
        {/* MOBILE-ONLY VIBRANT BLUE BANNER (block lg:hidden - MATCHING media_1788179771794.png) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1D60EB] via-[#2A52D8] to-[#4339C7] p-7 sm:p-12 text-left text-white shadow-xl">
          
          <h2 className="text-xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white mb-3">
            Governance you can review.
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
            Scoped objectives, exercised validation, explicit boundaries — and no number published without the scope that makes it meaningful.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-8">
            <Link
              href="#critical-services"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-[#1D60EB] shadow-md hover:bg-slate-50 transition"
            >
              <span className="text-[#1D60EB] font-semibold">Objective semantics</span>
            </Link>

            <Link
              href="#shared-responsibility"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-200/60 bg-transparent px-6 text-center text-xs sm:text-sm font-semibold !text-white hover:bg-white/10 transition"
            >
              <span className="text-white font-semibold">Shared responsibility</span>
            </Link>
          </div>

          {/* Bottom Statement / Authority Links */}
          <p className="text-xs sm:text-sm text-blue-100/80 font-normal leading-relaxed max-w-xl">
            Current service state? System Status. Evidence artifacts? Trust Center. Contractual service levels? Your agreement and{" "}
            <Link href="/support-policy" className="underline font-normal text-white hover:text-blue-100 transition">
              Support Policy
            </Link>
            .
          </p>

        </div>

      </div>
    </section>
  );
}
