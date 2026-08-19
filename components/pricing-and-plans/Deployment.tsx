"use client";

import Image from "next/image";
import Link from "next/link";

export default function Deployment() {
  const standaloneItems = [
    "Direct integrations with approved providers",
    "Independent account and role administration",
    "Its own contracting and commercial terms",
    "No dependency on other Zoiko products",
  ];

  const zoikoOneItems = [
    "Connected products confirmed by registry, not assumed",
    "Shared identity, data, and workflow surfaces",
    "Suite-level packaging and commercial terms",
    "Suite-level administration and governance",
  ];

  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                04
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Deployment model
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Use Zoiko Billing independently or as part of Zoiko One.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              This is a deployment decision, not a pricing tier. Standalone is
              a complete product, and Zoiko One is not included in a standalone
              plan.
            </p>
          </div>

          {/* Deployment cards */}
          <div className="grid w-full grid-cols-1 gap-5 pt-3.5 lg:grid-cols-2">
            {/* Standalone */}
            <div className="flex w-full flex-col items-start gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-6">
              <h3 className="w-full text-base font-bold leading-7 text-slate-900">
                Zoiko Billing — standalone
              </h3>

              <p className="w-full text-sm font-normal leading-5 text-slate-600">
                Billing runs as its own SaaS product with its own account,
                admin model, and commercial terms.
              </p>

              <ul className="w-full list-disc space-y-2 pl-5 pt-1 text-sm font-normal leading-5 text-slate-600">
                {standaloneItems.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Zoiko One */}
            <div className="flex w-full flex-col items-start gap-3 rounded-2xl border border-gray-200 bg-gray-100 px-5 py-6 sm:px-6">
              <h3 className="w-full text-base font-bold leading-7 text-slate-900">
                Zoiko Billing — within Zoiko One
              </h3>

              <p className="w-full text-sm font-normal leading-5 text-slate-600">
                Billing operates as an integrated component of the suite, with
                shared identity and connected workflows.
              </p>

              <ul className="w-full list-disc space-y-2 pl-5 pt-1 text-sm font-normal leading-5 text-slate-600">
                {zoikoOneItems.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deployment image */}
          <div className="w-full pt-3">
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
              <Image
                src="/images/pricing-and-plans/deploy.png"
                alt="Zoiko Billing deployment options"
                width={1264}
                height={621}
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center pt-2 sm:pt-4">
            <Link
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold leading-6 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] outline outline-1 outline-offset-[-1px] outline-blue-600 transition hover:bg-blue-700"
            >
              Compare deployment options
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}