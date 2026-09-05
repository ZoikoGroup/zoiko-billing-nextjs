'use client';

import Link from 'next/link';

interface TrustCard {
  title: string;
  description: string;
}

const trustItems: TrustCard[] = [
  {
    title: 'Role-based access',
    description:
      'Actions are controlled by role, organisation, entity and assigned responsibility rather than by convention.',
  },
  {
    title: 'Approval controls',
    description:
      'Sensitive charges, discounts, credits, adjustments and high-value invoices can require defined approval before they take effect.',
  },
  {
    title: 'Audit events',
    description:
      'Material events record the responsible user or system, timestamp, affected record, prior state, resulting state and the supporting rule.',
  },
  {
    title: 'Encryption and data handling',
    description:
      'Summaries are published only from approved sources. Internal security architecture is not disclosed publicly.',
  },
  {
    title: 'Availability and claim status',
    description:
      'Capability, market and integration claims carry a status, owner, source and effective date.',
  },
  {
    title: 'No badge without evidence',
    description:
      'Certification badges and compliance claims appear only with current evidence, defined scope and an accountable owner.',
  },
];

export default function TrustAndControlSection() {
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
                Trust and control
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
              Govern sensitive billing actions with attributable control.
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
              Who may act, what required approval, what was recorded, and what
              we are willing to claim in public.
            </p>
          </div>

          {/* TRUST CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              sm:grid-cols-2
              sm:gap-5
              lg:grid-cols-3
              lg:gap-5
            "
          >
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[180px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  transition-all
                  duration-200
                  hover:border-[#cbd5e1]
                  hover:shadow-[0_12px_28px_rgba(15,23,42,0.07),0_2px_4px_rgba(15,23,42,0.04)]
                  sm:p-6
                "
              >
                <h3
                  className="
                    !m-0
                    text-[15px]
                    font-semibold
                    leading-5
                    text-[#091127]
                    sm:text-base
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    !m-0
                    mt-2.5
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

          {/* CTA */}
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
              sm:gap-6
            "
          >
            <Link
              href="/trust-center"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-6
                py-3
                text-sm
                font-semibold
                leading-5
                !text-white
                shadow-[0_4px_12px_rgba(15,23,42,0.12)]
                transition-colors
                duration-150
                hover:bg-[#17213a]
                focus:outline-none
                focus:ring-2
                focus:ring-[#7890b2]
                focus:ring-offset-2
                sm:w-auto
              "
            >
              Review security and trust
            </Link>

            <Link
              href="/jurisdiction-availability"
              className="
                group
                inline-flex
                items-center
                gap-2
                px-2
                py-3
                text-sm
                font-medium
                leading-5
                text-[#45658f]
                transition-colors
                duration-150
                hover:text-[#091127]
                focus:outline-none
              "
            >
              <span>Check product availability</span>

              <span
                className="
                  transition-transform
                  duration-150
                  group-hover:translate-x-1
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