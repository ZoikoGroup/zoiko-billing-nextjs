"use client";

import React from "react";
import Link from "next/link";

const trustItems = [
  {
    title: "Role-based actions",
    description:
      "View, assign, contact, hold, promise, dispute and export are separately permissioned.",
  },
  {
    title: "Data protection",
    description:
      "Customer contact, financial, dispute and communication data are protected in access and handling.",
  },
  {
    title: "Full evidence chain",
    description:
      "Ownership, messages, decisions, promises, payments and status changes all leave evidence.",
  },
  {
    title: "Secure channels and identities",
    description:
      "Channels, templates and service identities run on approved controls.",
  },
  {
    title: "Retention and access requests",
    description:
      "Retention, complaint, access-request and legal-hold treatment are defined in advance.",
  },
  {
    title: "Nothing sensitive in analytics",
    description:
      "No sensitive customer or balance data in ordinary analytics.",
  },
];

export default function TrustSecurity() {
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
              Receivables work touches people, not just balances.
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
              Contact data, dispute detail and communication history are
              sensitive in their own right, and are handled that way.
            </p>
          </div>

          {/* TRUST CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {trustItems.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  min-h-[180px]
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5
                  sm:px-6
                  sm:py-6

                  ${
                    index < trustItems.length - 1
                      ? "border-b border-[#edf0f4]"
                      : ""
                  }

                  sm:[&:nth-child(odd)]:border-r
                  sm:[&:nth-child(odd)]:border-[#edf0f4]

                  lg:border-b
                  lg:border-[#edf0f4]
                  lg:[&:nth-child(3n)]:border-r-0
                  lg:[&:nth-child(3n+1)]:border-r
                  lg:[&:nth-child(3n+2)]:border-r
                `}
              >
                <h3
                  className="
                    !m-0
                    pb-1
                    text-sm
                    font-semibold
                    leading-6
                    text-[#091127]
                    sm:text-base
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
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* POLICY BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-[#f7f8fa]
              px-5
              py-6
              sm:px-7
              sm:py-7
            "
          >
            <div
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.14em]
                text-[#7890b2]
                sm:text-xs
              "
            >
              Policy boundary
            </div>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Internal collection logic, secrets and certification claims are
              published only with evidence. Product controls do not replace
              legal, regulatory, customer-support or vulnerable-customer
              policy.
            </p>
          </div>

          {/* ACTIONS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3
              sm:flex-row
              sm:flex-wrap
              sm:items-center
            "
          >
            {/* REVIEW SECURITY */}
            <Link
              href="/security-overview"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-[#091127]
                bg-[#091127]
                px-5
                py-2.5
                text-sm
                font-normal
                leading-6
                !text-white
                transition
                hover:bg-[#17213b]
                sm:w-auto
                sm:text-base
              "
            >
              Review security and trust
            </Link>

            {/* PRIVACY NOTICE */}
            <Link
              href="/privacy-and-data-governance"
              className="
                inline-flex
                min-h-11
                items-center
                gap-2
                px-1
                py-2.5
                text-sm
                font-normal
                leading-6
                text-[#7890b2]
                transition
                hover:text-[#091127]
                sm:text-base
              "
            >
              <span>Read the privacy notice</span>
              <span className="text-base font-bold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}