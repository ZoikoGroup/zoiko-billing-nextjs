import Image from "next/image";
import Link from "next/link";

import { Eyebrow, heading } from "./shared";

export default function InterEntityHero() {
  return (
    <section className="w-full bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-12 lg:pb-20 lg:pt-12 xl:px-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 lg:flex-row lg:gap-14 lg:px-7">
        <div className="flex w-full flex-col items-start gap-3.5 pt-2 lg:flex-1">
          <Eyebrow>Inter-Entity Billing</Eyebrow>

          <h1
            className={`${heading} !mb-0 !text-[34px] !leading-[1.16] !tracking-[-0.03em] !text-[#0F172A] sm:!text-[42px] xl:!text-5xl xl:!leading-[55px]`}
          >
            Charges between your own entities{" "}
            <span className="!text-[#1F6FEB]">need more approvals, not fewer.</span>
          </h1>

          <p className="!mb-0 max-w-[688px] text-base !leading-7 !text-[#5D7192]">
            An intercompany charge has a business owner, a specialist review, an
            accounting acceptance and a downstream outcome — four decisions that a
            single &ldquo;Approved&rdquo; label hides.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 pb-2 pt-3">
            <a
              href="#six-part-model"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1F6FEB] px-6 py-2.5 text-sm font-semibold !leading-6 !text-white shadow-[0px_8px_20px_0px_rgba(31,111,235,0.26)] transition-colors hover:bg-[#1A5FCC]"
            >
              The six-part model
            </a>
            <Link
              href="/book-demo"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#DFE5EE] bg-white px-6 py-2.5 text-sm font-semibold !leading-6 !text-[#0F172A] transition-colors hover:bg-[#F7F8FA]"
            >
              Book Demo
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[530px] lg:flex-1">
          <Image
            src="/images/inter-entity-billing/hero-intercompany-approvals.png"
            alt="Four entity buildings exchanging charges through a central review desk with separate approval checks"
            width={530}
            height={500}
            priority
            sizes="(min-width: 1024px) 530px, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
