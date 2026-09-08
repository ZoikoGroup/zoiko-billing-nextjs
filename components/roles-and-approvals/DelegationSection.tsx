'use client';

import Image from 'next/image';

interface DelegationRule {
  step: string;
  title: string;
  description: string;
}

const DELEGATION_RULES: DelegationRule[] = [
  {
    step: '01',
    title: 'Temporary delegation',
    description:
      'Authority passes for a defined window with an explicit start and end time.',
  },
  {
    step: '02',
    title: "Capped at the delegator's own authority",
    description:
      'A delegate can never receive more than the delegator was permitted to exercise.',
  },
  {
    step: '03',
    title: 'Out-of-office and workload reassignment',
    description:
      'Where supported, pending decisions route to an eligible alternate automatically.',
  },
  {
    step: '04',
    title: 'Escalation on deadline',
    description:
      'An undecided request escalates after a defined deadline or condition rather than stalling.',
  },
  {
    step: '05',
    title: 'Revocation and conflict handling',
    description:
      'Delegation can be withdrawn, and overlapping delegations are resolved by policy, not by chance.',
  },
  {
    step: '06',
    title: 'Full evidence',
    description:
      'Delegator, delegate, reason and every resulting decision are recorded.',
  },
];

export default function DelegationSection() {
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
                Delegation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[800px]
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
              Maintain continuity without transferring unlimited authority.
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
              People take leave and workloads shift. Delegation covers that
              without anyone sharing a password or inheriting powers they were
              never granted.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-8

              lg:grid-cols-2
              lg:gap-11
            "
          >
            {/* DELEGATION RULES */}
            <div
              className="
                flex
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              {DELEGATION_RULES.map((rule, index) => (
                <div
                  key={rule.step}
                  className={`
                    flex
                    items-start
                    gap-4
                    p-5
                    ${index !== DELEGATION_RULES.length - 1 ? 'border-b border-[#edf0f4]' : ''}
                  `}
                >
                  {/* STEP */}
                  <span
                    className="
                      shrink-0
                      pt-0.5
                      text-[10px]
                      font-bold
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    {rule.step}
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
                      {rule.title}
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
                      {rule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* VISUAL + BOUNDARY */}
            <div className="flex w-full flex-col gap-8">
              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[11/10]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:aspect-[4/3]

                  lg:aspect-[11/10]
                "
              >
                <Image
                  src="/images/roles-and-approvals/div.revcard (2).png"
                  alt="Delegation workflow and authority ceiling diagram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* DELEGATION BOUNDARY */}
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
                  Delegation boundary
                </span>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]

                    sm:text-base
                    sm:leading-7
                  "
                >
                  Delegation is a transfer of authority, never of credentials.
                  Passwords and tokens are not shared, and delegation does not
                  silently include restricted roles or emergency powers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}