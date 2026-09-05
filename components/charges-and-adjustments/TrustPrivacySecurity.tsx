"use client";

import Link from "next/link";

const trustItems = [
  {
    title: "Role-based amount actions",
    description:
      "Price, discount, fee, override and correction actions are separately permissioned.",
  },
  {
    title: "Contract and price protection",
    description:
      "Contract, price, tax and customer context is protected in access and handling.",
  },
  {
    title: "Full calculation evidence",
    description:
      "Source, calculation, approval, application and correction all leave attributable evidence.",
  },
  {
    title: "Secrets and connector scopes",
    description:
      "Credentials sit in approved systems, and connectors receive minimum scope.",
  },
  {
    title: "Retention and legal hold",
    description:
      "Retention, archive and legal-hold treatment for amount and rule history.",
  },
  {
    title: "Nothing sensitive in analytics",
    description:
      "No formulas, customer terms or amount data in ordinary analytics or logs.",
  },
];

export default function TrustPrivacySecurity() {
  return (
    <section className="w-full bg-white">
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
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* =========================================================
              SECTION INTRO
          ========================================================= */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Trust, privacy and security
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[720px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Pricing and contract context
              <br className="hidden sm:block" />
              is sensitive data.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[700px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Rates, discounts, contract terms and tax evidence all carry
              commercial risk, so access and retention are controlled
              accordingly.
            </p>
          </div>

          {/* =========================================================
              TRUST ITEMS
          ========================================================= */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {/* DESKTOP */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[300px_minmax(0,1fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Control
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-5 py-3.5">
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-[#7890b2]
                    "
                  >
                    Description
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {trustItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    grid
                    grid-cols-[300px_minmax(0,1fr)]
                    ${
                      index !== trustItems.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  <div className="px-5 py-4">
                    <span
                      className="
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.title}
                    </span>
                  </div>

                  <div className="px-5 py-4">
                    <span
                      className="
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE */}
            <div className="flex flex-col md:hidden">
              {trustItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    p-5
                    ${
                      index !== trustItems.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* CONTROL */}
                  <div className="mb-4">
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Control
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                      "
                    >
                      {item.title}
                    </p>
                  </div>

                  {/* DESCRIPTION */}
                  <div>
                    <p
                      className="
                        !m-0
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#7890b2]
                      "
                    >
                      Description
                    </p>

                    <p
                      className="
                        !m-0
                        mt-1.5
                        text-sm
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              SCOPE BOUNDARY
          ========================================================= */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#4b91ff]
              bg-[#f0f2f2]
              px-5
              py-7

              sm:px-6
              sm:py-8
            "
          >
            {/* LABEL */}
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]
              "
            >
              Scope boundary
            </span>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-2
                w-full
                max-w-[850px]
                text-[15px]
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Internal pricing logic, secrets and certification claims are
              published only with current evidence. Product controls do not
              replace contracts, tax advice or accounting policy.
            </p>
          </div>

          {/* =========================================================
              CTA
          ========================================================= */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3

              max-sm:flex-col
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="/security-overview"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2
                text-base
                font-normal
                leading-6
                !text-white
                no-underline
                transition-colors
                hover:bg-[#17213a]

                max-sm:w-full
              "
            >
              Review security and trust
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="/privacy-policy"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                px-2
                py-2
                text-base
                font-normal
                leading-6
                !text-[#3377ad]
                no-underline
                transition-colors
                hover:!text-[#1e527c]

                max-sm:w-full
              "
            >
              <span>Read the privacy notice</span>

              <span
                className="
                  font-mono
                  text-base
                  font-bold
                  leading-6
                  !text-[#3377ad]
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}