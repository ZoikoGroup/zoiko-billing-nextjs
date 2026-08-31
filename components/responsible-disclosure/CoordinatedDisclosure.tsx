import Link from "next/link";

type Aspect = {
  title: string;
  body: React.ReactNode;
};

const ASPECTS: Aspect[] = [
  {
    title: "Timing",
    body: (
      <>
        Discussed during coordination.{" "}
        <span className="font-bold">No fixed deadline is stated here</span>, and
        none should be assumed from industry practice.
      </>
    ),
  },
  {
    title: "Advisory content",
    body: (
      <>
        Security Advisories owns published notices.{" "}
        <span className="font-bold">
          This page publishes no advisory content itself
        </span>{" "}
        and may only cross-link later.
      </>
    ),
  },
  {
    title: "Credit",
    body: (
      <>
        Offered per approved policy, with the researcher&apos;s preference
        respected where the process allows it.
      </>
    ),
  },
  {
    title: "Your own publication",
    body: (
      <>
        Coordinate before publishing. Unilateral disclosure may affect whatever
        protection applies to you.
      </>
    ),
  },
  {
    title: "Incident status",
    body: (
      <>
        <span className="font-bold">
          A vulnerability report does not become a public incident
        </span>{" "}
        unless System Status authority says so.
      </>
    ),
  },
  {
    title: "Researcher data",
    body: (
      <>
        Handled per{" "}
        <Link
          href="/privacy-and-data-governance"
          className="font-semibold !text-[#1F6FEB] hover:underline"
        >
          Privacy &amp; Data Governance
        </Link>
        . Privacy requests use privacy authority, not this route.
      </>
    ),
  },
];

export default function CoordinatedDisclosure() {
  return (
    <section
      id="coordinated-disclosure"
      className="w-full bg-[#f7f8fa] px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Coordinated disclosure
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Publication is coordinated, not unilateral.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            Six aspects, each dependent on approved policy rather than on
            convention borrowed from elsewhere.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-4 pt-5 sm:grid-cols-2 lg:grid-cols-3">
          {ASPECTS.map((aspect) => (
            <div
              key={aspect.title}
              className="
                flex h-full flex-col items-start gap-1.5
                rounded-2xl border border-[#dfe5ee] bg-white px-5 py-5
                shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]
              "
            >
              <h3 className="!m-0 text-sm font-bold !leading-6 !text-[#091127] font-[family-name:var(--font-jakarta)]">
                {aspect.title}
              </h3>

              <p className="m-0 text-xs font-normal !leading-5 !text-[#5d7192]">
                {aspect.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
