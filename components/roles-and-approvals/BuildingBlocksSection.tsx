'use client';

import Image from 'next/image';

interface DecisionStatus {
  id: string;
  badge: string;
  title: string;
  description: string;
}

const DECISION_STATUSES: DecisionStatus[] = [
  {
    id: 'allow',
    badge: 'Allow',
    title: 'The action may proceed',
    description:
      'Permitted while all current conditions remain satisfied. Applicable policy and reason are recorded where required.',
  },
  {
    id: 'deny',
    badge: 'Deny',
    title: 'The action is prohibited',
    description:
      'Deny takes precedence according to approved policy order, with a safe explanation to the user.',
  },
  {
    id: 'require-approval',
    badge: 'Require approval',
    title: 'A decision must be recorded',
    description:
      'Not executable until an eligible approver decides. Authority is rechecked at execution where required.',
  },
  {
    id: 'restrict',
    badge: 'Restrict',
    title: 'Allowed within a boundary',
    description:
      'Permitted only within specified fields, values, entities, times or channels, disclosed to authorized users.',
  },
  {
    id: 'escalate',
    badge: 'Escalate',
    title: 'A higher authority is needed',
    description:
      'Routed to an alternate or higher authority while the original requester and history are preserved.',
  },
];

export default function BuildingBlocksSection() {
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
                Building blocks
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
              Combine responsibility, scope and permission deliberately.
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
              Six concepts sit behind every authorization and approval
              decision. Select one to see what it covers.
            </p>
          </div>

          {/* FEATURE VISUAL */}
          <div
            className="
              relative
              aspect-[16/7]
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
              src="/images/roles-and-approvals/div.anat (1).png"
              alt="Authorization and approval building blocks diagram"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>

          {/* DECISION STATUSES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#dfe5ee]
              gap-px

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {DECISION_STATUSES.map((status) => (
              <div
                key={status.id}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  gap-2.5
                  bg-white
                  p-5
                  pb-8

                  sm:pb-10
                "
              >
                {/* BADGE */}
                <span
                  className="
                    w-fit
                    rounded-full
                    border
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                    px-2.5
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#7890b2]
                  "
                >
                  {status.badge}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    pt-1
                    text-sm
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {status.title}
                </h3>

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
                  {status.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}