"use client";

import Link from "next/link";

const trustItems = [
  {
    title: "Role- and attribute-based access",
    description:
      "Access controlled at report, dimension, field and drill-through level.",
  },
  {
    title: "Restricted-data treatment",
    description:
      "Customer, payment, tax, dispute and personal data handled under their own rules.",
  },
  {
    title: "Row and field controls",
    description:
      "Row-level or field-level controls where they are supported.",
  },
  {
    title: "Export governance",
    description:
      "Permission, purpose, secure delivery, expiry and audit on every export.",
  },
  {
    title: "Definition change history",
    description:
      "Metric and report-definition changes tracked so past results stay explainable.",
  },
  {
    title: "Retention and incidents",
    description:
      "Retention, deletion, legal hold and incident response defined in advance.",
  },
];

export default function TrustSecurity() {
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
              flex-col
              items-start
              gap-4

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                max-w-[662px]
                flex-col
                items-start
                gap-3
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
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
              </div>

              {/* HEADING */}
              <h2
                className="
                  !m-0
                  w-full
                  max-w-[662px]
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
                Reporting concentrates
                <br className="hidden sm:block" />
                data, so it concentrates
                <br className="hidden sm:block" />
                risk.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                w-full
                max-w-[528px]
                lg:pb-1
              "
            >
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                A report can gather in one place what is otherwise scattered,
                which is exactly why access, fields and exports are governed
                separately.
              </p>
            </div>
          </div>

          {/* TRUST CARDS */}
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
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[165px]
                  flex-col
                  items-start
                  gap-2
                  bg-white
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6
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

          {/* ASSURANCE BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6

              sm:px-7
              sm:py-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]
              "
            >
              Assurance boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[761px]
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Internal schemas, customer data, security controls and
              certification claims are published only with evidence. Product
              reports are internal evidence — they do not replace statutory,
              legal, tax or audit requirements.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3

              sm:flex-row
            "
          >
            <Link
              href="security-overview"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-base
                font-normal
                leading-6
                !text-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-[#091127]
                transition
                hover:bg-[#17233d]
                hover:!text-white

                sm:w-auto
              "
            >
              Review security and trust
            </Link>

            <Link
              href="privacy-notice"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                gap-2
                px-2
                py-2.5
                text-base
                font-normal
                leading-6
                !text-[#091127]
                transition
                hover:!text-[#5d7192]

                sm:w-auto
              "
            >
              <span>Read the privacy notice</span>

              <span className="text-base font-bold leading-6">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}