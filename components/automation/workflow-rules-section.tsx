import React from 'react';

interface RuleStep {
  number: string;
  title: string;
  description: string;
}

const ruleSteps: RuleStep[] = [
  {
    number: '01',
    title: 'Explicit trigger and conditions',
    description:
      'Every workflow starts from an approved event, schedule, manual start or connector signal.',
  },
  {
    number: '02',
    title: 'Permitted action and owner',
    description:
      'Actions are scoped to what the workflow is allowed to do, and every one has a named owner.',
  },
  {
    number: '03',
    title: 'Human review when required',
    description:
      'Configured sensitive or consequential actions wait for a real decision.',
  },
  {
    number: '04',
    title: 'Visible exception and audit path',
    description:
      'Failures surface with a class, owner and recovery route. Runs leave evidence.',
  },
  {
    number: '05',
    title: 'Availability varies',
    description:
      'Capability, plan, connector and jurisdiction all affect what is available to you.',
  },
];

export default function WorkflowRulesSection() {
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
          {/* RULE CARDS */}
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

              lg:grid-cols-5
            "
          >
            {ruleSteps.map((step, index) => (
              <div
                key={step.number}
                className={`
                  flex
                  flex-col
                  justify-between
                  gap-6
                  bg-white
                  p-5
                  transition-colors
                  hover:bg-[#f7f8fa]

                  sm:p-6

                  lg:min-h-[270px]

                  ${
                    index !== ruleSteps.length - 1
                      ? 'border-b border-[#edf0f4] sm:border-r lg:border-b-0'
                      : ''
                  }

                  ${
                    index === 1
                      ? 'sm:border-r-0 lg:border-r'
                      : ''
                  }
                `}
              >
                <div>
                  {/* NUMBER */}
                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      leading-4
                      tracking-[0.12em]
                      text-[#7890b2]
                    "
                  >
                    {step.number}
                  </span>

                  {/* TITLE */}
                  <h3
                    className="
                      !m-0
                      mt-3
                      text-base
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {step.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* OPERATING BOUNDARY */}
          <div
            className="
              w-full
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              px-5
              py-5

              sm:px-6
              sm:py-6
            "
          >
            <span
              className="
                block
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
              "
            >
              Operating boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-4xl
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              This is controlled automation, not autonomous operation. Zoiko
              Billing does not offer unrestricted scripting or access to every
              record and action, and no workflow determines creditworthiness,
              misconduct, legal liability or tax treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}