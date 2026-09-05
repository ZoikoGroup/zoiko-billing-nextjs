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
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-10

            sm:gap-11

            md:gap-12
          "
        >
          {/* ================= HERO ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-7
              text-center

              lg:flex-row
              lg:items-end
              lg:gap-16
              lg:text-left
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-center
                gap-4

                lg:items-start
              "
            >
              {/* EYEBROW */}

              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-4 shrink-0 bg-[#7dd3fc] opacity-60" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    !text-[#7dd3fc]

                    sm:text-xs
                    sm:tracking-[0.18em]
                  "
                >
                  Global and regulatory context
                </span>

                <span className="h-px w-4 shrink-0 bg-[#7dd3fc] opacity-60" />
              </div>

              {/* HEADING */}

              <h2
                className="
                  !m-0
                  w-full
                  max-w-[650px]
                  !text-[30px]
                  !font-extrabold
                  !leading-[1.2]
                  !tracking-[-0.035em]
                  !text-white

                  sm:!text-[34px]

                  md:!text-[36px]

                  lg:!text-[40px]
                "
              >
                Sender, template and channel are market-specific.
              </h2>
            </div>

            {/* RIGHT */}

            <div className="w-full max-w-[530px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  !text-slate-300

                  sm:text-base
                "
              >
                Who appears as sender, which template applies and which
                channel is even available all depend on the entity and market
                — within verified availability.
              </p>
            </div>
          </div>

          {/* ================= CONTEXT CARDS ================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-white/15
              bg-[#063650]

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
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
                <h3
                  className="
                    !m-0
                    mb-3
                    text-sm
                    font-semibold
                    leading-5
                    !text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    !text-slate-300
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ================= LOWER SECTION ================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-10

              lg:grid-cols-2
              lg:gap-12

              xl:gap-16
            "
          >
            {/* ================= LEFT ================= */}

            <div className="flex w-full flex-col items-start">
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-7
                  !text-white
                "
              >
                Integration handoffs
              </h3>

              <p
                className="
                  !m-0
                  mt-2
                  max-w-[520px]
                  text-sm
                  font-normal
                  leading-6
                  !text-slate-300
                "
              >
                Recipient, template and send-request context can arrive from
                an approved system. Artifact, delivery status, provider
                reference and failure events can be emitted back.
              </p>

              {/* TAGS */}

              <div className="mt-5 flex flex-wrap gap-2">
                {integrationTags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/25
                      bg-white/5
                      px-4
                      py-2.5
                      text-xs
                      font-normal
                      !text-slate-200
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA BUTTONS */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                  sm:flex-wrap
                "
              >
                <Link
                  href="/global-billing"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    px-5
                    py-2
                    text-center
                    text-base
                    font-normal
                    leading-6
                    !text-[#063650]
                    no-underline
                    transition-opacity
                    hover:opacity-90
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                    focus:ring-offset-2
                    focus:ring-offset-[#063650]
                  "
                >
                  <span className="!text-[#063650]">
                    Explore global billing
                  </span>
                </Link>

                <Link
                  href="/integration-availability"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/40
                    bg-transparent
                    px-5
                    py-2
                    text-center
                    text-base
                    font-normal
                    leading-6
                    !text-white
                    no-underline
                    transition
                    hover:bg-white/10
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                    focus:ring-offset-2
                    focus:ring-offset-[#063650]
                  "
                >
                  <span className="!text-white">
                    Check availability
                  </span>
                </Link>
              </div>
            </div>

            {/* ================= RIGHT ================= */}

            <div className="flex w-full flex-col gap-4">
              {/* CONNECTOR BOUNDARY */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7dd3fc]
                  bg-white/[0.07]
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    !text-[#7dd3fc]
                  "
                >
                  Connector boundary
                </span>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-7
                    !text-slate-300

                    sm:text-base
                  "
                >
                  Not every connector renders, sends, receives or confirms
                  delivery, and not in real time. Source ownership, mapping,
                  retry, duplicate and revocation behaviour are stated per
                  connector. Zoiko Billing remains independently deployable.
                </p>
              </div>

              {/* REGULATORY BOUNDARY */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7dd3fc]
                  bg-white/[0.07]
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    !text-[#7dd3fc]
                  "
                >
                  Regulatory boundary
                </span>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-7
                    !text-slate-300

                    sm:text-base
                  "
                >
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