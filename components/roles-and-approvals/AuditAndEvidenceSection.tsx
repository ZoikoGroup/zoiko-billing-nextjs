'use client';

import Link from 'next/link';

interface AuditItem {
  id: string;
  title: string;
  description: string;
}

const AUDIT_ITEMS: AuditItem[] = [
  {
    id: 'role-membership',
    title: 'Role and membership changes',
    description:
      'Who was granted or removed from which role, in which scope, by whom and when.',
  },
  {
    id: 'policy-decisions',
    title: 'Policy versions and decisions',
    description:
      'Which policy version applied, what effect it returned and the reason recorded.',
  },
  {
    id: 'approval-outcomes',
    title: 'Approval requests and outcomes',
    description:
      'Requester, reviewer, reason, deadline and the final decision on each request.',
  },
  {
    id: 'executed-actions',
    title: 'Executed actions and overrides',
    description:
      'What actually ran, what it changed, and any override applied to it.',
  },
  {
    id: 'restricted-access',
    title: 'Restricted access and export',
    description:
      'Access to sensitive data and export events where the policy requires them recorded.',
  },
  {
    id: 'retention-legal-hold',
    title: 'Retention and legal hold',
    description:
      'Defined retention, legal-hold treatment and authorized evidence export.',
  },
];

const EMERGENCY_TAGS = [
  'Request and reason',
  'Limited duration',
  'Monitored while active',
  'Retrospective review',
  'Full evidence retained',
];

export default function AuditAndEvidenceSection() {
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
                Audit and evidence
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
              Preserve who requested, approved and executed each action.
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
              Evidence exists so a decision can be reconstructed later — by
              your own team, an auditor or a customer in dispute.
            </p>
          </div>

          {/* AUDIT CATEGORIES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {AUDIT_ITEMS.map((item) => (
              <div
                key={item.id}
                className="
                  flex
                  min-h-[150px]
                  flex-col
                  gap-2
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                <h3
                  className="
                    !m-0
                    text-sm
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {item.title}
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
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* EMERGENCY ACCESS */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-4
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-5
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              sm:p-7
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
              Emergency access
            </span>

            <div className="flex flex-col gap-2">
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
                Exceptional, time-limited and reviewed afterwards
              </h3>

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
                Where emergency access exists, it is requested with a reason,
                granted for a limited duration, monitored while active and
                reviewed retrospectively. It is an exception path with a paper
                trail — not a standing master key, and not a backdoor.
              </p>
            </div>

            {/* EMERGENCY PROCESS TAGS */}
            <div className="flex flex-wrap gap-2 pt-1">
              {EMERGENCY_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                    px-3.5
                    py-1.5
                    text-xs
                    font-medium
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* EVIDENCE BOUNDARY */}
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
              Evidence boundary
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
              Audit records are evidence, not proof that every action was
              appropriate or compliant. They show what happened and who
              authorized it; judging whether it was correct remains a human
              responsibility.
            </p>
          </div>

          {/* BOTTOM CTAs */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              pt-1
            "
          >
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
                focus:outline-none
                focus:ring-2
                focus:ring-[#091127]
                focus:ring-offset-2
              "
            >
              Security overview
            </Link>

            <Link
              href="/privacy-notice"
              className="
                inline-flex
                min-h-[44px]
                items-center
                justify-center
                rounded-lg
                px-3
                py-2.5
                text-sm
                font-semibold
                text-[#5d7192]
                transition-colors
                hover:text-[#091127]
              "
            >
              Read the privacy notice
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}