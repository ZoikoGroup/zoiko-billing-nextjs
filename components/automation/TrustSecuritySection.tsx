import React from 'react';
import Link from 'next/link';

interface SecurityFeature {
  title: string;
  description: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    title: 'Data minimization',
    description:
      'Workflow inputs and logs carry only what the step needs to run and be audited.',
  },
  {
    title: 'Least-privilege scopes',
    description:
      'Service and user identities receive the narrowest scope that completes the action.',
  },
  {
    title: 'Secret storage and rotation',
    description:
      'Credentials are held and rotated through approved systems, never in workflow configuration.',
  },
  {
    title: 'Audit-event integrity',
    description:
      'Evidence records are protected so a run cannot be quietly rewritten after the fact.',
  },
  {
    title: 'Retention and deletion',
    description:
      'Definitions, runs and evidence follow defined retention and deletion treatment.',
  },
  {
    title: 'Incident, pause and revocation',
    description:
      'Workflows and credentials can be paused or revoked when something goes wrong.',
  },
  {
    title: 'Nothing sensitive in transit paths',
    description:
      'No sensitive data in notifications, URLs or ordinary analytics.',
  },
  {
    title: 'Evidence before claims',
    description:
      'Security detail and certification claims are published only with current evidence and defined scope.',
  },
];

export default function TrustSecuritySection() {
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
                Trust, privacy and security
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
              Automation handles less data, not more.
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
              Workflow inputs, logs and notifications are deliberately minimal,
              and every service identity runs on least privilege.
            </p>
          </div>

          {/* SECURITY FEATURES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2
            "
          >
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
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

          {/* ACTIONS */}
          <div className="flex w-full flex-wrap items-center gap-4 pt-1">
            {/* Destination not confirmed — kept as anchor */}
            <a
              href="/security-overview"
              className="
                inline-flex
                rounded-lg
                bg-[#091127]
                px-5
                py-2.5
                text-sm
                font-semibold
                !text-white
                shadow-sm
                transition-colors
                hover:bg-[#17213b]
                hover:!text-white
              "
            >
              Review security and trust
            </a>

            <Link
              href="/privacy-notice"
              className="
                inline-flex
                items-center
                gap-2
                px-2
                py-2.5
                text-sm
                font-semibold
                !text-[#7890b2]
                transition-colors
                hover:!text-[#091127]
              "
            >
              <span>Read the privacy notice</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}