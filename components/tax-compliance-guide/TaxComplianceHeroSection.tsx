import Image from "next/image";
import Link from "next/link";

export default function TaxComplianceHeroSection() {
  return (
    <section className="w-full overflow-hidden bg-white font-[family-name:var(--font-inter)]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pb-12
          pt-8

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
        <div className="w-full min-w-0 lg:w-[50%] xl:w-[52%]">
          {/* MOBILE BREADCRUMB */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 lg:hidden"
          >
            <Link href="/" className="transition hover:text-slate-800">
              Home
            </Link>
            <span>|</span>
            <Link href="/global-billing-guide" className="transition hover:text-slate-800">
              Global Billing
            </Link>
            <span>|</span>
            <span className="font-semibold text-slate-900">Tax Compliance Guide</span>
          </nav>

          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-2.5 sm:mb-6">
            <span className="h-0.5 w-6 shrink-0 bg-[#1D70F5]" />
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.18em]
                text-[#7890b2]
                sm:text-xs
              "
            >
              Tax Compliance Guide
            </span>
          </div>

          {/* DESKTOP HEADING (Unchanged for lg+) */}
          <h1
            className="!font-[family-name:var(--font-jakarta)] 
              !m-0
              hidden
              lg:block
              w-full
              !text-[52px]
              xl:!text-[56px]
              !font-extrabold
              !leading-[1.12]
              !tracking-[-0.035em]
              !text-[#091127]
            "
          >
            You can keep reading. <br />
            <span className="text-[#1D70F5]">
              The unresolved item <br className="hidden sm:inline" /> stays unresolved.
            </span>
          </h1>

          {/* MOBILE HEADING */}
          <h1
            className="!font-[family-name:var(--font-jakarta)] 
              !m-0
              block
              lg:hidden
              w-full
              !text-[28px]
              sm:!text-[36px]
              !font-extrabold
              !leading-[1.16]
              !tracking-[-0.03em]
              !text-[#091127]
            "
          >
            You can keep reading. <span className="text-[#1D70F5]">The unresolved<br />item stays unresolved.</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              !mt-5
              sm:!mt-6
              w-full
              max-w-[560px]
              text-[14px]
              font-normal
              leading-relaxed
              text-[#5d7192]
              sm:text-base
              sm:leading-7
            "
          >
            A seven-phase sequence for tax and compliance questions in billing. The
            guide never blocks learning — but an open stop condition from phase 2 is
            still open at phase 7, and nothing downstream is presented as approved
            while it stands.
          </p>

          {/* DESKTOP CTA BUTTONS (Unchanged for lg+) */}
          <div
            className="
              mt-7
              hidden
              lg:flex
              w-full
              flex-col
              gap-3.5
              sm:mt-8
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
            "
          >
            <Link
              href="/create-account"
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
              Create Account
            </Link>

            <Link
              href="/book-demo"
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
                shadow-sm
                transition
                hover:bg-slate-50
                sm:w-auto
              "
            >
              Book Demo
            </Link>
          </div>

          {/* MOBILE CTA BUTTONS */}
          <div
            className="
              mt-6
              flex
              lg:hidden
              w-full
              flex-wrap
              items-center
              gap-2.5
            "
          >
            <Link
              href="#phase-1"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                rounded-full
                bg-[#1D70F5]
                px-5
                text-xs
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-blue-600
              "
            >
              Start at phase 1
            </Link>

            <Link
              href="#stop-states"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                px-5
                text-xs
                font-semibold
                text-slate-800
                shadow-xs
                transition
                hover:bg-slate-50
              "
            >
              Stop &amp; hold states
            </Link>

            <Link
              href="#role-views"
              className="
                inline-flex
                items-center
                gap-1
                text-xs
                font-semibold
                text-[#1D70F5]
                hover:underline
                ml-1
              "
            >
              Role views →
            </Link>
          </div>

          {/* MOBILE CALLOUT: Orientation only */}
          <div className="mt-5 block rounded-xl border border-blue-100 border-l-4 border-l-[#1D70F5] bg-white p-3.5 shadow-sm text-xs text-[#5d7192] lg:hidden">
            Orientation only. Approved orientation is still not a compliance certification.
          </div>

          {/* MOBILE DIRECT ANSWER CARD */}
          <div className="mt-5 block rounded-2xl border border-[#dfe5ee] bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)] lg:hidden">
            <p className="!m-0 text-[10px] font-bold uppercase tracking-wider text-[#7890b2]">
              Direct Answer
            </p>
            <p className="!m-0 mt-2 text-xs leading-relaxed text-[#5d7192]">
              The failure this guide is built against is the quiet one: an unresolved question at phase 2 that nobody revisits, while phases 3 to 7 proceed as though it were settled. Each phase carries a stop condition, and unresolved conditions{" "}
              <strong className="font-semibold text-[#091127]">
                carry forward visibly
              </strong>{" "}
              rather than being cleared by progress. The sequence produces a scoped question set with named specialist owners — never a rate, a taxability conclusion, a filing obligation or a compliance determination.
            </p>
          </div>

          {/* MOBILE SEQUENCING RULE ALERT CARD */}
          <div className="mt-4 block rounded-2xl border border-rose-200 bg-rose-50/70 p-4 text-xs leading-relaxed text-rose-950 lg:hidden">
            <strong className="font-semibold text-rose-950">
              The sequencing rule is the strongest in this build, and it inverts the usual completion model.
            </strong>{" "}
            Most guides treat reaching the end as evidence the middle was satisfied. Here,{" "}
            <strong className="font-semibold text-rose-950">
              continuing is explicitly permitted and explicitly meaningless as a signal
            </strong>{" "}
            — a team can read all seven phases with four conditions open, and the guide will say so at every step rather than letting momentum imply resolution.
          </div>
        </div>

        {/* RIGHT ILLUSTRATION (DESKTOP ONLY) */}
        <div
          className="
            mt-10
            hidden
            lg:block
            lg:w-[48%]
            xl:w-[46%]
          "
        >
          <div
            className="
              relative
              mx-auto
              aspect-square
              w-full
              max-w-[520px]
              overflow-hidden
              rounded-[28px]
              shadow-[0_20px_50px_rgba(31,111,235,0.12)]
            "
          >
            <Image
              src="/images/tax-compliance-guide/tcg1.png"
              alt="Tax compliance guide unresolved items workflow illustration"
              width={540}
              height={540}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
