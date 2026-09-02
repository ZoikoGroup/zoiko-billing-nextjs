import Image from "next/image";
import Link from "next/link";

import { Eyebrow, heading } from "./shared";

export default function GroupHero() {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-12 lg:pb-20 lg:pt-12 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-14 lg:px-7">
        <div className="flex w-full flex-col items-start gap-4 pt-2 lg:flex-1">
          <Eyebrow>Zoiko Group</Eyebrow>

          <h1
            className={`${heading} !mb-0 !text-[34px] !leading-[1.16] !tracking-[-0.03em] !text-[#0F172A] sm:!text-[42px] lg:!text-5xl lg:!leading-[55px]`}
          >
            Zoiko Billing is a Zoiko Group product.{" "}
            <span className="!text-[#1F6FEB]">
              Here is what that does and does not mean.
            </span>
          </h1>

          <p className="!mb-0 max-w-[688px] text-base !leading-7 !text-[#5B6B85]">
            Group-level corporate information is owned by Zoiko Group and
            published on its own destination. This page explains the
            relationship, states which questions the group answers rather than
            Zoiko Billing, and hands off cleanly.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* No group destination is wired yet — this stays inert rather than
                pointing at a page that only sounds right. */}
            <Link
              href="#"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1F6FEB] px-6 py-2.5 text-sm font-semibold !leading-6 !text-white shadow-[0px_8px_20px_0px_rgba(31,111,235,0.26)] transition-colors hover:bg-[#1A5FCC]"
            >
              Visit Zoiko Group
            </Link>
            <Link
              href="#two-relationships"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E5EAF2] bg-white px-6 py-2.5 text-sm font-semibold !leading-6 !text-[#0F172A] transition-colors hover:bg-[#F5F7FB]"
            >
              Understand the relationship
            </Link>
          </div>

          {/* Scope note — blue rule on the leading edge, per Figma. */}
          <div className="mt-2 w-full max-w-[562px] rounded-r-[10px] border border-l-[3px] border-[#E5EAF2] border-l-[#1F6FEB] bg-white px-4 pb-3.5 pt-6">
            <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">
              A group relationship establishes corporate context. It does not
              establish who contracts with you, who employs you, or that
              group-wide claims apply to this product.
            </p>
          </div>
        </div>

        <div className="w-full lg:mt-8 lg:w-[44%] lg:shrink-0">
          <Image
            src="/images/zoiko-group/hero-group-context.png"
            alt="A group tier of companies sitting above the Zoiko Billing product tier, connected but distinct"
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
