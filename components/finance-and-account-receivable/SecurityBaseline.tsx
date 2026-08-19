"use client";

import React from "react";
import Link from "next/link";

const controls = [
  {
    title: "Least privilege, enforced server-side",
    description:
      "Sensitive finance actions are permissioned at the service boundary, not in the interface.",
  },
  {
    title: "Governed history",
    description:
      "Material billing and AR actions produce history and evidence per the product architecture.",
  },
  {
    title: "Minimized data",
    description:
      "Customer, contact and payment-reference data is purpose-limited.",
  },
  {
    title: "Secrets stay out",
    description:
      "No tokens, credentials, payment secrets or bank credentials appear in marketing forms or analytics.",
  },
  {
    title: "Controlled exports",
    description:
      "Permission plus requester, purpose and currentness, with secure delivery where applicable.",
  },
];

export default function SecurityBaseline() {
  return (
    <section className="w-full border-t border-gray-200 bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 pb-px sm:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-6 w-full max-w-[400px] items-center">
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Security, privacy &amp; control baseline
          </span>

          <span className="ml-4 h-px w-6 shrink-0 bg-blue-600 opacity-50" />
        </div>

        {/* Heading */}
        <div className="w-full pb-[0.61px]">
          <h2 className="m-0 text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
            Baseline protections are not a premium tier.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686.38px]">
          <p className="m-0 text-base font-normal leading-6 text-slate-600">
            Privacy, security and accessibility are not weakened on lower plans
            to manufacture a reason to upgrade.
          </p>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-stretch gap-5 pt-3.5 pb-2 lg:flex-row">
          {/* Control Baseline Card */}
          <div className="flex-1 rounded-2xl bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 sm:px-6">
            <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
              Control baseline
            </h3>

            <div className="mt-1">
              {controls.map((control, index) => (
                <div
                  key={control.title}
                  className={`flex items-start gap-3.5 py-3.5 ${
                    index !== 0 ? "border-t border-slate-900/10" : ""
                  }`}
                >
                  {/* Number */}
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-white outline outline-1 outline-offset-[-1px] outline-gray-200">
                    <span className="text-xs font-bold leading-5 text-slate-900">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h4 className="m-0 text-sm font-semibold leading-6 text-slate-900">
                      {control.title}
                    </h4>

                    <p className="m-0 text-xs font-normal leading-5 text-slate-600">
                      {control.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-4 lg:pb-32">
            {/* Accessibility */}
            <div className="rounded-2xl bg-gray-100 px-5 pb-9 pt-6 outline outline-1 outline-offset-[-1px] outline-emerald-200 sm:px-6">
              <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
                Accessibility target
              </h3>

              <p className="m-0 mt-3 text-sm font-normal leading-5 text-slate-600">
                WCAG 2.2 AA implementation target across tables, filters,
                dialogs and status semantics. Status is conveyed by text and
                shape, never by color alone. Charts and lineage carry a text
                summary and an accessible data table. Content reflows at 200%
                zoom and 320 CSS pixels without losing the amount, state, or
                the definition beside it.
              </p>
            </div>

            {/* Diligence */}
            <div className="rounded-2xl bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 sm:px-6">
              <h3 className="m-0 text-base font-bold leading-7 text-slate-900">
                Diligence without a sales call
              </h3>

              <p className="m-0 mt-3 text-sm font-normal leading-5 text-slate-600">
                Trust, Security, Privacy, Accessibility and Legal resources are
                public. Booking a demo is for commercial and solution fit, not
                the only route to evidence.
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-2 pt-3">
                <Link
                  href="/trust"
                  className="inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold leading-5 text-slate-900 outline outline-1 outline-offset-[-1px] outline-gray-200 transition hover:bg-gray-50"
                >
                  Trust center
                </Link>

                <Link
                  href="/privacy"
                  className="inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold leading-5 text-slate-900 outline outline-1 outline-offset-[-1px] outline-gray-200 transition hover:bg-gray-50"
                >
                  Privacy
                </Link>

                <Link
                  href="/accessibility"
                  className="inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold leading-5 text-slate-900 outline outline-1 outline-offset-[-1px] outline-gray-200 transition hover:bg-gray-50"
                >
                  Accessibility
                </Link>

                <Link
                  href="/security"
                  className="inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold leading-5 text-slate-900 outline outline-1 outline-offset-[-1px] outline-gray-200 transition hover:bg-gray-50"
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}