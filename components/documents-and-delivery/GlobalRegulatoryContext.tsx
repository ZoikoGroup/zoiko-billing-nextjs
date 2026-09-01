"use client";

import Link from "next/link";

const contextItems = [
  {
    title: "Issuer and sender identity",
    description:
      "The issuing entity, and the supported sender identity that appears on the delivery.",
  },
  {
    title: "Template, language, locale",
    description:
      "The template version, document language and locale formatting applied.",
  },
  {
    title: "Domain and postal source",
    description:
      "Sending domain, postal source, network or provider, where each is verified.",
  },
  {
    title: "Format and clearance route",
    description:
      "Document format and any electronic-invoicing or clearance route, only when approved.",
  },
  {
    title: "Data location and transfer",
    description:
      "Data-location, cross-border and retention context where it applies.",
  },
  {
    title: "Regional availability",
    description:
      "Channel and provider availability published per market, with limitations stated.",
  },
  {
    title: "Verified connectors only",
    description:
      "CRM, ERP, accounting, commerce, document, communications and custom integrations where verified.",
  },
  {
    title: "Zoiko One participation",
    description:
      "Identity, approved records, storage or cross-product navigation where supported.",
  },
];

const integrationTags = [
  "Integration registry",
  "Delivery webhooks",
  "Zoiko One",
];

export default function GlobalRegulatoryContext() {
  return (
    <section className="w-full bg-[#063650]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 xl:px-28">
        <div className="mx-auto flex w-full max-w-[1220px] flex-col gap-14">

          {/* ================= HERO ================= */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16">
            <div className="flex-1 pt-2.5">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

                <span className="text-xs font-medium uppercase tracking-wider !text-cyan-300">
                  Global and regulatory context
                </span>
              </div>

              <h2 className="max-w-[638px] text-4xl font-medium leading-tight tracking-tight !text-white sm:text-5xl">
                Sender, template
                <br />
                and channel are
                <br />
                market-specific.
              </h2>
            </div>

            <div className="flex-1 lg:max-w-[528px]">
              <p className="text-base font-normal leading-8 !text-slate-300">
                Who appears as sender, which template applies and which
                channel is even available all depend on the entity and market
                — within verified availability.
              </p>
            </div>
          </div>

          {/* ================= CONTEXT CARDS ================= */}
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-white/15 bg-[#063650] sm:grid-cols-2 lg:grid-cols-4">
            {contextItems.map((item, index) => (
              <div
                key={item.title}
                className={`
                  min-h-[180px]
                  border-white/10
                  bg-[#063650]
                  px-5
                  py-5
                  ${
                    index % 4 !== 3
                      ? "lg:border-r"
                      : ""
                  }
                  ${
                    index < 4
                      ? "lg:border-b"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "sm:border-r"
                      : "sm:border-r-0"
                  }
                  ${
                    index < 6
                      ? "sm:border-b"
                      : ""
                  }
                  lg:[&:nth-child(4n)]:border-r-0
                  lg:[&:nth-child(n+5)]:border-b-0
                  sm:[&:nth-child(2n)]:border-r-0
                `}
              >
                <h3 className="mb-3 text-sm font-semibold leading-5 !text-white">
                  {item.title}
                </h3>

                <p className="text-sm font-normal leading-6 !text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ================= LOWER SECTION ================= */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

            {/* ================= LEFT ================= */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold leading-7 !text-white">
                Integration handoffs
              </h3>

              <p className="mt-2 max-w-[520px] text-sm font-normal leading-6 !text-slate-300">
                Recipient, template and send-request context can arrive from
                an approved system. Artifact, delivery status, provider
                reference and failure events can be emitted back.
              </p>

              {/* TAGS */}
              <div className="mt-5 flex flex-wrap gap-2">
                {integrationTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/25 bg-white/5 px-4 py-2.5 text-xs font-normal !text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="mt-5 flex flex-wrap gap-3">

                <Link
                  href="/global-billing"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-2.5 text-base font-normal leading-6 !text-[#063650] transition hover:bg-slate-100"
                >
                  Explore global billing
                </Link>

                <Link
                  href="/global-billing"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/40 bg-transparent px-5 py-2.5 text-base font-normal leading-6 !text-white transition hover:bg-white/10"
                >
                  Check availability
                </Link>

              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="flex flex-col gap-6">

              {/* CONNECTOR BOUNDARY */}
              <div className="rounded-r-2xl border-l-[3px] border-cyan-400 bg-white/[0.07] px-7 py-7">
                <div className="mb-2 text-[10px] font-normal uppercase tracking-wider !text-cyan-300">
                  Connector boundary
                </div>

                <p className="text-base font-normal leading-7 !text-slate-300">
                  Not every connector renders, sends, receives or confirms
                  delivery, and not in real time. Source ownership, mapping,
                  retry, duplicate and revocation behaviour are stated per
                  connector. Zoiko Billing remains independently deployable.
                </p>
              </div>

              {/* REGULATORY BOUNDARY */}
              <div className="rounded-r-2xl border-l-[3px] border-cyan-400 bg-white/[0.07] px-7 py-7">
                <div className="mb-2 text-[10px] font-normal uppercase tracking-wider !text-cyan-300">
                  Regulatory boundary
                </div>

                <p className="text-base font-normal leading-7 !text-slate-300">
                  Language, currency and recipient location do not alone
                  determine legal requirements, and certified or statutory
                  delivery is never claimed without authoritative evidence.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}