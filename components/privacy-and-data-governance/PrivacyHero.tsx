import Image from "next/image";
import Link from "next/link";

export default function PrivacyHero() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pb-14
          pt-10

          sm:px-8
          sm:pb-16
          sm:pt-12

          md:px-10
          md:pb-20

          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:gap-10
          lg:px-14
          lg:py-20

          xl:gap-14
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[52%]">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-6 shrink-0 bg-[#1F6FEB] opacity-75" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                !leading-4
                tracking-[0.16em]
                !text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Privacy &amp; Data Governance
            </span>
          </div>

          {/* MOBILE + TABLET HEADING */}
          <h1
            className="
              !m-0
              !block
              !max-w-[700px]
              !text-[40px]
              !font-extrabold
              font-[family-name:var(--font-jakarta)]
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-[#091127]

              sm:!text-[46px]
              md:!text-[50px]

              lg:!hidden
            "
          >
            How billing data is governed —{" "}
            <span className="!text-[#1F6FEB]">
              including where obligations collide.
            </span>
          </h1>

          {/* DESKTOP HEADING */}
          <h1
            className="
              !m-0
              !hidden
              !font-extrabold
              font-[family-name:var(--font-jakarta)]
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-[#091127]

              lg:!block
              lg:!text-[44px]

              xl:!text-[50px]
            "
          >
            <span className="block">How billing data is</span>

            <span className="block">
              governed — <span className="!text-[#1F6FEB]">including</span>
            </span>

            <span className="block !text-[#1F6FEB]">where obligations</span>

            <span className="block !text-[#1F6FEB]">collide.</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              w-full
              max-w-[687px]
              text-[15px]
              font-normal
              !leading-7
              !text-[#5d7192]

              sm:mt-9
              sm:text-base

              lg:mt-0

              xl:mt-9
            "
          >
            Billing records can be subject to privacy rights, financial-record
            retention, contractual duties and audit obligations{" "}
            <span className="font-bold">at the same time</span>. This page
            explains the governance model and surfaces those boundaries rather
            than promising instant deletion or indefinite retention.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              gap-3

              sm:mt-8
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
            "
          >
            <Link
              href="#data-lifecycle"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#1F6FEB]
                px-6
                text-sm
                font-semibold
                !leading-6
                !text-white
                shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                transition
                hover:bg-[#1a5ecc]

                sm:w-auto
              "
            >
              Explore data governance
            </Link>

            <Link
              href="#privacy-rights-routing"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-[#dfe5ee]
                bg-white
                px-6
                text-sm
                font-semibold
                !leading-6
                !text-[#091127]
                transition
                hover:bg-[#f8faff]

                sm:w-auto
              "
            >
              Privacy rights
            </Link>
          </div>

          {/* AUTHORITY NOTE */}
          <div
            className="
              mt-5
              w-full
              max-w-[562px]
              rounded-r-[10px]
              border
              border-l-[3px]
              border-[#dfe5ee]
              border-l-[#1F6FEB]
              bg-white
              px-4
              pb-4
              pt-3.5

              sm:mt-6
            "
          >
            <p className="m-0 text-sm font-normal !leading-5 !text-[#5d7192]">
              The binding Privacy Notice and your agreement govern. This page
              explains how governance works; it does not restate or replace
              legal text.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            mt-10
            w-full

            sm:mt-12

            md:mt-14

            lg:mt-8
            lg:w-[44%]

            xl:w-[43%]
          "
        >
          <div
            className="
              relative
              mx-auto
              aspect-[557/519]
              w-full
              max-w-[557px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/privacy-and-data-governance/privacy-hero.png"
              alt="Zoiko Billing privacy and data governance"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                557px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
