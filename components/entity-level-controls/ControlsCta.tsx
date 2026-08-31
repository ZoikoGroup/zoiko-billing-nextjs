import Image from "next/image";
import Link from "next/link";

import { heading } from "./shared";

const outlineCta =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold !leading-6 !text-white transition-colors hover:bg-white/10";

export default function ControlsCta() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24">
      {/* A rounded dark card on the page ground, not a full-bleed band. */}
      <div className="mx-auto w-full max-w-[1240px] overflow-hidden rounded-3xl bg-[#0C1A33] px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-14">
          <div className="flex w-full flex-col items-start gap-4 lg:flex-1">
            <h2
              className={`${heading} !mb-0 !text-[26px] !leading-8 !tracking-[-0.02em] !text-white sm:!text-[30px] sm:!leading-10 lg:!text-[34px]`}
            >
              Give each entity the right control boundary.
            </h2>

            <p className="!mb-0 max-w-[480px] text-sm !leading-6 !text-[#A9B4C4]">
              Make every allowed or blocked sensitive action explainable, scoped,
              current and reviewable — without granting anyone a global wildcard
              for convenience.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/multi-entity-billing"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold !leading-6 !text-[#0F172A] transition-colors hover:bg-[#EEF2F7]"
              >
                Explore Multi-Entity Billing
              </Link>
              <Link href="/pricing-and-plans" className={outlineCta}>
                View pricing
              </Link>
              <Link href="/book-demo" className={outlineCta}>
                Book a demo
              </Link>
            </div>
          </div>

          <div className="w-full rounded-2xl bg-[#EEF1F8] p-3 lg:w-[45%] lg:shrink-0">
            <Image
              src="/images/entity-level-controls/cta-entity-boundaries.png"
              alt="Six billing entities, each ringed by its own coloured control boundary around a shared identity core"
              width={479}
              height={317}
              sizes="(min-width: 1024px) 520px, 100vw"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
