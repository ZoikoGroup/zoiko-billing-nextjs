import Image from "next/image";
import Link from "next/link";

export default function ReadinessChecklistHeroSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] text-slate-900 sm:py-18 md:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10 px-5 sm:px-8 md:px-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16 xl:px-20">
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[50%] xl:w-[52%]">
          {/* MOBILE BREADCRUMB (lg:hidden) */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 lg:hidden"
          >
            <Link href="/" className="transition hover:text-slate-800">
              Home
            </Link>
            <span>/</span>
            <Link href="/global-billing" className="transition hover:text-slate-800">
              Global Billing
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900">Readiness Checklist</span>
          </nav>

          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-2.5 sm:mb-6">
            <span className="h-0.5 w-6 shrink-0 bg-[#1D70F5]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
              Global Billing Readiness Checklist
            </span>
          </div>

          {/* HEADING */}
          <h1 className="!font-[family-name:var(--font-jakarta)] !m-0 !text-[34px] font-extrabold !leading-[1.12] !tracking-[-0.035em] text-[#091127] sm:!text-[44px] md:!text-[50px] lg:!text-[48px] xl:!text-[54px]">
            Thirty&ndash;two prompts, <br className="hidden sm:inline" />
            five statuses,{" "}
            <span className="text-[#1D70F5]">
              and no <br className="hidden sm:inline" />
              score.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="!m-0 mt-5 max-w-[540px] text-sm leading-relaxed text-[#5d7192] sm:text-base">
            Work through eight domains, mark what you have verified against a
            source, and export the result. The counts stay separate because a
            single number would turn a working document into a certificate.
          </p>

          {/* DESKTOP CTA BUTTONS (Unchanged for lg+) */}
          <div className="mt-8 hidden w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center lg:flex">
            <Link
              href="/signup"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#1D70F5] px-7 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(31,111,235,0.26)] transition hover:bg-blue-600 sm:w-auto"
            >
              Create Account
            </Link>

            <Link
              href="/book-demo"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 sm:w-auto"
            >
              Book Demo
            </Link>
          </div>

          {/* MOBILE ACTION BUTTONS (lg:hidden) */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 lg:hidden">
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1D70F5] px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-600"
            >
              Print / export
            </button>
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              Readiness summary
            </button>
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
            >
              Reset checklist
            </button>
          </div>

          {/* MOBILE BLUE LEFT-BORDER CALLOUT (lg:hidden) */}
          <div className="mt-5 rounded-r-xl border-l-[3px] border-[#1D70F5] bg-white p-3.5 text-left text-xs leading-relaxed text-slate-600 shadow-sm lg:hidden">
            Nothing is stored or transmitted. Reset clears local state only &mdash; it never alters an external system.
          </div>

          {/* MOBILE DIRECT ANSWER CARD (lg:hidden) */}
          <div className="mt-4 rounded-2xl border border-slate-200/90 bg-white p-5 text-left shadow-[0_4px_20px_rgba(15,23,42,0.03)] lg:hidden">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Direct Answer
            </span>
            <p className="!m-0 mt-2 text-xs leading-relaxed text-slate-700">
              Every item starts at <strong className="font-semibold text-slate-900">Not assessed</strong>, and that is never treated as passed. The checklist records what your team has verified against a governed source, what needs specialist review, what is blocked by a dependency, and what is deliberately out of scope &mdash; as four separate counts that cannot be averaged. <strong className="font-semibold text-slate-900">&ldquo;Verified&rdquo; means you have a source basis for the item</strong>, not that Zoiko Billing has certified anything, and the language throughout stays in reviewed, verified against source, needs review and blocked.
            </p>
          </div>

          {/* MOBILE NO-SCORE PINK WARNING BANNER (lg:hidden) */}
          <div className="mt-4 rounded-xl border border-rose-200/90 bg-[#fff1f2] p-4 text-left text-xs leading-relaxed text-[#9f1239] shadow-sm lg:hidden">
            <strong className="font-bold text-[#881337]">
              The no-score rule is the reason this page can be useful at all.
            </strong>{" "}
            A readiness percentage is the single most requested feature on a checklist and the one that destroys it: 88% reads as nearly ready when the missing 12% is an unverified tax position.{" "}
            <strong className="font-bold text-[#881337]">
              Counts that stay separate force the reader to look at which items are open
            </strong>{" "}
            rather than how many.
          </div>
        </div>

        {/* RIGHT ILLUSTRATION (Unchanged for lg+) */}
        <div className="hidden w-full lg:block lg:w-[50%] xl:w-[48%]">
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:rounded-[32px]">
            <Image
              src="/images/readiness-checklist/rc1.png"
              alt="Thirty-two prompts, five statuses, and no score illustration"
              width={700}
              height={500}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
