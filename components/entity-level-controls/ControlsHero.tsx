import Image from "next/image";
import Link from "next/link";

import { Eyebrow, heading } from "./shared";

export default function ControlsHero() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#F9FAFB] px-4 pb-16 pt-10 sm:px-6 lg:px-12 lg:pb-20 lg:pt-12 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-14 lg:px-7">
        <div className="flex w-full flex-col items-start gap-3.5 pt-2 lg:flex-1">
          <Eyebrow>Entity-Level Controls</Eyebrow>

          <h1
            className={`${heading} !mb-0 !text-[34px] !leading-[1.16] !tracking-[-0.03em] !text-[#0F172A] sm:!text-[42px] lg:!text-5xl lg:!leading-[55px]`}
          >
            Control who can configure, review, approve, and act{" "}
            <span className="!text-[#1F6FEB]">for each billing entity.</span>
          </h1>

          <p className="!mb-0 max-w-[688px] text-base !leading-7 !text-[#5D7192]">
            Apply entity-specific access, configuration ownership, approval
            policy, delegation and evidence — without turning central
            administration into unrestricted cross-entity financial authority.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Link
              href="/book-demo"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1F6FEB] px-6 py-2.5 text-sm font-semibold !leading-6 !text-white shadow-[0px_8px_20px_0px_rgba(31,111,235,0.26)] transition-colors hover:bg-[#1A5FCC]"
            >
              Get Demo
            </Link>
            <Link
              href="/multi-entity-billing"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#DFE5EE] bg-white px-6 py-2.5 text-sm font-semibold !leading-6 !text-[#0F172A] transition-colors hover:bg-[#F7F8FA]"
            >
              Review Multi-Entity Billing
            </Link>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-[#EEF1F6] p-4 lg:flex-1">
          <Image
            src="/images/entity-level-controls/hero-control-cycle.png"
            alt="Configure, review, approve and act permissions circling a single billing entity"
            width={523}
            height={540}
            priority
            sizes="(min-width: 1024px) 548px, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
