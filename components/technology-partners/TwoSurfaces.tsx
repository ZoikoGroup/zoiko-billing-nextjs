import Link from "next/link";

import { Section, SectionHeading, heading, linkClass } from "./shared";

export default function TwoSurfaces() {
  return (
    <Section id="two-surfaces">
      <SectionHeading
        eyebrow="Which directory do you want?"
        title="Two surfaces, two different questions."
        intro="People arrive here looking for both, and the distinction is not obvious from the outside."
      />

      <div className="flex w-full flex-col items-stretch gap-5 pt-6 lg:flex-row">
        {/* Technology Partners — white card */}
        <div className="flex flex-col gap-1.5 rounded-2xl border border-[#E5EAF2] bg-white px-6 pb-10 pt-6 shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)] lg:flex-1">
          <h3
            className={`${heading} !mb-0 !font-bold !text-lg !leading-7 !text-[#0F172A]`}
          >
            Technology Partners
          </h3>

          <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">
            Answers{" "}
            <b className="font-bold">
              &ldquo;who has an approved relationship with Zoiko?&rdquo;
            </b>{" "}
            — a commercial and organizational fact, published with its scope where
            publication rights exist.
          </p>

          <p className="!mb-0 pt-1.5 text-sm !leading-5 !text-[#5B6B85]">
            Useful when you are evaluating who to work with, or checking whether
            an organization&apos;s claim about a Zoiko relationship is accurate.
          </p>
        </div>

        {/* Integrations directory — tinted card */}
        <div className="flex flex-col gap-1.5 rounded-2xl border border-[#D6E6FD] bg-[#E8F1FE] px-6 pb-9 pt-6 lg:flex-1">
          <h3
            className={`${heading} !mb-0 !font-bold !text-lg !leading-7 !text-[#0F172A]`}
          >
            Integrations directory
          </h3>

          <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">
            Answers{" "}
            <b className="font-bold">
              &ldquo;what can Zoiko Billing connect to?&rdquo;
            </b>{" "}
            — a technical availability fact, governed by integration authority and
            varying by provider and jurisdiction.
          </p>

          <p className="!mb-0 pt-1.5 text-sm !leading-5 !text-[#5B6B85]">
            Useful when you need to know whether a specific system is supported.{" "}
            <Link href="/integrations-directory" className={linkClass}>
              Integrations directory
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
