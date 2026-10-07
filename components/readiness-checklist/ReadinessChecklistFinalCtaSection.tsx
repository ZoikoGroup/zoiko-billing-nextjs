import Link from "next/link";

export default function ReadinessChecklistFinalCtaSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(115deg, #1f6feb 0%, #255ed8 35%, #3b4ec7 70%, #5849b9 100%)",
      }}
      className="w-full px-6 py-14 font-[family-name:var(--font-inter)] text-white sm:px-10 sm:py-18 md:px-16 md:py-20 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start text-left">
        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 text-2xl font-bold tracking-[-0.02em] !text-white sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.2]">
          Five counts that never become one.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3 sm:mt-4 max-w-[620px] text-xs leading-relaxed text-white/85 sm:text-sm md:text-[15px]">
          Because the useful question is which items are open &mdash; and an average answers a different one.
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:mt-8 sm:gap-4">
          <Link
            href="#checklist-dashboard"
            style={{ color: "#091127" }}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-xs font-bold shadow-sm transition hover:bg-slate-100 sm:px-7 sm:py-3 sm:text-sm"
          >
            Back to checklist
          </Link>
          <Link
            href="/book-demo"
            style={{ color: "#ffffff" }}
            className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/5 px-6 py-2.5 text-xs font-semibold backdrop-blur-sm transition hover:bg-white/15 sm:px-7 sm:py-3 sm:text-sm"
          >
            Request a workshop
          </Link>
        </div>

        {/* METADATA FOOTER */}
        <div className="mt-10 flex flex-col gap-1 text-[11px] text-white/80 sm:mt-14 sm:text-xs md:mt-16">
          <div>
            Program sequence:{" "}
            <Link
              href="/global-billing"
              style={{ color: "#ffffff" }}
              className="underline underline-offset-2 hover:opacity-80"
            >
              Global Billing Guide
            </Link>
            . Coverage:{" "}
            <Link
              href="/jurisdiction-availability"
              style={{ color: "#ffffff" }}
              className="underline underline-offset-2 hover:opacity-80"
            >
              Jurisdiction Availability
            </Link>
            . Capability scope:{" "}
            <Link
              href="/global-billing"
              style={{ color: "#ffffff" }}
              className="underline underline-offset-2 hover:opacity-80"
            >
              Global Billing
            </Link>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
