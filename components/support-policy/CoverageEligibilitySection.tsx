import Link from "next/link";

export default function CoverageEligibilitySection() {
  return (
    <section className="w-full bg-white py-12 lg:py-24 border-t border-slate-100" id="coverage-eligibility">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          COVERAGE &amp; ELIGIBILITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          Coverage is a condition, not a promise.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Plan entitlement is resolved at runtime from the commercial source rather than hard-coded into
          policy text that would drift.
        </p>

        {/* 2 Grid Cards */}
        <div className="mt-8 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left items-stretch">
          
          {/* Within Scope Card */}
          <div className="rounded-2xl border border-emerald-200/90 bg-white shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="bg-emerald-50 text-emerald-900 font-bold text-xs sm:text-sm p-3.5 sm:p-4 px-5 sm:px-6 border-b border-emerald-200/80">
              Within scope, per approved policy
            </div>
            <div className="p-5 sm:p-8 space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600 flex-1">
              <ul className="space-y-2.5 sm:space-y-3 list-disc pl-4">
                <li>
                  General product usage questions, routed to{" "}
                  <Link href="/resource-center" className="text-blue-600 font-bold hover:underline">
                    Help Center
                  </Link>{" "}
                  and{" "}
                  <Link href="/documentation" className="text-blue-600 font-bold hover:underline">
                    Documentation
                  </Link>{" "}
                  first
                </li>
                <li>Account-specific behavior that differs from documented behavior</li>
                <li>
                  Account and subscription billing matters via{" "}
                  <span className="text-blue-600 font-bold">Billing Support</span>
                </li>
                <li>
                  Integration diagnostics via{" "}
                  <span className="text-blue-600 font-bold">Integration Support</span>
                </li>
                <li>
                  Access and identity issues via{" "}
                  <span className="text-blue-600 font-bold">Account Access</span>
                </li>
                <li>
                  Implementation questions via{" "}
                  <span className="text-blue-600 font-bold">Implementation Guidance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Outside Scope Card */}
          <div className="rounded-2xl border border-red-200/90 bg-white shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="bg-red-50 text-red-900 font-bold text-xs sm:text-sm p-3.5 sm:p-4 px-5 sm:px-6 border-b border-red-200/80">
              Outside scope — with a route
            </div>
            <div className="p-5 sm:p-8 space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600 flex-1">
              <ul className="space-y-2.5 sm:space-y-3 list-disc pl-4">
                <li>
                  Unsupported or unapproved product or integration use — stated neutrally, with an evaluation path where one exists
                </li>
                <li>
                  Professional legal, accounting or tax advice —{" "}
                  <span className="font-bold text-slate-900">support does not replace a qualified professional</span>
                </li>
                <li>
                  Third-party product operation — the boundary is explained{" "}
                  <span className="font-bold text-slate-900">without disclaiming Zoiko-owned integration behavior</span>
                </li>
                <li>Security vulnerability disclosure — Responsible Disclosure</li>
                <li>Live service incidents — System Status</li>
                <li>Abuse or prohibited use — Acceptable Use, without exposing enforcement internals</li>
                <li>
                  Requests requiring unsupported authorization —{" "}
                  <span className="font-bold text-slate-900">no support bypass</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE-ONLY AMBER CALLOUT BOX (block lg:hidden)                           */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-4 w-full max-w-[1240px] text-left">
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 font-normal leading-relaxed">
            <span className="font-bold text-amber-900">The third-party boundary is stated carefully on purpose.</span> &quot;We do not support third-party products&quot; is easy to write and quietly disclaims Zoiko&apos;s own integration behavior along with it. The exclusion covers how the other product operates — not how our side of the interface behaves.
          </div>
        </div>

      </div>
    </section>
  );
}
