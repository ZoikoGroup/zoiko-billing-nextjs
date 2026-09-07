'use client';

import Link from 'next/link';

interface AccessStage {
  step: string;
  title: string;
  description: string;
}

const ACCESS_STAGES: AccessStage[] = [
  {
    step: '01',
    title: 'Invite or identity link',
    description:
      'A subject is invited, or linked from an approved identity provider.',
  },
  {
    step: '02',
    title: 'Validate and activate',
    description:
      'Membership is validated against the workspace, entity or organization before it becomes live.',
  },
  {
    step: '03',
    title: 'Assign role and scope',
    description:
      'A role is bound to the subject within an explicit scope, with an assigner on record.',
  },
  {
    step: '04',
    title: 'Access review',
    description:
      'Periodic or event-driven review confirms the access is still appropriate.',
  },
  {
    step: '05',
    title: 'Temporary access expiry',
    description:
      'Time-boxed access ends on its own rather than depending on someone remembering.',
  },
  {
    step: '06',
    title: 'Suspension',
    description:
      'Access is suspended for risk, departure or a defined policy condition.',
  },
  {
    step: '07',
    title: 'Revocation',
    description:
      'Membership is revoked, with defined consequences for sessions and tokens.',
  },
  {
    step: '08',
    title: 'Evidence retained',
    description:
      'Assignment and access history is retained according to policy after removal.',
  },
];

export default function AccessLifecycleSection() {
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
                Access lifecycle
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
              Review and remove access as responsibilities change.
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
              Granting access is the easy half. These are the eight stages
              that keep it correct over time and remove it cleanly.
            </p>
          </div>

          {/* ACCESS STAGES */}
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
            {ACCESS_STAGES.map((stage) => (
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
                    uppercase
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

          {/* REVOCATION BOUNDARY */}
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
              Revocation boundary
            </span>

            <p
              className="
                !m-0
                w-full
                max-w-4xl
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              Account deletion, membership revocation and evidence retention
              are three distinct processes. Revocation behaviour across
              external identity providers and connectors depends on each
              integration, so no promise of instant revocation everywhere is
              made here.
            </p>
          </div>

          {/* BOTTOM NAVIGATION CTA */}
          <div className="flex justify-center pt-1">
            <Link
              href="/security-overview"
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
              "
            >
              Review security and trust
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}