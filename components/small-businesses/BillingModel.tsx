"use client";

import Image from "next/image";

export default function BillingModel() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-4 items-center">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            The billing operating model
          </span>
        </div>

        {/* Heading */}
        <div className="w-full pb-1">
          <h2 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
            Ten stages, kept simple — but not merged together.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            A simpler experience should mean fewer ambiguous states, not fewer
            truthful ones.
            <br className="hidden sm:block" />
            Issued, delivered, outstanding and paid stay separate facts.
          </p>
        </div>

        {/* Image */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/small-businesses/billing-model.png"
            alt="Billing operating model showing ten billing stages"
            width={1264}
            height={623}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}