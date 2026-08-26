'use client';

import Link from "next/link";

interface RouteByNeedItem {
  need: string;
  destination: string;
  href: string;
}

const routeByNeedItems: RouteByNeedItem[] = [
  { need: "Exact contracts", destination: "API documentation", href: "/developers-api-documentation" },
  { need: "Access setup", destination: "Authentication", href: "/developers-authentication" },
  { need: "Event design", destination: "Webhooks", href: "/developers-webhooks" },
  { need: "Safe validation", destination: "Developer sandbox", href: "/developers-sandbox" },
  { need: "Enterprise review", destination: "Approved security route", href: "#enterprise-review" },
];

export default function DeveloperBuildIntegrationFinalCtaSection() {
  return (
    <section className="w-full bg-white py-10 lg:py-20" id="final-cta">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12 flex flex-col gap-10">
        
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:flex - UNTOUCHED & EXCLUSIVE FOR DESKTOP)      */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex relative overflow-hidden rounded-[28px] bg-[#071126] p-10 lg:p-14 shadow-2xl border border-slate-800/70 flex-row items-center justify-between gap-10">
          
          {/* Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-[480px] h-[480px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

          {/* Left Text Content & Actions */}
          <div className="relative z-10 flex flex-col items-start gap-4 max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-white">
              Plan the boundary. <br />
              Then build against it.
            </h2>

            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-400 max-w-[460px] mt-1">
              Composition, readiness sequencing, ownership, evidence, rollout, operations and
              decommission — with every technical fact owned by its canonical source.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                href="#integration-lifecycle"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 shadow-md hover:bg-slate-100 transition"
              >
                <span className="text-slate-900 font-semibold">Review the lifecycle</span>
              </Link>

              <Link
                href="#readiness-gate"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-700/80 bg-transparent px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-sm transition hover:bg-white/10"
              >
                <span className="text-white font-semibold">Readiness gate</span>
              </Link>
            </div>
          </div>

          {/* Right Side Image Container dban8.png */}
          <div className="relative z-10 w-full max-w-[540px] shrink-0">
            <img
              src="/images/developers-build-an-integration/dban8.png"
              alt="Plan the boundary. Then build against it."
              className="w-full h-auto object-cover rounded-2xl block border border-slate-800/80 shadow-xl"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787669487572.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative overflow-hidden rounded-[24px] bg-[#0A132C] p-6 sm:p-8 shadow-xl border border-slate-800 text-left">
          
          {/* Ambient Top Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl font-extrabold leading-snug text-white mb-2 relative z-10">
            Plan the boundary.<br />
            Then build against it.
          </h2>

          {/* Subtitle */}
          <p className="text-xs font-normal leading-relaxed text-slate-400 mb-5 relative z-10">
            Composition, readiness sequencing, ownership, evidence, rollout, operations and decommission — with every technical fact owned by its canonical source.
          </p>

          {/* 3 Buttons Row */}
          <div className="flex flex-wrap items-center gap-2 mb-6 relative z-10">
            <Link
              href="#integration-lifecycle"
              className="inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-center text-xs font-semibold !text-slate-900 shadow-sm"
            >
              <span className="text-slate-900 font-semibold">Review the lifecycle</span>
            </Link>

            <Link
              href="#readiness-gate"
              className="inline-flex min-h-9 items-center justify-center rounded-full border border-white/80 bg-transparent px-4 text-center text-xs font-semibold !text-white"
            >
              <span className="text-white font-semibold">Readiness gate</span>
            </Link>

            <Link
              href="/developers-api-documentation"
              className="inline-flex min-h-9 items-center justify-center rounded-full border border-white/80 bg-transparent px-4 text-center text-xs font-semibold !text-white"
            >
              <span className="text-white font-semibold">API Documentation</span>
            </Link>
          </div>

          {/* Route by need Box */}
          <div className="rounded-2xl bg-[#070D1E]/70 border border-slate-800 p-4 sm:p-5 relative z-10 text-xs text-slate-300">
            <div className="text-xs font-bold text-slate-200 mb-3">
              Route by need
            </div>

            <div className="divide-y divide-slate-800/80">
              {routeByNeedItems.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between gap-3">
                  <span className="text-slate-400 text-xs font-normal">{item.need}</span>
                  <Link href={item.href} className="font-bold text-white text-xs text-right hover:text-blue-400 transition">
                    {item.destination}
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE-ONLY VIBRANT BLUE BANNER (block lg:hidden - HIDDEN ON DESKTOP)       */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1D60EB] via-[#2A52D8] to-[#4339C7] p-7 sm:p-12 text-left text-white shadow-xl">
          
          <h2 className="text-xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white mb-3">
            Composition, not a second API reference.
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
            Architecture, readiness, operation, change and ownership — assembled from contracts that stay owned elsewhere.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-8">
            <Link
              href="#readiness-gate"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-[#1D60EB] shadow-md hover:bg-slate-50 transition"
            >
              <span className="text-[#1D60EB] font-semibold">Open the readiness gate</span>
            </Link>

            <Link
              href="#integration-lifecycle"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-200/60 bg-transparent px-6 text-center text-sm font-semibold !text-white hover:bg-white/10 transition"
            >
              <span className="text-white font-semibold">Integration lifecycle</span>
            </Link>
          </div>

          {/* Bottom Statement / Deployment Link */}
          <p className="text-xs sm:text-sm text-blue-100/80 font-normal leading-relaxed max-w-xl">
            Available as standalone software, and as an integrated component of Zoiko One where that deployment is evaluated separately.{" "}
            <Link href="/pricing-and-plans" className="underline font-normal text-white hover:text-blue-100 transition">
              Compare deployment options
            </Link>
          </p>

        </div>

      </div>
    </section>
  );
}
