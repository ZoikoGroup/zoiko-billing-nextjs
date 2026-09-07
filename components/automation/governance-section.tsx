import React from 'react';

interface GovernanceRule {
  step: string;
  title: string;
  description: string;
}

const governanceRules: GovernanceRule[] = [
  {
    step: '01',
    title: 'Builder permission',
    description:
      'Who may create and edit workflow definitions, and within which data and action scope.',
  },
  {
    step: '02',
    title: 'Template publisher',
    description:
      'Who may publish a configuration as a reusable template for other teams.',
  },
  {
    step: '03',
    title: 'Approver and separation of duties',
    description:
      'Who may approve a definition or sensitive change, and when the approver may not be the author.',
  },
  {
    step: '04',
    title: 'Activation, pause and emergency stop',
    description:
      'Who may switch a workflow on, pause it, or stop it immediately when something is wrong.',
  },
  {
    step: '05',
    title: 'Restricted action and data scopes',
    description:
      'Which actions and which records a given workflow or role may ever touch.',
  },
  {
    step: '06',
    title: 'Export and bulk-action limits',
    description:
      'Constraints on exporting restricted data or applying an action across many records at once.',
  },
  {
    step: '07',
    title: 'Auditor read-only access',
    description:
      'Read-only access to definitions, versions, runs and decisions for review without operational power.',
  },
  {
    step: '08',
    title: 'Scoped administration',
    description:
      'Administrative power remains scoped, attributable and reviewable rather than unlimited.',
  },
];

export default function GovernanceSection() {
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
                Governance
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
              Control who can design, approve and operate automation.
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
              Building a workflow, approving it, switching it on and reading its
              evidence are separate permissions.
            </p>
          </div>

          {/* GOVERNANCE RULES */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            {governanceRules.map((rule, index) => (
              <div
                key={rule.step}
                className={`
                  flex
                  flex-col
                  items-start
                  gap-4
                  p-5

                  sm:flex-row
                  sm:gap-6
                  sm:p-6

                  ${
                    index !== governanceRules.length - 1
                      ? 'border-b border-[#edf0f4]'
                      : ''
                  }
                `}
              >
                {/* STEP */}
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
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
                  {rule.step}
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3
                    className="
                      !m-0
                      text-base
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    {rule.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      mt-1
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

          {/* GOVERNANCE BOUNDARY */}
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
              Governance boundary
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
              A configured approval workflow is a control, not a universal
              compliance guarantee. It supports your obligations; it does not
              discharge them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}