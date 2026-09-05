"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SupportImplementation() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
        <div className="flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
          {/* Section label */}
          <div className="flex h-6 items-center gap-2 sm:gap-3">
            <div className="rounded-[5px] border border-blue-100 bg-gray-100 px-1.5 py-0.5">
              <div className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                10
              </div>
            </div>

            <div className="text-xs font-bold uppercase leading-4 tracking-[0.2em] text-slate-500">
              Support, onboarding &amp; implementation
            </div>

            <div className="hidden h-px w-6 bg-slate-500 opacity-50 sm:block" />
          </div>

          {/* Heading */}
          <div className="w-full pb-0.5">
            <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
              Four different things, kept separate.
            </h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-[666px] pb-0.5">
            <p className="text-sm font-normal leading-5 text-slate-600 sm:text-base sm:leading-6">
              Documentation, customer support, implementation assistance, and
              contracted service scope are distinct. None of them is described
              as &quot;premium support&quot; without a stated scope.
            </p>
          </div>

          {/* Main image */}
          <div className="mt-0.5 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
            <Image
              src="/images/pricing-and-plans/support.png"
              alt="Zoiko Billing support, onboarding and implementation"
              width={1264}
              height={631}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* CTA cards */}
          <div className="flex w-full flex-col gap-5 pt-1.5 lg:flex-row">
            {/* Already a customer */}
            <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-6 sm:px-6 sm:pb-11">
              <div className="flex w-full flex-col items-start">
                <h3 className="text-base font-bold leading-7 text-slate-900">
                  Already a customer?
                </h3>
              </div>

              <div className="w-full pb-0.5">
                <p className="text-sm font-normal leading-5 text-slate-600">
                  Go straight to your account. There is no sales form between
                  you and a billing question.
                </p>
              </div>

              <div className="flex w-full flex-wrap items-start gap-2.5 pt-1">
                <Link
                  href="/sign-in"
                  className="!inline-flex !h-9 !items-center !justify-center !rounded-full !border !border-gray-300 !bg-white !px-4 !text-sm !font-semibold !leading-5 !text-slate-900 !no-underline shadow-sm transition hover:!border-gray-400 hover:!bg-gray-100"
                >
                  Sign in
                </Link>

                <Link
                  href="/billing-support"
                  className="!inline-flex !h-9 !items-center !justify-center !rounded-full !border !border-gray-300 !bg-white !px-4 !text-sm !font-semibold !leading-5 !text-slate-900 !no-underline shadow-sm transition hover:!border-gray-400 hover:!bg-gray-100"
                >
                  Billing support
                </Link>
              </div>
            </div>

            {/* Implementation */}
            <div className="flex flex-1 flex-col items-start gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] sm:px-6">
              <div className="flex w-full flex-col items-start">
                <h3 className="text-base font-bold leading-7 text-slate-900">
                  Evaluating implementation scope?
                </h3>
              </div>

              <div className="flex w-full flex-col items-start">
                <p className="text-sm font-normal leading-5 text-slate-600">
                  Implementation questions are commercial questions. A short
                  conversation resolves them faster than a form.
                </p>
              </div>

              <div className="flex w-full flex-col items-start pt-1">
                <Link
                  href="/book-demo"
                  className="!inline-flex !h-9 !items-center !justify-center !rounded-full !border !border-blue-600 !bg-blue-600 !px-4 !text-sm !font-semibold !leading-5 !text-white !no-underline !shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] transition hover:!border-blue-700 hover:!bg-blue-700"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}