"use client";

import React from "react";
import Link from "next/link";

const coreProtections = [
  "Core security controls",
  "Privacy rights",
  "Consent controls",
  "Accessible public experience",
  "Accessible account experience",
  "Data-protection obligations",
  "Lawful-use controls",
];

const enterpriseDifferences = [
  "Admin scale",
  "SSO & identity integration",
  "Evidence packages",
  "Governance controls",
  "Deployment options",
  "Audit & export",
  "Contractual support",
  "Assurance",
];

const procurementRoutes = [
  "Trust",
  "Privacy",
  "Accessibility",
  "Security",
  "DPA",
];

function Tag({
  children,
  variant = "green",
}: {
  children: React.ReactNode;
  variant?: "green" | "gray";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-5 ${
        variant === "green"
          ? "border-green-200 bg-gray-100 text-green-700"
          : "border-gray-200 bg-gray-50 text-slate-600"
      }`}
    >
      {children}
    </span>
  );
}

export default function BaselineProtections() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                11
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Baseline protections
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              A lower-priced plan is not a less safe one.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px]">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Baseline protections are not removed to manufacture a premium
              tier. What enterprise plans add is administrative scale and
              evidence, not basic safety.
            </p>
          </div>

          {/* Protection cards */}
          <div className="flex w-full flex-col gap-5 pt-3.5 lg:flex-row">
            {/* Present in every plan */}
            <div className="flex flex-1 flex-col items-start gap-3.5 rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-6 sm:pb-9">
              <div className="w-full">
                <h3 className="text-base font-bold leading-7 text-slate-900">
                  Present in every plan
                </h3>
              </div>

              <div className="flex w-full flex-wrap gap-2">
                {coreProtections.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              <div className="w-full pt-0.5">
                <p className="text-sm font-normal leading-5 text-slate-600">
                  Essential accessible operation is never sold as a feature.
                </p>
              </div>
            </div>

            {/* Enterprise differences */}
            <div className="flex flex-1 flex-col items-start gap-3.5 rounded-2xl border border-gray-200 bg-gray-100 px-5 py-6 sm:px-6 sm:pb-16">
              <div className="w-full">
                <h3 className="text-base font-bold leading-7 text-slate-900">
                  Where enterprise legitimately differs
                </h3>
              </div>

              <div className="flex w-full flex-wrap gap-2">
                {enterpriseDifferences.map((item) => (
                  <Tag key={item} variant="gray">
                    {item}
                  </Tag>
                ))}
              </div>

              <div className="w-full pt-0.5">
                <p className="text-sm font-normal leading-5 text-slate-600">
                  Purchasing a plan does not by itself confer compliance or
                  certification.
                </p>
              </div>
            </div>
          </div>

          {/* Procurement routes */}
          <div className="flex w-full flex-col items-start gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-6 lg:flex-row lg:items-center">
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-bold leading-7 text-slate-900">
                Procurement routes stay open
              </h3>

              <p className="mt-2 text-sm font-normal leading-5 text-slate-600">
                Trust, Privacy, Accessibility, Security, DPA, Subprocessor, and
                Legal pages are public. None of them sits behind a sales gate.
              </p>
            </div>

            <div className="flex w-full flex-wrap gap-2 lg:w-auto lg:max-w-[520px] lg:justify-end">
              {procurementRoutes.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold leading-5 text-slate-900 transition hover:bg-gray-50"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}