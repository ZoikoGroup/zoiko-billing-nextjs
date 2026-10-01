import Image from "next/image";
import Link from "next/link";

export default function DevelopersHeroSection() {
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
          lg:items-center
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
          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
            <span className="h-px w-5 shrink-0 bg-slate-400" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-slate-500
                sm:text-xs
              "
            >
              DEVELOPERS · API OVERVIEW
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="!font-[family-name:var(--font-jakarta)] 
              !m-0
              !max-w-[700px]
              !text-3xl
              !font-extrabold
              !leading-[1.12]
              !tracking-[-0.035em]
              !text-slate-900
              sm:!text-4xl
              lg:!text-[50px]
              xl:!text-[52px]
            "
          >
            Build billing workflows <br className="hidden sm:inline" />
            <span className="text-[#1D70F5]">
              on governed records.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              !mt-4
              w-full
              max-w-[580px]
              text-xs
              font-normal
              leading-relaxed
              text-slate-500
              sm:text-sm
              lg:text-[15px]
              lg:leading-7
            "
          >
            Use Zoiko Billing APIs to connect billing operations with the
            systems that create, review, issue, collect, reconcile and report
            on financial records — while preserving the controls that
            determine who can change what and when.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="
              mt-6
              flex
              w-full
              flex-col
              gap-3
              sm:mt-7
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
            "
          >
            <Link
              href="/developers-api-documentation"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#1D70F5]
                px-7
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                transition
                hover:bg-blue-600
                sm:w-auto
              "
            >
              API Documentation
            </Link>

            <Link
              href="/developer-sandbox"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                px-7
                text-sm
                font-semibold
                text-slate-900
                transition
                hover:bg-slate-50
                sm:w-auto
              "
            >
              Developer Sandbox
            </Link>
          </div>

          {/* NOTICE CALLOUT BOX */}
          <div className="relative mt-6 max-w-[540px] overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 text-xs text-slate-500 shadow-sm">
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#1D70F5]" />
            <p className="pl-2 font-normal leading-relaxed">
              Technical details shown on this page are overview-level. Canonical endpoints,
              schemas, authentication methods, event definitions and limits belong in the
              corresponding developer documentation.
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

            lg:mt-0
            lg:w-[44%]

            xl:w-[43%]
          "
        >
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[547px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/developers/dao1.png"
              alt="Build billing workflows on governed records"
              width={547}
              height={547}
              priority
              className="block h-auto w-full object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                547px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}