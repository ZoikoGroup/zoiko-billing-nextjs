'use client';

import Link from 'next/link';

interface ResponsibilityCard {
  number: string;
  title: string;
  description: string;
  ceiling: string;
}

const RESPONSIBILITIES: ResponsibilityCard[] = [
  {
    number: '01',
    title: 'Accountable owner',
    description:
      'Manages high-level membership, configuration and emergency procedures within approved authority.',
    ceiling:
      'Cannot override external law, contract, provider or platform security controls.',
  },
  {
    number: '02',
    title: 'Billing administrator',
    description:
      'Configures permitted roles, billing settings and operating scope for the organization.',
    ceiling:
      'Restricted from self-approving configured sensitive changes where policy separates duties.',
  },
  {
    number: '03',
    title: 'Preparer / operator',
    description:
      'Creates or prepares customer, invoice, charge and workflow records within an assigned scope.',
    ceiling:
      'Cannot approve or execute restricted actions unless separately authorized.',
  },
  {
    number: '04',
    title: 'Approver',
    description:
      'Reviews configured actions with their evidence and policy context, then records a decision.',
    ceiling:
      'Cannot exceed delegated amount, entity, action or time authority.',
  },
  {
    number: '05',
    title: 'Viewer / auditor',
    description:
      'Reviews records, decisions and evidence to understand what happened and who authorized it.',
    ceiling:
      'Read-only. Sensitive fields and exports remain separately controlled.',
  },
  {
    number: '06',
    title: 'Service identity',
    description:
      'Performs explicitly scoped integration or workflow actions as a non-human subject.',
    ceiling:
      'No interactive ownership, shared password or unrestricted administrative access.',
  },
];

export default function ResponsibilitiesSection() {
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
                Responsibilities
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
              Six responsibilities, each with its own ceiling.
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
              A conceptual model. Exact role names and the permissions
              available to them are configured in the product, not fixed by
              this page.
            </p>
          </div>

          {/* RESPONSIBILITIES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {RESPONSIBILITIES.map((card) => (
              <div
                key={card.number}
                className="
                  flex
                  min-h-[245px]
                  flex-col
                  gap-4
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    text-[10px]
                    font-bold
                    leading-4
                    tracking-[0.12em]
                    text-[#7890b2]
                  "
                >
                  {card.number}
                </span>

                {/* TITLE & DESCRIPTION */}
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {card.title}
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
                    {card.description}
                  </p>
                </div>

                {/* CEILING */}
                <div
                  className="
                    mt-auto
                    flex
                    flex-col
                    gap-1
                    border-t
                    border-[#edf0f4]
                    pt-3
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
                    Ceiling
                  </span>

                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {card.ceiling}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MODEL BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              p-5

              sm:p-6

              md:p-7
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
              Model boundary
            </span>

            <p
              className="
                !m-0
                w-full
                max-w-3xl
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              Owner status does not bypass legal, contractual, security or
              policy controls, and a role title alone establishes no authority
              outside the platform.
            </p>
          </div>

          {/* BOTTOM CTA */}
          <div className="flex justify-center pt-1">
            <Link
              href="/automation"
              className="
                inline-flex
                min-h-[44px]
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-6
                py-2.5
                text-sm
                font-semibold
                !text-white
                transition-opacity
                hover:opacity-90
                focus:outline-none
                focus:ring-2
                focus:ring-[#091127]
                focus:ring-offset-2
              "
            >
              See how workflows use these roles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}