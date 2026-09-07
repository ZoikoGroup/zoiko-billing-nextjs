'use client';

import Image from 'next/image';

interface LifecycleStage {
  step: string;
  title: string;
  description: string;
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    step: '01',
    title: 'Request',
    description: 'Action, record values, reason and, initiator are captured.',
  },
  {
    step: '02',
    title: 'Validate',
    description:
      'Permissions, policy, data and dependencies are confirmed.',
  },
  {
    step: '03',
    title: 'Assign',
    description:
      'An eligible approver or group receives the decision task.',
  },
  {
    step: '04',
    title: 'Review',
    description: 'Relevant source and change context is presented.',
  },
  {
    step: '05',
    title: 'Decide',
    description: 'Approve, reject, and change context is presented.',
  },
  {
    step: '06',
    title: 'Execute',
    description:
      'Current authority is rechecked before the action runs.',
  },
  {
    step: '07',
    title: 'Complete',
    description: 'Result, failure or partial outcome is recorded.',
  },
  {
    step: '08',
    title: 'Expire',
    description:
      'Expiry, cancellation or supersession stays visible.',
  },
];

export default function ApprovalLifecycleSection() {
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
                Approval lifecycle
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
              From proposed action to accountable decision.
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
              Eight stages, each leaving evidence. Approval and execution are
              separate events, because the world can change between them.
            </p>
          </div>

          {/* LIFECYCLE STAGES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {LIFECYCLE_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="
                  flex
                  min-h-[174px]
                  flex-col
                  gap-3
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* STEP */}
                <span
                  className="
                    text-[10px]
                    font-bold
                    leading-4
                    tracking-[0.12em]
                    text-[#7890b2]
                  "
                >
                  {stage.step}
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
                    {stage.title}
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
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WORKFLOW LIFECYCLE VISUAL */}
          <div
            className="
              relative
              aspect-[16/8]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <Image
              src="/images/roles-and-approvals/div.vocab (2).png"
              alt="Approval lifecycle workflow detailed diagram"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}