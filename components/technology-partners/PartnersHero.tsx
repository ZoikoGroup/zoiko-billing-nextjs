import Image from "next/image";
import Link from "next/link";

import { Eyebrow, heading } from "./shared";

export default function PartnersHero() {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-12 lg:pb-20 lg:pt-12 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-14 lg:px-7">
        <div className="flex w-full flex-col items-start gap-4 pt-2 lg:flex-1">
          <Eyebrow>Technology Partners</Eyebrow>

          <h1
            className={`${heading} !mb-0 !text-[34px] !leading-[1.16] !tracking-[-0.03em] !text-[#0F172A] sm:!text-[42px] lg:!text-5xl lg:!leading-[55px]`}
          >
            Approved technology partner relationships,{" "}
            <span className="!text-[#1F6FEB]">
              with the scope that defines each one.
            </span>
          </h1>

          <p className="!mb-0 max-w-[688px] text-base !leading-7 !text-[#5B6B85]">
            This is a directory of relationships Zoiko has approved for
            publication. A listing tells you a relationship exists and what its
            stated scope is — it does not tell you an integration works for your
            configuration, and it is not an endorsement.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#two-surfaces"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1F6FEB] px-6 py-2.5 text-sm font-semibold !leading-6 !text-white shadow-[0px_8px_20px_0px_rgba(31,111,235,0.26)] transition-colors hover:bg-[#1A5FCC]"
            >
              Explore technology partners
            </Link>
            <Link
              href="/integrations-directory"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E5EAF2] bg-white px-6 py-2.5 text-sm font-semibold !leading-6 !text-[#0F172A] transition-colors hover:bg-[#F5F7FB]"
            >
              Integrations directory
            </Link>
          </div>

          {/* Scope note — blue rule on the leading edge, per Figma. */}
          <div className="mt-2 w-full max-w-[562px] rounded-r-[10px] border border-l-[3px] border-[#E5EAF2] border-l-[#1F6FEB] bg-white px-4 pb-4 pt-3.5">
            <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">
              A partner relationship and an integration are separate records.
              Either can exist without the other, and this page never infers one
              from the other.
            </p>
          </div>
        </div>

        <div className="w-full lg:mt-8 lg:w-[44%] lg:shrink-0">
          <Image
            src="/images/technology-partners/hero-partner-network.png"
            alt="A handshake at the centre of a ring of technology capability icons"
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
