'use client';

import Image from 'next/image';
import Link from 'next/link';

interface DutySeparationItem {
  id: string;
  title: string;
  description: string;
}

const SEPARATION_DUTIES: DutySeparationItem[] = [
  {
    id: 'self-approval-blocked',
    title: 'Self-approval blocked',
    description:
      'The requester is removed from the eligible approver set for that request, and the block is shown on the request itself.',
  },
  {
    id: 'self-approval-disclosed',
    title: 'Self-approval disclosed',
    description:
      'Where configuration permits it, the decision record states that requester and approver were the same subject.',
  },
  {
    id: 'conflicting-membership',
    title: 'Conflicting membership',
    description:
      'A subject holding both preparer and approver roles in the same scope is surfaced for review rather than silently allowed.',
  },
  {
    id: 'authority-ceiling',
    title: 'Authority ceiling',
    description:
      'An approver cannot decide beyond the amount, entity, action or time authority delegated to them; the request escalates instead.',
  },
  {
    id: 'missing-evidence',
    title: 'Missing evidence',
    description:
      'Required supporting evidence that is absent is flagged before a decision is recorded.',
  },
  {
    id: 'decision-reason',
    title: 'Decision reason',
    description:
      'A reason is captured with the decision, with optional supporting evidence attached to the record.',
  },
];

export default function MeaningfulReviewSection() {
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
                Meaningful review
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
              Give reviewers the context to make a meaningful decision.
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
              A reviewer who cannot see what is changing, or why it needs a
              decision, is not really reviewing anything.
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
            {/* REVIEWER CONTEXT */}
            <div className="flex w-full flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  What the reviewer is shown
                </h3>

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
                  The requested action, the records it affects, the before and
                  after values, the policy reason, and anything that conflicts
                  or is missing.
                </p>
              </div>

              {/* IMAGE */}
              <div
                className="
                  relative
                  min-h-[420px]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:min-h-[520px]
                "
              >
                <Image
                  src="/images/roles-and-approvals/div.revcard (1).png"
                  alt="Reviewer context and decision panel preview"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* SEPARATION OF DUTIES */}
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]

                    sm:text-lg
                  "
                >
                  Separation of duties
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
                  Where policy separates duties, the person who prepared an
                  action cannot be the person who authorizes it. Where it does
                  not, the overlap is disclosed rather than hidden.
                </p>
              </div>

              {/* DUTY RULES */}
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
                {SEPARATION_DUTIES.map((duty, index) => (
                  <div
                    key={duty.id}
                    className={`
                      flex
                      flex-col
                      gap-1.5
                      p-5

                      sm:flex-row
                      sm:items-start
                      sm:gap-6

                      ${
                        index !== SEPARATION_DUTIES.length - 1
                          ? 'border-b border-[#edf0f4]'
                          : ''
                      }
                    `}
                  >
                    <h4
                      className="
                        !m-0
                        w-full
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]

                        sm:w-40
                        sm:shrink-0
                      "
                    >
                      {duty.title}
                    </h4>

                    <p
                      className="
                        !m-0
                        flex-1
                        text-sm
                        font-normal
                        leading-6
                        text-[#5d7192]
                      "
                    >
                      {duty.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CONFIGURATION BOUNDARY */}
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
                  Configuration boundary
                </span>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  Separation of duties is configuration-dependent. It is
                  available as a control, but it is not a universal guarantee
                  and it is not claimed as one.
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div className="flex justify-center pt-1">
            <Link
              href="/invoices"
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
              Explore Invoices &amp; Credit Notes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}