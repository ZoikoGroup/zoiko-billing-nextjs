import { ChevronDown } from "lucide-react";

import { SectionIntro } from "./shared";

const terms = [
  { label: "Renewal price", value: "Confirmed in offer terms" },
  { label: "Billing frequency", value: "Annual" },
  { label: "Auto-renew conditions", value: "Confirmed in offer terms, if applicable" },
  { label: "Tax and fees", value: "Confirmed in offer terms" },
  { label: "Limitations", value: "Confirmed in offer terms" },
  { label: "Offer dates and time zone", value: "27–30 Nov 2026" },
  { label: "Supported markets", value: "Confirmed in offer terms" },
  { label: "Customer support route", value: "Confirmed in offer terms" },
];

export default function OfferTerms() {
  return (
    <section className="mx-auto w-full max-w-[1140px] px-5 pt-20 sm:px-6 lg:pt-28">
      <SectionIntro title="Terms you should know" intro="Every condition is shown before you commit." />

      <dl className="mt-6 grid gap-px border-y-[24px] border-[#163a5f] bg-[#163a5f] outline outline-1 outline-[#163a5f] md:grid-cols-2">
        {terms.map((t) => (
          <div
            key={t.label}
            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 bg-[#0c2340] px-6 py-5"
          >
            <dt className="text-base leading-6 text-white">{t.label}</dt>
            <dd className="text-base leading-6 text-[#c5d5ea]">{t.value}</dd>
          </div>
        ))}
      </dl>

      <details className="group mt-2.5 bg-[#0c2340] outline outline-1 outline-offset-[-1px] outline-[#163a5f]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-base font-semibold leading-6 text-white [&::-webkit-details-marker]:hidden">
          What happens if the offer isn&apos;t live for you
          <ChevronDown aria-hidden className="size-4 shrink-0 transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-6 pb-5 text-base leading-7 text-[#c5d5ea]">
          If the offer window has closed, the offer isn&apos;t available in your market, or your account isn&apos;t
          eligible, standard pricing applies. No saving is applied unless it is confirmed in your offer terms before
          you commit.
        </div>
      </details>
    </section>
  );
}
