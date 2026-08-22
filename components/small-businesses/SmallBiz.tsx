"use client";

import Image from "next/image";

export default function SmallBiz() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(420px,539px)] lg:items-center lg:gap-10 lg:px-14 lg:py-20">
        {/* Content */}
        <div className="flex w-full max-w-[660px] flex-col items-start gap-3.5 lg:pl-4">
          {/* Eyebrow */}
          <div className="relative flex h-4 items-center">
            <div className="h-px w-6 bg-blue-600 opacity-70" />

            <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
              For small businesses
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
            Keep billing organized as{" "}
            <span className="text-blue-600">
              the business grows.
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-[650px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
            Bring customer billing records, invoices, schedules, delivery,
            payment visibility, outstanding balances, reminders, approvals and
            reporting into a clearer operating model — with controls you can
            add as your team and billing complexity increase.
          </p>

          {/* Buttons */}
          <div className="mt-3 flex w-full flex-wrap gap-2.5">
            <button
              type="button"
              className="min-h-11 rounded-full bg-blue-600 px-5 text-sm font-semibold leading-6 text-white shadow-[0px_6px_16px_0px_rgba(31,111,235,0.24)] transition hover:bg-blue-700"
            >
              See how it works
            </button>

            <button
              type="button"
              className="min-h-11 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold leading-6 text-gray-900 transition hover:bg-gray-50"
            >
              View Pricing & Plans
            </button>

            <button
              type="button"
              className="min-h-11 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold leading-6 text-gray-900 transition hover:bg-gray-50"
            >
              Create account
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-2xl lg:justify-self-end">
          <Image
            src="/images/small-businesses/small-businesses.png"
            alt="Small business billing management"
            width={539}
            height={387}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}