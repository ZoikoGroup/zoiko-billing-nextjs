"use client";

import Link from "next/link";

const trustItems = [
  {
    title: "Least-privilege actions",
    description:
      "View, match, allocate, reverse, refund and export are separately permissioned.",
  },
  {
    title: "Payer-data protection",
    description:
      "Payer, bank-reference, account and transaction data are protected in access and handling.",
  },
  {
    title: "Tokenized or provider-hosted",
    description:
      "Payment data is tokenized or provider-hosted where applicable. No raw card storage is claimed.",
  },
  {
    title: "Secure channels",
    description:
      "Service identities, webhooks, file channels and credentials all run on approved controls.",
  },
  {
    title: "Full evidence chain",
    description:
      "Source, normalization, match, allocation, reversal and export each leave evidence.",
  },
  {
    title: "Retention and dispute",
    description:
      "Retention, deletion, dispute and legal-hold treatment are defined in advance.",
  },
];

export default function TrustPrivacySecurity() {
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
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[760px]
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
                max-w-[760px]
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
              Payment and banking data gets the strictest handling.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Payer, bank-reference, account and transaction data all carry
              regulatory weight, so access, storage and evidence are controlled
              accordingly.
            </p>
          </div>

          {/* TRUST / SECURITY CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-px
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#dfe5ee]

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[175px]
                  flex-col
                  items-start
                  bg-white
                  px-6
                  py-6
                "
              >
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* OBLIGATION BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-6
              py-7

              sm:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#7890b2]
              "
            >
              Obligation boundary
            </span>

            <p
              className="
                !m-0
                max-w-[900px]
                text-base
                font-normal
                leading-7
                text-[#091127]
              "
            >
              Internal secrets, full credentials and card data are never
              published, and no unsupported certification claim is made.
              Product controls do not replace PCI, banking, accounting, legal
              or treasury obligations.
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-4
              pt-1

              sm:flex-row
            "
          >
            {/* PRIMARY */}
            <Link
              href="/trust-center"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-6
                py-3
                text-base
                font-normal
                leading-6
                !text-white
                transition-colors
                hover:bg-[#18223a]

                sm:w-auto
              "
            >
              Review security and trust
            </Link>

            {/* SECONDARY */}
            <Link
              href="/privacy-policy"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                px-2
                py-2.5
                text-base
                font-normal
                leading-6
                !text-[#7890b2]
                transition-colors
                hover:!text-[#5d7192]
              "
            >
              Read the privacy notice

              <span className="text-base font-bold leading-6">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}