"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { DISPLAY, ExploreButton } from "./shared";

type Billing = "monthly" | "yearly";

const DISCOUNT = 0.25;

/** List prices mirror components/pricing/PricingCards.tsx (yearly = per-month billed annually). */
const plans = [
  { name: "Essentials", monthly: 29, yearly: 23 },
  { name: "Professional", monthly: 79, yearly: 63, popular: true },
  { name: "Business", monthly: 249, yearly: 199 },
] as const;

const included = [
  "Billing and invoicing",
  "Collections follow-up",
  "Revenue operations in one view",
  "Invoice, review and follow-up workflow",
];

const money = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

function OffBadge({ light }: { light?: boolean }) {
  return (
    <div
      aria-hidden
      className={`absolute -right-3 -top-6 flex size-[72px] rotate-[-10deg] flex-col items-center justify-center rounded-full shadow-[0_8px_18px_rgba(8,35,63,0.35)] ring-4 ${
        light ? "bg-white ring-white/60" : "bg-[#00b8d6] ring-[#00b8d6]/40"
      } text-[#082f49] ${DISPLAY}`}
    >
      <span className="text-[28px] font-bold leading-6">25%</span>
      <span className="text-sm font-bold uppercase leading-4 tracking-widest">Off</span>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-3 text-sm leading-6">
      <span className="text-[#a9bfdc]">{label}</span>
      <span className={`text-right font-medium ${accent ? "text-[#6fe3f2]" : "text-white"}`}>{value}</span>
    </div>
  );
}

function Included() {
  return (
    <div className="flex flex-col gap-2.5">
      <h4 className="text-xs font-semibold tracking-wide text-[#a9bfdc]">Included in this plan</h4>
      <ul className="flex flex-col gap-2.5">
        {included.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-5 text-[#e9eef5]">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-[#00b8d6]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OfferPricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const billingLabel = billing === "monthly" ? "Monthly" : "Annual";

  return (
    <section aria-labelledby="bf-offer-title" className="mx-auto w-full max-w-[1140px] px-5 pt-16 sm:px-6 lg:pt-28">
      {/* Offer banner */}
      <div className="relative flex flex-col items-center gap-6 overflow-hidden bg-[#00b8d6] px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left lg:pr-24">
        <span aria-hidden className="absolute -top-3.5 right-[10%] size-11 rounded-full border-[10px] border-[#082f49] opacity-90" />
        <span aria-hidden className="absolute -bottom-14 -right-6 size-28 rounded-full border-[18px] border-[#2ccce6] opacity-90" />
        <div
          className={`flex size-28 shrink-0 rotate-[-10deg] flex-col items-center justify-center rounded-full bg-[#082f49] shadow-[0_12px_26px_rgba(8,35,63,0.3)] ${DISPLAY}`}
        >
          <span className="text-5xl font-bold leading-9 text-[#00b8d6]">25%</span>
          <span className="text-2xl font-bold uppercase leading-5 tracking-widest text-white">Off</span>
        </div>
        <div className="relative">
          <h2
            id="bf-offer-title"
            className={`!mb-0 !text-4xl !font-bold uppercase !leading-10 !tracking-wide text-[#082f49] lg:!text-5xl ${DISPLAY}`}
          >
            Special Offer – Get 25% OFF on All Plans!
          </h2>
          <p className="!mb-0 !mt-3 text-base font-medium !leading-6 !text-[#082f49]">
            25% off applies to Essentials, Professional and Business. Enterprise is priced by quote.
          </p>
        </div>
      </div>

      {/* Billing toggle */}
      <div className="mt-6 flex justify-center">
        <div
          role="radiogroup"
          aria-label="Billing period"
          className="inline-flex gap-1 rounded-full bg-[#0c2340] p-[5px] outline outline-1 outline-offset-[-1px] outline-[#2a4a75]"
        >
          {(["monthly", "yearly"] as const).map((option) => {
            const active = billing === option;
            return (
              <button
                key={option}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setBilling(option)}
                className={`min-h-11 min-w-28 rounded-full px-8 py-3.5 text-base font-semibold capitalize leading-4 transition-colors ${
                  active ? "bg-[#00b8d6] text-[#082f49]" : "text-[#e9eef5] hover:text-white"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Plan cards */}
      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-5">
        {plans.map((plan) => {
          const popular = "popular" in plan && plan.popular;
          const list = plan[billing];
          const saving = list * DISCOUNT;
          const price = list - saving;

          return (
            <article
              key={plan.name}
              className={`relative flex flex-col gap-2 px-6 pb-7 pt-8 ${
                popular
                  ? "bg-[#0f2d55] shadow-[0_24px_40px_rgba(1,8,20,0.45)] outline outline-2 outline-[#00b8d6]"
                  : "bg-[#0c2340] outline outline-1 outline-offset-[-1px] outline-[#163a5f]"
              }`}
            >
              {popular && (
                <span
                  className={`absolute -top-3.5 left-6 rounded-md bg-[#00b8d6] px-4 py-1 text-sm font-bold uppercase tracking-[0.12em] text-[#082f49] ${DISPLAY}`}
                >
                  Most popular
                </span>
              )}
              <OffBadge light={popular} />

              <h3 className={`!mb-0 pr-10 text-3xl font-bold uppercase !leading-10 tracking-wide text-white ${DISPLAY}`}>
                {plan.name}
              </h3>

              <p className="!mb-0 pt-3.5 text-lg !leading-7 !text-[#8aa3c4] line-through">
                <span className="sr-only">Was </span>
                {money(list)}/month
              </p>
              <div>
                <p className={`!mb-0 text-5xl font-bold !leading-[52px] ${popular ? "!text-[#00b8d6]" : "!text-white"}`}>
                  {money(price)}
                </p>
                <p className="!mb-0 text-base !leading-6 !text-[#a9bfdc]">
                  /month{billing === "yearly" && ", billed annually"}
                </p>
              </div>
              <p className="!mb-0 pt-1 text-sm font-semibold !leading-6 !text-[#6fe3f2]">
                25% OFF · You save {money(saving)}/month
              </p>

              <div className="mt-4 flex flex-col gap-2.5 border-t border-[#163a5f] pt-4">
                <h4 className="text-xs font-semibold tracking-wide text-[#a9bfdc]">Plan details</h4>
                <div className="flex flex-col gap-1.5">
                  <Row label="Original price" value={`${money(list)}/month`} />
                  <Row label="Discount (25%)" value={`−${money(saving)}/month`} accent />
                </div>
                <div className="flex flex-col gap-1.5 border-t border-[#163a5f] pt-2.5">
                  <div className="flex justify-between gap-3 text-sm font-semibold leading-6 text-white">
                    <span>You pay</span>
                    <span>{money(price)}/month</span>
                  </div>
                  <Row label="Billing" value={billingLabel} />
                </div>
              </div>

              <div className="mb-8 mt-4">
                <Included />
              </div>

              <ExploreButton
                href="/create-account"
                className={`mt-auto w-full ${
                  popular ? "" : "!bg-transparent !text-white outline outline-1 outline-[#2a4a75] hover:!bg-white/5"
                }`}
              />
            </article>
          );
        })}

        {/* Enterprise */}
        <article className="relative flex flex-col gap-2 bg-[#0c2340] px-6 pb-7 pt-8 outline outline-1 outline-offset-[-1px] outline-[#163a5f]">
          <h3 className={`!mb-0 text-3xl font-bold uppercase !leading-10 tracking-wide text-white ${DISPLAY}`}>
            Enterprise
          </h3>
          <p className="!mb-0 pt-14 text-4xl font-bold !leading-10 !text-white">Custom Pricing</p>
          <p className="!mb-0 text-sm !leading-6 !text-[#a9bfdc]">Contact for a quote</p>

          <div className="mt-6 flex flex-col gap-2.5 border-t border-[#163a5f] pt-4">
            <h4 className="text-xs font-semibold tracking-wide text-[#a9bfdc]">Plan details</h4>
            <div className="flex flex-col gap-1.5">
              <Row label="Pricing" value="Custom" />
              <Row label="Quote" value="On request" />
            </div>
          </div>

          <div className="mb-8 mt-4">
            <Included />
          </div>

          <ExploreButton
            href="/sales-enquiries"
            className="mt-auto w-full !bg-transparent !text-white outline outline-1 outline-[#2a4a75] hover:!bg-white/5"
          >
            Contact for a quote
          </ExploreButton>
        </article>
      </div>
    </section>
  );
}
