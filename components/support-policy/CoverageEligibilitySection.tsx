import Link from "next/link";

export default function CoverageEligibilitySection() {
  return (
    <section
      className="w-full border-t border-slate-100 bg-white py-12 lg:py-24"
      id="coverage-eligibility"
    >
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 text-center sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          COVERAGE &amp; ELIGIBILITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 max-w-3xl !text-2xl !font-bold !leading-[1.2] !tracking-[-0.02em] text-slate-900 sm:!text-3xl lg:!text-[36px] xl:!text-[38px]">
          Coverage is a condition, not a{" "}
          <br className="hidden sm:inline" /> promise.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-sm font-normal leading-relaxed text-slate-500 sm:text-[15px]">
          Plan entitlement is resolved at runtime from the commercial source
          rather than hard-coded into policy text that would drift.
        </p>

        {/* 2 Grid Cards */}
        <div className="mt-8 grid w-full max-w-[1240px] grid-cols-1 items-stretch gap-6 text-left sm:gap-8 lg:mt-14 md:grid-cols-2">
          {/* Within Scope Card */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-200/90 bg-white shadow-sm">
            <div className="border-b border-emerald-200/80 bg-emerald-50 p-3.5 px-5 text-xs font-bold text-emerald-900 sm:p-4 sm:px-6 sm:text-sm">
              Within scope, per approved policy
            </div>

            <div className="flex-1 space-y-3 p-5 text-xs text-slate-600 sm:space-y-4 sm:p-8 sm:text-sm">
              <ul className="list-disc space-y-2.5 pl-4 sm:space-y-3">
                <li>
                  General product usage questions, routed to{" "}
                  <Link
                    href="/resource-center"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    Help Center
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/documentation"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    Documentation
                  </Link>{" "}
                  first
                </li>

                <li>
                  Account-specific behavior that differs from documented
                  behavior
                </li>

                <li>
                  Account and subscription billing matters via{" "}
                  <Link
                    href="/billing-support"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    Billing Support
                  </Link>
                </li>

                <li>
                  Integration diagnostics via{" "}
                  <Link
                    href="/integration-support"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    Integration Support
                  </Link>
                </li>

                <li>
                  Access and identity issues via{" "}
                  <Link
                    href="/account-access"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    Account Access
                  </Link>
                </li>

                <li>
                  Implementation questions via{" "}
                  <Link
                    href="/implementation-guidance"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    Implementation Guidance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Outside Scope Card */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-red-200/90 bg-white shadow-sm">
            <div className="border-b border-red-200/80 bg-red-50 p-3.5 px-5 text-xs font-bold text-red-900 sm:p-4 sm:px-6 sm:text-sm">
              Outside scope — with a route
            </div>

            <div className="flex-1 space-y-3 p-5 text-xs text-slate-600 sm:space-y-4 sm:p-8 sm:text-sm">
              <ul className="list-disc space-y-2.5 pl-4 sm:space-y-3">
                <li>
                  Unsupported or unapproved product or integration use —
                  stated neutrally, with an evaluation path where one exists
                </li>

                <li>
                  Professional legal, accounting or tax advice —{" "}
                  <span className="font-bold text-slate-900">
                    support does not replace a qualified professional
                  </span>
                </li>

                <li>
                  Third-party product operation — the boundary is explained{" "}
                  <span className="font-bold text-slate-900">
                    without disclaiming Zoiko-owned integration behavior
                  </span>
                </li>

                <li>
                  Security vulnerability disclosure —{" "}
                  <Link
                    href="/responsible-disclosure"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    Responsible Disclosure
                  </Link>
                </li>

                <li>
                  Live service incidents —{" "}
                  <Link
                    href="/system-status"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    System Status
                  </Link>
                </li>

                <li>
                  Abuse or prohibited use —{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-bold !text-blue-600 hover:underline"
                  >
                    Acceptable Use
                  </Link>
                  , without exposing enforcement internals
                </li>

                <li>
                  Requests requiring unsupported authorization —{" "}
                  <span className="font-bold text-slate-900">
                    no support bypass
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile-only Amber Callout */}
        <div className="mt-4 block w-full max-w-[1240px] text-left lg:hidden">
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs font-normal leading-relaxed text-amber-950">
            <span className="font-bold text-amber-900">
              The third-party boundary is stated carefully on purpose.
            </span>{" "}
            &quot;We do not support third-party products&quot; is easy to write
            and quietly disclaims Zoiko&apos;s own integration behavior along
            with it. The exclusion covers how the other product operates — not
            how our side of the interface behaves.
          </div>
        </div>
      </div>
    </section>
  );
}