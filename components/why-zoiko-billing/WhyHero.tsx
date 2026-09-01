import Image from "next/image";
import Link from "next/link";

import { Eyebrow, heading } from "./shared";

export default function WhyHero() {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-12 lg:pb-20 lg:pt-12 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-14 lg:px-7">
        <div className="flex w-full flex-col items-start gap-3.5 pt-2 lg:flex-1">
          <Eyebrow>Why Zoiko Billing</Eyebrow>

          <h1
            className={`${heading} !mb-0 !text-[34px] !leading-[1.16] !tracking-[-0.03em] !text-[#0F172A] sm:!text-[42px] lg:!text-5xl lg:!leading-[55px]`}
          >
            Decision criteria,{" "}
            <span className="!text-[#1F6FEB]">not a list of superlatives.</span>
          </h1>

          <p className="!mb-0 max-w-[688px] text-base !leading-7 !text-[#5D7192]">
            This page explains how Zoiko Billing is designed and what that design
            is good for — so you can judge fit against your own billing
            operation. It also states plainly where it fits poorly and what it
            does not promise, because those are the parts a buyer needs and
            rarely gets.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <Link
              href="#why-in-six-reasons"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1F6FEB] px-6 py-2.5 text-sm font-semibold !leading-6 !text-white shadow-[0px_8px_20px_0px_rgba(31,111,235,0.26)] transition-colors hover:bg-[#1A5FCC]"
            >
              Explore why it fits
            </Link>
            <Link
              href="#decision-states"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#DFE5EE] bg-white px-6 py-2.5 text-sm font-semibold !leading-6 !text-[#0F172A] transition-colors hover:bg-[#F7F8FA]"
            >
              Check fit honestly
            </Link>
          </div>

          {/* Ownership note — blue rule on the leading edge, per Figma. */}
          <div className="mt-2 w-full max-w-[562px] rounded-r-[10px] border border-l-[3px] border-[#DFE5EE] border-l-[#1F6FEB] bg-white px-4 pb-4 pt-3.5">
            <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">
              Capability truth belongs to Product and Documentation. Price
              belongs to Pricing. Assurance evidence belongs to Trust Center.
              This page owns the reasoning.
            </p>
          </div>
        </div>

        <div className="w-full lg:mt-8 lg:w-[44%] lg:shrink-0">
          <Image
            src="/images/why-zoiko-billing/hero-decision-criteria.png"
            alt="A balance weighing a tick against a cross, surrounded by evaluation criteria, with two paths leading to it"
            width={511}
            height={457}
            priority
            sizes="(min-width: 1024px) 511px, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
