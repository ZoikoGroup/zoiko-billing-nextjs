import React from 'react';
import Image from 'next/image';

interface LifecycleStep {
  step: string;
  title: string;
  description: string;
}

const steps: LifecycleStep[] = [
  {
    step: '01',
    title: 'Draft',
    description: 'Definition prepared and an owner assigned. It cannot execute.',
  },
  {
    step: '02',
    title: 'Validate',
    description: 'Fields, permissions, actions and dependencies are checked.',
  },
  {
    step: '03',
    title: 'Approve',
    description: 'Authorized review where the definition or change requires it.',
  },
  {
    step: '04',
    title: 'Activate',
    description: 'Published and eligible to trigger on configured events.',
  },
  {
    step: '05',
    title: 'Monitor',
    description: 'Runs, failures, limits and outcome states are observable.',
  },
  {
    step: '06',
    title: 'Revise',
    description: 'Pause, change and reapprove as a new version.',
  },
  {
    step: '07',
    title: 'Retire',
    description: 'No new runs. Definition and history retained per policy.',
  },
];

export default function WorkflowLifecycleSection() {
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
                Lifecycle
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
              Approve, activate and revise workflows without losing history.
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
              A definition moves through the same governed path every time, and
              editing an active definition never silently changes work already
              in flight.
            </p>
          </div>

          {/* LIFECYCLE STEPS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              md:grid-cols-4

              lg:grid-cols-4
            "
          >
            {steps.map((item) => (
              <div
                key={item.step}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  transition-colors
                  hover:bg-[#f7f8fa]

                  sm:p-6
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                    text-[11px]
                    font-bold
                    leading-none
                    text-[#7890b2]
                  "
                >
                  {item.step}
                </span>

                {/* CONTENT */}
                <div>
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
                      mt-1.5
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

          {/* BLUEPRINT */}
          <div className="w-full">
            <div
              className="
                relative
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
                src={encodeURI('/images/automation/div.vocab.png')}
                alt="Workflow Lifecycle Visual Blueprint"
                width={1116}
                height={558}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}