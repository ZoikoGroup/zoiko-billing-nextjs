"use client";

import React, { useState } from "react";

const plans = [
  {
    name: "Essentials",
    description: "Small businesses and lean finance teams",
    monthlyPrice: "$29",
    annualPrice: "$23",
    monthlyBilling: "$29/mo billed monthly",
    annualBilling: "$23/mo billed annually · $276/yr",
    summary:
      "Create, send, collect and reconcile core invoices without operational complexity.",
    limits: [
      "3 users · 1 legal entity",
      "2,500 active customers",
      "1,000 invoices & credit notes / month",
      "5 currencies · 1 payment provider",
    ],
    sectionTitle: "Includes",
    features: [
      "One-time invoices & credit notes",
      "Payment links",
      "Balances & aging",
      "Standard reminders",
      "Basic reconciliation",
      "MFA & immutable audit trail",
    ],
    button: "Start free trial",
    note: "Trial uses Professional capabilities; convert to Essentials at any time.",
  },
  {
    name: "Professional",
    description: "Growing businesses with recurring revenue",
    monthlyPrice: "$79",
    annualPrice: "$63",
    monthlyBilling: "$79/mo billed monthly",
    annualBilling: "$63/mo billed annually · $756/yr",
    summary:
      "Automate recurring billing, collections, integrations and finance workflows.",
    limits: [
      "15 users · 3 legal entities",
      "25,000 active customers",
      "10,000 invoices & credit notes / month",
      "30 currencies · 3 payment providers",
    ],
    sectionTitle: "Everything in Essentials, plus",
    features: [
      "Subscriptions & proration",
      "Promotions",
      "Configurable dunning",
      "Automated reconciliation rules",
      "Custom roles",
      "Write API & webhooks",
      "1 sandbox",
    ],
    button: "Start 30-day free trial",
    note: "No card required to start.",
    popular: true,
  },
  {
    name: "Business",
    description: "Scaled finance and revenue operations",
    monthlyPrice: "$249",
    annualPrice: "$199",
    monthlyBilling: "$249/mo billed monthly",
    annualBilling: "$199/mo billed annually · $2,388/yr",
    summary:
      "Operate complex billing, usage models, advanced reconciliation, controls and consolidated reporting.",
    limits: [
      "50 users · 10 legal entities",
      "250,000 active customers",
      "100,000 invoices & credit notes / month",
      "All supported currencies · 10 payment providers",
    ],
    sectionTitle: "Everything in Professional, plus",
    features: [
      "Usage billing",
      "Tiered & volume pricing",
      "Included units",
      "Advanced matching",
      "Maker-checker approvals",
      "Consolidated multi-entity reports",
      "ERP & data warehouse integrations",
      "3 sandboxes",
    ],
    button: "Choose Business",
    note: "Need Business-only features for evaluation? Request guided access.",
  },
  {
    name: "Enterprise",
    description: "Large, regulated or complex organizations",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    monthlyBilling: "Monthly contract · negotiated",
    annualBilling: "Annual contract · negotiated",
    summary:
      "Contracted scale, enterprise identity and security, bespoke controls, SLA and deployment or commercial terms.",
    limits: [
      "Contracted users & entities",
      "Contracted customers & volumes",
      "Contracted APIs",
      "Contracted retention",
    ],
    sectionTitle: "Everything in Business, plus",
    features: [
      "SAML / OIDC SSO",
      "SCIM provisioning",
      "Contracted retention",
      "Dedicated security & compliance review",
      "Custom integrations",
      "SLA & commercial terms",
    ],
    button: "Talk to Sales",
    note: "No fake \"starting at\" price. Quote only after solution and volume qualification.",
  },
];

const currencies = ["USD", "GBP", "EUR", "CAD", "AUD"];

export default function PricingCards() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [currency, setCurrency] = useState("USD");

  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-10
          sm:px-8
          sm:py-12
          md:px-10
          md:py-14
          lg:px-14
          xl:px-20
        "
      >
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-5">

          {/* PRICING CONTROLS */}
          <div
            className="
              flex
              min-h-16
              w-full
              flex-col
              gap-4
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-4
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* MONTHLY / ANNUAL */}
            <div className="flex flex-wrap items-center gap-3">
              <div
                className="
                  flex
                  overflow-hidden
                  rounded-full
                  border
                  border-[#dfe5ee]
                  bg-[#f9fafb]
                "
              >
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`
                    px-4
                    py-2
                    text-xs
                    font-bold
                    leading-5
                    transition
                    ${
                      billing === "monthly"
                        ? "bg-blue-600 text-white"
                        : "bg-transparent text-[#5d7192]"
                    }
                  `}
                >
                  Monthly
                </button>

                <button
                  type="button"
                  onClick={() => setBilling("annual")}
                  className={`
                    px-4
                    py-2
                    text-xs
                    font-bold
                    leading-5
                    transition
                    ${
                      billing === "annual"
                        ? "bg-blue-600 text-white"
                        : "bg-transparent text-[#5d7192]"
                    }
                  `}
                >
                  Annual
                </button>
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-[#b8f0d0]
                  bg-[#f1fff7]
                  px-2.5
                  py-1
                  text-xs
                  font-bold
                  leading-5
                  text-[#16834d]
                "
              >
                Save ~20%
              </span>
            </div>

            {/* CURRENCY */}
            <div className="flex flex-wrap items-center gap-1.5">
              {currencies.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCurrency(item)}
                  className={`
                    rounded-md
                    border
                    px-2.5
                    py-1.5
                    text-xs
                    font-semibold
                    leading-5
                    transition
                    ${
                      currency === item
                        ? "border-blue-600 bg-[#f0f5ff] text-[#1f6feb]"
                        : "border-[#dfe5ee] bg-white text-[#5d7192]"
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* PRICING CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {plans.map((plan) => {
              const isAnnual = billing === "annual";

              const price = isAnnual
                ? plan.annualPrice
                : plan.monthlyPrice;

              const billingText = isAnnual
                ? plan.annualBilling
                : plan.monthlyBilling;

              return (
                <div
                  key={plan.name}
                  className={`
                    relative
                    flex
                    h-full
                    flex-col
                    rounded-xl
                    bg-white
                    px-5
                    py-5
                    ${
                      plan.popular
                        ? "border-2 border-blue-600 shadow-[0_6px_26px_rgba(31,111,235,0.14)]"
                        : "border border-[#dfe5ee] shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]"
                    }
                  `}
                >
                  {/* MOST POPULAR */}
                  {plan.popular && (
                    <div
                      className="
                        absolute
                        -top-2.5
                        left-1/2
                        -translate-x-1/2
                        rounded-full
                        bg-blue-600
                        px-2.5
                        py-1
                        text-[10px]
                        font-extrabold
                        uppercase
                        leading-4
                        tracking-wide
                        text-white
                      "
                    >
                      Most popular
                    </div>
                  )}

                  {/* PLAN NAME */}
                  <div className="pb-1">
                    <h3 className="!m-0 text-lg font-bold leading-7 text-[#091127]">
                      {plan.name}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <div className="min-h-[48px] pt-1.5 pb-4">
                    <p className="!m-0 text-xs font-normal leading-4 text-[#7890b2]">
                      {plan.description}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="pt-1">
                    <div className="flex items-end gap-1.5">
                      <span
                        className={`
                          font-extrabold
                          leading-8
                          text-[#091127]
                          ${
                            price === "Custom"
                              ? "text-2xl"
                              : "text-4xl"
                          }
                        `}
                      >
                        {price}
                      </span>

                      {price !== "Custom" && (
                        <span className="pb-0.5 text-sm font-semibold leading-4 text-[#7890b2]">
                          / month
                        </span>
                      )}
                    </div>

                    <p className="!m-0 pt-2 pb-4 text-xs leading-4 text-[#7890b2]">
                      {billingText}
                    </p>
                  </div>

                  {/* SUMMARY */}
                  <div className="border-t border-[#edf0f4] pt-4 pb-4">
                    <p className="!m-0 text-xs leading-5 text-[#5d7192]">
                      {plan.summary}
                    </p>
                  </div>

                  {/* KEY LIMITS */}
                  <div className="pb-4">
                    <div
                      className="
                        rounded-lg
                        border
                        border-[#edf0f4]
                        bg-[#fafbfc]
                        p-3
                      "
                    >
                      <p className="!m-0 mb-1.5 text-[9.5px] font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                        Key limits
                      </p>

                      <div className="flex flex-col">
                        {plan.limits.map((limit) => (
                          <p
                            key={limit}
                            className="!m-0 py-[2.5px] text-xs leading-4 text-[#5d7192]"
                          >
                            {limit}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="flex flex-col gap-1.5">
                    <p className="!m-0 text-[9.5px] font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                      {plan.sectionTitle}
                    </p>

                    <div className="flex flex-col">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            relative
                            py-[3px]
                            pl-4
                            text-xs
                            leading-4
                            text-[#5d7192]
                          "
                        >
                          <span
                            className="
                              absolute
                              left-0
                              top-[9px]
                              h-2
                              w-2
                              rounded-[2px]
                              border
                              border-blue-600
                              bg-[#f0f5ff]
                            "
                          />

                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-8">
                    <button
                      type="button"
                      className="
                        w-full
                        rounded-lg
                        border
                        border-blue-600
                        bg-blue-600
                        p-3
                        text-sm
                        font-bold
                        leading-5
                        text-white
                      "
                    >
                      {plan.button}
                    </button>

                    <p className="!m-0 min-h-7 pt-2 text-center text-xs leading-4 text-[#7890b2]">
                      {plan.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}