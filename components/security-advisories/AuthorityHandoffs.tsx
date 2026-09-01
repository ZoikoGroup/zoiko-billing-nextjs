import Link from "next/link";

type Handoff = {
  title: string;
  body: React.ReactNode;
};

const linkClass = "font-semibold !text-[#1F6FEB] hover:underline";

const HANDOFFS: Handoff[] = [
  {
    title: "Is the service down?",
    body: (
      <>
        System Status.{" "}
        <span className="font-bold">
          An advisory may link a related incident only when explicitly related
        </span>{" "}
        — and a vulnerability is not an incident by default.
      </>
    ),
  },
  {
    title: "I found a new issue",
    body: (
      <>
        <Link href="/responsible-disclosure" className={linkClass}>
          Responsible Disclosure
        </Link>
        .{" "}
        <span className="font-bold">
          No new report intake happens on this page.
        </span>
      </>
    ),
  },
  {
    title: "Am I affected in my account?",
    body: (
      <>
        <Link href="/contact-support" className={linkClass}>
          Contact Support
        </Link>{" "}
        where the advisory cannot determine it from stated criteria.
      </>
    ),
  },
  {
    title: "What certifications do you hold?",
    body: (
      <>
        Trust Center owns assurance evidence. An advisory may be referenced as
        evidence, but{" "}
        <span className="font-bold">
          Trust Center does not own advisory wording
        </span>
        .
      </>
    ),
  },
  {
    title: "How is security governed?",
    body: (
      <>
        Security Overview owns the program explanation.{" "}
        <span className="font-bold">
          No advisory content is duplicated there
        </span>
        , and no program detail here.
      </>
    ),
  },
  {
    title: "What about my data?",
    body: (
      <>
        <Link href="/privacy-and-data-governance" className={linkClass}>
          Privacy &amp; Data Governance
        </Link>{" "}
        owns data rights and handling.
      </>
    ),
  },
];

export default function AuthorityHandoffs() {
  return (
    <section
      id="authority-handoffs"
      className="w-full bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-4 items-center justify-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span className="text-xs font-bold uppercase !leading-4 tracking-widest !text-[#7890b2]">
              Authority handoffs
            </span>

            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
          </div>

          <h2 className="!m-0 text-balance !text-2xl !tracking-normal font-extrabold !leading-8 font-[family-name:var(--font-jakarta)] !text-[#091127] sm:!text-3xl sm:!leading-9 md:!text-4xl md:!leading-10">
            Six adjacent questions this page does not answer.
          </h2>

          <p className="m-0 w-full max-w-[687px] pt-[3.1px] text-sm font-normal !leading-6 !text-[#5d7192] sm:text-base sm:!leading-7">
            An advisory page attracts every security-adjacent question, and
            answering them here would create a second source for each.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
