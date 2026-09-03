import Link from "next/link";

type Handoff = {
  title: string;
  body: React.ReactNode;
};

const HANDOFFS: Handoff[] = [
  {
    title: "Security controls",
    body: (
      <>
        Security Overview owns the control program.{" "}
        <span className="font-bold">
          No encryption or control statement is restated here.
        </span>
      </>
    ),
  },
  {
    title: "Evidence & certifications",
    body: (
      <>
        Trust Center holds artifacts.{" "}
        <span className="font-bold">No certification is duplicated</span> into
        this page.
      </>
    ),
  },
  {
    title: "Recoverability",
    body: (
      <>
        <Link
          href="/business-continuity"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Business Continuity
        </Link>{" "}
        governs recovery.{" "}
        <span className="font-bold">An RPO is not a retention period</span> —
        the two are separate authorities.
      </>
    ),
  },
  {
    title: "Accessibility",
    body: (
      <>
        <Link
          href="/accessibility"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Accessibility
        </Link>{" "}
        covers barrier reporting, which follows privacy authority for its own
        intake.
      </>
    ),
  },
  {
    title: "Product behavior",
    body: (
      <>
        <Link
          href="/developers-api-documentation"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Documentation
        </Link>{" "}
        owns admin settings, exports, permissions and workflows.
      </>
    ),
  },
  {
    title: "Account-specific questions",
    body: (
      <>
        <Link
          href="/contact-support"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Contact Support
        </Link>
        , using approved minimal-data intake.
      </>
    ),
  },
];

export default function SecurityTrustHandoffs() {
  return (
    <section
      id="security-trust-handoffs"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Security, trust &amp; continuity handoffs
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 !text-2xl !tracking-normal font-extrabold !leading-8 text-balance font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Six adjacent questions with other
            owners.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Privacy governance neighbors several domains, and the boundaries
            between them are where claims usually leak.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HANDOFFS.map((handoff) => (
            <div
              key={handoff.title}
              className="
                flex h-full flex-col items-start gap-1.5
                rounded-2xl border border-[#dfe5ee] bg-white px-5 py-5
                shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]
              "
            >
              <h3 className="!m-0 text-sm font-bold !leading-6 !text-[#091127] font-[family-name:var(--font-jakarta)]">
                {handoff.title}
              </h3>

              <p className="m-0 text-xs font-normal !leading-5 !text-[#5d7192]">
                {handoff.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
