import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ExceptionClass {
  title: string;
  description: string;
}

const exceptionClasses: ExceptionClass[] = [
  {
    title: 'Validation failure',
    description:
      'A required field, permission, action or dependency is invalid. Activation is blocked and the exact issue is identified.',
  },
  {
    title: 'Permission denied',
    description:
      'The workflow or service identity lacks the required scope. The step pauses and routes to an authorized owner.',
  },
  {
    title: 'Duplicate event',
    description:
      'The same event may have arrived before. Idempotency state applies and the action is not repeated.',
  },
  {
    title: 'Condition unknown',
    description:
      'Required context is missing, restricted or unresolved. Configured false, wait or review behaviour applies — never a guess.',
  },
  {
    title: 'Integration unavailable',
    description:
      'A connector or downstream service cannot complete. Retry under policy, pause, or require manual recovery.',
  },
  {
    title: 'Rate or volume limit',
    description:
      'Execution is delayed or blocked by an approved limit. Work queues safely and the owner is alerted.',
  },
  {
    title: 'Partial success',
    description:
      'Some actions completed and others did not. Irreversible effects and compensation options are shown.',
  },
  {
    title: 'Review expired',
    description:
      'The decision was not made within the allowed time. Escalate, reassign, cancel or pause per policy.',
  },
];

export default function ReviewAndExceptionsSection() {
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
              max-w-[780px]
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
                Review and exceptions
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[780px]
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
              Make failure and recovery part of the workflow.
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
              Oversight only works if the reviewer has enough context to
              disagree. Exceptions carry a class, an owner and a route back to
              a working state.
            </p>
          </div>

          {/* REVIEW + EXCEPTIONS */}
          <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
            {/* REVIEWER */}
            <div
              className="
                flex
                flex-col
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:p-6
              "
            >
              <div>
                <h3
                  className="
                    !m-0
                    text-lg
                    font-semibold
                    leading-6
                    text-[#091127]

                    sm:text-xl
                  "
                >
                  What a reviewer actually sees
                </h3>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]

                    sm:text-base
                    sm:leading-7
                  "
                >
                  Trigger, affected record, proposed action, reason, source
                  evidence and deadline — then the decisions their permission
                  allows.
                </p>
              </div>

              {/* REVIEWER IMAGE */}
              <div className="mt-6">
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                  "
                >
                  <Image
                    src={encodeURI('/images/automation/div.revcard.png')}
                    alt="Reviewer Interface Preview"
                    width={526}
                    height={459}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* EXCEPTIONS */}
            <div
              className="
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                p-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:p-6
              "
            >
              <div>
                <h3
                  className="
                    !m-0
                    text-lg
                    font-semibold
                    leading-6
                    text-[#091127]

                    sm:text-xl
                  "
                >
                  Exception classes and recovery
                </h3>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]

                    sm:text-base
                    sm:leading-7
                  "
                >
                  Each failure is classified so the right recovery applies,
                  and so escalation carries an owner, severity and elapsed
                  time.
                </p>
              </div>

              {/* EXCEPTION LIST */}
              <div
                className="
                  mt-6
                  divide-y
                  divide-[#edf0f4]
                  border-y
                  border-[#dfe5ee]
                "
              >
                {exceptionClasses.map((item) => (
                  <div
                    key={item.title}
                    className="
                      grid
                      grid-cols-1
                      items-start
                      gap-2
                      py-4

                      sm:grid-cols-12
                      sm:gap-4
                    "
                  >
                    <div className="sm:col-span-4">
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <div className="sm:col-span-8">
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex w-full justify-center pt-1">
            <Link
              href="/roles-and-approvals"
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                bg-[#091127]
                px-6
                py-3
                text-sm
                font-semibold
                !text-white
                shadow-sm
                transition-colors
                hover:bg-[#17213b]
                hover:!text-white
              "
            >
              Explore Roles &amp; Approvals
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}