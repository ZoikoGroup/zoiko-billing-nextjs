import React from 'react';
import Image from 'next/image';

interface FeatureCard {
  title: string;
  description: string;
}

const runtimeFeatures: FeatureCard[] = [
  {
    title: 'Duplicate protection',
    description:
      'Idempotency keys and duplicate-event handling stop the same action running twice.',
  },
  {
    title: 'Versioning',
    description:
      'Definitions and actions are versioned; a run is tied to the version that started it.',
  },
  {
    title: 'Limits and concurrency',
    description:
      'Execution, rate and concurrency limits keep load predictable.',
  },
  {
    title: 'Run states and timestamps',
    description: 'Every state change is recorded with the time it occurred.',
  },
  {
    title: 'Service and user identity',
    description:
      'Runs record the service identity and the initiating user context.',
  },
  {
    title: 'Structured logs',
    description:
      'Audit and operational logs are structured for review, not free text.',
  },
  {
    title: 'Retry and dead-letter',
    description:
      'Retry policy with backoff, and an explicit unresolved state when attempts are exhausted.',
  },
  {
    title: 'Safe pause and reprocess',
    description:
      'Work can be paused and reprocessed under control rather than abandoned.',
  },
];

export default function RuntimeReliabilitySection() {
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
                Runtime
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
              Execution that stays safe, attributable and observable.
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
              How runs behave under duplication, failure, load and revision —
              and what evidence each one leaves.
            </p>
          </div>

          {/* RUNTIME FEATURES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              md:grid-cols-3

              lg:grid-cols-4
            "
          >
            {runtimeFeatures.map((feature) => (
              <div
                key={feature.title}
                className="
                  flex
                  min-h-[170px]
                  flex-col
                  justify-start
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
                <h3
                  className="
                    !m-0
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* RUNTIME BLUEPRINT */}
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
                src={encodeURI('/images/automation/div.vocab (1).png')}
                alt="Runtime Execution Model & Observability"
                width={955}
                height={571}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}