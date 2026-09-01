import Link from "next/link";

import { Section, SectionHeading, heading, linkClass } from "./shared";

export default function ThreeBoundaries() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Control, integrations & trust"
        title="Three boundaries the design keeps explicit."
        intro="Each is a place where software can quietly assume an authority it does not have."
      />

      <div className="flex w-full flex-col items-stretch gap-5 pt-5 lg:flex-row">
        {/* Integration boundaries — white card */}
        <div className="flex flex-col gap-2 rounded-2xl border border-[#DFE5EE] bg-white px-6 pb-9 pt-6 shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)] lg:flex-1">
          <h3
            className={`${heading} !mb-0 !font-bold !text-lg !leading-7 !text-[#0F172A]`}
          >
            Integration boundaries
          </h3>

          <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">
            Where Zoiko Billing ends and a connected system begins is designed to
            be visible. A provider&apos;s behavior is not presented as ours, and{" "}
            <b className="font-bold">
              a provider&apos;s assurance posture is never restated as ours
            </b>{" "}
            — the same rule{" "}
            <Link href="#" className={linkClass}>
              Security Overview
            </Link>{" "}
            applies.
          </p>

          <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">
            Reconciliation across the boundary is designed as a process with
            visible state rather than an assumption that two systems agree.{" "}
            <b className="font-bold">No universal provider coverage is claimed</b>
            ; availability varies by provider and jurisdiction per{" "}
            <Link href="/integrations-directory" className={linkClass}>
              Integrations
            </Link>
            .
          </p>
        </div>

        {/* Determination boundaries — tinted card */}
        <div className="flex flex-col gap-2 rounded-2xl border border-[#DBE6FA] bg-[#E8F0FD] px-6 pb-9 pt-6 lg:flex-1">
          <h3
            className={`${heading} !mb-0 !font-bold !text-lg !leading-7 !text-[#0F172A]`}
          >
            Determination boundaries
          </h3>

          <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">
            Accounting treatment, tax position and legal obligation are{" "}
            <b className="font-bold">routed to qualified professionals</b> rather
            than determined by the product. Software that decides a tax position
            on a customer&apos;s behalf has taken on a liability neither party
            agreed to.
          </p>

          <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">
            Assurance evidence lives in{" "}
            <Link href="#" className={linkClass}>
              Trust Center
            </Link>{" "}
            with its scope, status and date.{" "}
            <b className="font-bold">
              This page publishes no certification, control statement or
              compliance claim.
            </b>
          </p>
        </div>
      </div>
    </Section>
  );
}
