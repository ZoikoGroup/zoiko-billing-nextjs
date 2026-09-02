'use client';

import Link from "next/link";

interface RouteByNeedItem {
  need: string;
  route: string;
  href: string;
}

const routeByNeedItems: RouteByNeedItem[] = [
  { need: "Check the evidence", route: "Methodology", href: "#evidence-methodology" },
  { need: "Broader research", route: "Reports & insights", href: "/reports-and-insights" },
  { need: "Product behavior", route: "Documentation", href: "/developers-api-documentation" },
  { need: "Security assurance", route: "Trust center", href: "/trust" },
  { need: "Account help", route: "Help Center", href: "#faq" },
];

export default function CustomerStoriesFinalCtaSection() {
  return (
    <section className="w-full bg-white py-10 lg:py-24" id="final-cta">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12 flex flex-col gap-10">
        
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (UNTOUCHED - hidden lg:flex)                              */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex relative overflow-hidden rounded-[32px] bg-[#071126] p-12 lg:p-14 shadow-2xl border border-slate-800/70 flex-row items-center justify-between gap-10">
          
          {/* Ambient Top Glow */}
          <div className="absolute -top-16 -right-16 w-[480px] h-[480px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

          {/* Left Text Content & Actions */}
          <div className="relative z-10 flex flex-col items-start gap-4 max-w-xl text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] tracking-tight text-white">
              Proof you can <br />
              check for yourself.
            </h2>

            <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-400 max-w-[460px] mt-1">
              Consent state, evidence type, metric definition, measurement period and limitations
              travel with every claim — or the claim does not publish.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                href="#book-demo"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-slate-900 shadow-md hover:bg-slate-100 transition"
              >
                <span className="text-slate-900 font-semibold">Book a demo</span>
              </Link>

              <Link
                href="#create-account"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-700/80 bg-transparent px-6 text-center text-xs sm:text-sm font-semibold !text-white shadow-sm transition hover:bg-white/10"
              >
                <span className="text-white font-semibold">Create account</span>
              </Link>
            </div>
          </div>

          {/* Right Side Image Container defc9d30beecb739276f65412a2589f6db79ce48.png */}
          <div className="relative z-10 w-full max-w-[540px] shrink-0">
            <img
              src="/images/customer-stories/cs5.png"
              alt="Proof you can check for yourself"
              className="w-full h-auto object-cover rounded-2xl block border border-slate-800/80 shadow-xl"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787833726341.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative overflow-hidden rounded-[24px] bg-[#0A132C] p-6 sm:p-8 shadow-xl border border-slate-800 text-left">
          
          {/* Ambient Top Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl font-extrabold leading-snug text-white mb-2 relative z-10">
            Proof you can<br />
            check for yourself.
          </h2>

          {/* Subtitle */}
          <p className="text-xs font-normal leading-relaxed text-slate-400 mb-5 relative z-10">
            Consent state, evidence type, metric definition, measurement period and limitations travel with every claim — or the claim does not publish.
          </p>

          {/* 2 Buttons Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4 relative z-10">
            <Link
              href="#book-demo"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-5 text-center text-xs font-semibold !text-slate-900 shadow-sm"
            >
              <span className="text-slate-900 font-semibold">Book a demo</span>
            </Link>

            <Link
              href="#create-account"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/80 bg-transparent px-5 text-center text-xs font-semibold !text-white"
            >
              <span className="text-white font-semibold">Create account</span>
            </Link>
          </div>

          {/* Sub-links */}
          <div className="text-xs text-blue-300 font-normal flex items-center gap-1.5 flex-wrap mb-6 relative z-10">
            <Link href="/resource-center" className="underline hover:text-white transition">Resource Center</Link>
            <span>·</span>
            <Link href="/reports-and-insights" className="underline hover:text-white transition">Reports &amp; Insights</Link>
            <span>·</span>
            <Link href="/pricing-and-plans" className="underline hover:text-white transition">Pricing</Link>
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
                    {item.route}
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
            Consented, evidence-backed customer proof.
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
            Every story carries its evidence label, measurement period, methodology link and limitations — published only when consent and verification exist.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-8">
            <Link
              href="#book-demo"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-[#1D60EB] shadow-md hover:bg-slate-50 transition"
            >
              <span className="text-[#1D60EB] font-semibold">Book a demo</span>
            </Link>

            <Link
              href="#create-account"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-200/60 bg-transparent px-6 text-center text-sm font-semibold !text-white hover:bg-white/10 transition"
            >
              <span className="text-white font-semibold">Create account</span>
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
