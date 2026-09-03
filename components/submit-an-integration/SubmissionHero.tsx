import Image from "next/image";
import Link from "next/link";

import { Eyebrow, heading } from "./shared";

export default function SubmissionHero() {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-12 lg:pb-20 lg:pt-12 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-14 lg:px-7">
        <div className="flex w-full flex-col items-start gap-4 pt-2 lg:flex-1">
          <Eyebrow>Submit an Integration</Eyebrow>

          <h1
            className={`${heading} !mb-0 !text-[34px] !leading-[1.16] !tracking-[-0.03em] !text-[#0F172A] sm:!text-[42px] lg:!text-5xl lg:!leading-[55px]`}
          >
            Propose an integration for technical review —{" "}
            <span className="!text-[#1F6FEB]">with redacted evidence only.</span>
          </h1>

          <p className="!mb-0 max-w-[688px] text-base !leading-7 !text-[#5B6B85]">
            This is the technical submission route. It reviews what you have
            built or propose to build against the current API contract, and it is
            deliberately separate from partnership, publication and support.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#submission-readiness"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1F6FEB] px-6 py-2.5 text-sm font-semibold !leading-6 !text-white shadow-[0px_8px_20px_0px_rgba(31,111,235,0.26)] transition-colors hover:bg-[#1A5FCC]"
            >
              Check submission readiness
            </Link>
            <Link
              href="/developers-api-documentation"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E5EAF2] bg-white px-6 py-2.5 text-sm font-semibold !leading-6 !text-[#0F172A] transition-colors hover:bg-[#F5F7FB]"
            >
              Review API Documentation
            </Link>
          </div>

          {/* Scope note — blue rule on the leading edge, per Figma. */}
          <div className="mt-2 w-full max-w-[562px] rounded-r-[10px] border border-l-[3px] border-[#E5EAF2] border-l-[#1F6FEB] bg-white px-4 pb-4 pt-3.5">
            <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">
              Technical truth — API behavior, authentication, webhooks, sandbox —
              belongs to Developers. This page references it and never rewrites
              it.
            </p>
          </div>
        </div>

        <div className="w-full lg:mt-8 lg:w-[44%] lg:shrink-0">
          <Image
            src="/images/submit-an-integration/hero-submission.png"
            alt="An integration submission passing through redaction checks before technical review"
            width={511}
            height={511}
            priority
            sizes="(min-width: 1024px) 511px, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
