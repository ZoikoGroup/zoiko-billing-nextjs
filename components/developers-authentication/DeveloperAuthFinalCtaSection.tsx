'use client';

import Link from "next/link";

interface AuthRouteIntentItem {
  label: string;
  target: string;
  href: string;
}

const authRouteIntents: AuthRouteIntentItem[] = [
  { label: "Establish access", target: "Access setup journey", href: "#setup-journey" },
  { label: "Scope permissions", target: "Least-privilege model", href: "#permissions" },
  { label: "Manage credentials", target: "Credential lifecycle", href: "#credential-lifecycle" },
  { label: "Security review", target: "Audit & evidence", href: "#audit-evidence" },
  { label: "Implementation help", target: "Build an Integration", href: "#build-integration" },
];

export default function DeveloperAuthFinalCtaSection() {
  return (
    <section className="w-full bg-white py-10 lg:py-16" id="final-cta">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8 lg:px-12 flex flex-col gap-10">
        
        {/* ========================================================================= */}
        {/* DESKTOP VERSION (hidden lg:flex - UNTOUCHED & EXCLUSIVE FOR DESKTOP)      */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex relative overflow-hidden rounded-[28px] bg-[#0A132C] p-10 lg:p-14 shadow-2xl border border-slate-800/80 flex-row items-center justify-between gap-10">
          
          {/* Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Left Text Content & Buttons */}
          <div className="relative z-10 flex flex-col items-start gap-4 max-w-xl text-left">
            <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[38px]">
              Ready to establish <br />
              governed API access?
            </h2>

            <p className="text-sm font-normal leading-relaxed text-slate-400 sm:text-base max-w-[460px] mt-1">
              Confirm the supported authentication method, the minimum permissions your
              integration needs, and the environment you intend to use before making production
              requests.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                href="#access-requirements"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-sm font-semibold !text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                <span className="text-slate-900 font-semibold">View access requirements</span>
              </Link>

              <Link
                href="/developers-api-documentation"
                className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-6 text-center text-sm font-semibold !text-white shadow-sm transition hover:bg-white/10 hover:border-white"
              >
                <span className="text-white font-semibold">API Documentation</span>
              </Link>
            </div>
          </div>

          {/* Right Side Image Container da7.png */}
          <div className="relative z-10 w-full max-w-[540px] shrink-0">
            <img
              src="/images/devolpers-authentication/da7.png"
              alt="Ready to establish governed API access?"
              className="w-full h-auto object-cover rounded-2xl block border border-slate-800 shadow-lg"
            />
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE VERSION (MATCHING REFERENCE media_1787663900799.png - block lg:hidden) */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative overflow-hidden rounded-[24px] bg-[#0A132C] p-6 sm:p-8 shadow-xl border border-slate-800 text-left">
          
          {/* Ambient Top Glow */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />

          {/* Headline */}
          <h2 className="text-xl sm:text-2xl font-extrabold leading-snug text-white mb-2 relative z-10">
            Ready to establish<br />
            governed API access?
          </h2>

          {/* Subtitle */}
          <p className="text-xs font-normal leading-relaxed text-slate-400 mb-5 relative z-10">
            Confirm the supported authentication method, the minimum permissions your integration needs, and the environment you intend to use before making production requests.
          </p>

          {/* 3 Buttons Row */}
          <div className="flex flex-wrap items-center gap-2 mb-6 relative z-10">
            <Link
              href="#access-requirements"
              className="inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-center text-xs font-semibold !text-slate-900 shadow-sm"
            >
              <span className="text-slate-900 font-semibold">View access requirements</span>
            </Link>

            <Link
              href="/developers-api-documentation"
              className="inline-flex min-h-9 items-center justify-center rounded-full border border-white/80 bg-transparent px-4 text-center text-xs font-semibold !text-white"
            >
              <span className="text-white font-semibold">API Documentation</span>
            </Link>

            <Link
              href="#sandbox"
              className="inline-flex min-h-9 items-center justify-center rounded-full border border-white/80 bg-transparent px-4 text-center text-xs font-semibold !text-white"
            >
              <span className="text-white font-semibold">Developer Sandbox</span>
            </Link>
          </div>

          {/* Route by intent Box */}
          <div className="rounded-2xl bg-[#070D1E]/70 border border-slate-800 p-4 sm:p-5 relative z-10 text-xs text-slate-300">
            <div className="text-xs font-bold text-slate-200 mb-3">
              Route by intent
            </div>

            <div className="divide-y divide-slate-800/80">
              {authRouteIntents.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between gap-3">
                  <span className="text-slate-400 text-xs font-normal">{item.label}</span>
                  <Link href={item.href} className="font-bold text-white text-xs text-right hover:text-blue-400 transition">
                    {item.target}
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
            Identity proved. Permissions decided separately.
          </h2>

          <p className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
            Credential lifecycle, environment boundary and access evidence stay legible from setup through revocation.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6 sm:mb-8">
            <Link
              href="#access-requirements"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-center text-xs sm:text-sm font-semibold !text-[#1D60EB] shadow-md hover:bg-slate-50 transition"
            >
              <span className="text-[#1D60EB] font-semibold">View access requirements</span>
            </Link>

            <Link
              href="#ui-contract"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-200/60 bg-transparent px-6 text-center text-sm font-semibold !text-white hover:bg-white/10 transition"
            >
              <span className="text-white font-semibold">Credential contract</span>
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
