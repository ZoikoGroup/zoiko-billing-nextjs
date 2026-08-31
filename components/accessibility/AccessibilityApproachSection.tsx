interface ApproachCard {
  title: string;
  description: React.ReactNode;
}

const approachCards: ApproachCard[] = [
  {
    title: "Design and build",
    description: "Accessibility considered during design and development rather than retrofitted, with keyboard, focus, contrast and semantics treated as requirements.",
  },
  {
    title: "Testing",
    description: (
      <>
        Manual task-flow, keyboard, screen-reader and zoom or reflow testing on evaluated surfaces.{" "}
        <span className="font-bold text-slate-900">
          Automated checks alone are not treated as evidence.
        </span>
      </>
    ),
  },
  {
    title: "Known limitations",
    description: "Published where we know about them, with scope, impact and any verified workaround — rather than omitted until fixed.",
  },
  {
    title: "Feedback",
    description: "A route that reaches accessibility and product owners, with a status intake route rather than a black hole.",
  },
  {
    title: "Remediation",
    description: (
      <>
        Barriers logged and tracked, with a public state that distinguishes{" "}
        <span className="font-bold text-slate-900">fixed from verified</span>.
      </>
    ),
  },
  {
    title: "Governance",
    description: "Accessibility claims are source-controlled. Nobody publishes a conformance statement from memory.",
  },
];

export default function AccessibilityApproachSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="approach">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          ACCESSIBILITY APPROACH
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight text-slate-900 tracking-tight max-w-3xl">
          What we do, without claiming what it achieved.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A described practice is not evidence of an outcome. These are commitments about process; the
          evidence section states what has actually been evaluated.
        </p>

        {/* 6 Grid Cards */}
        <div className="mt-8 lg:mt-14 w-full max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          {approachCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE-ONLY AMBER CALLOUT BOX (block lg:hidden)                           */}
        {/* ========================================================================= */}
        <div className="block lg:hidden mt-4 w-full max-w-[1240px] text-left">
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 font-normal leading-relaxed">
            <span className="font-bold text-amber-900">Why process claims are separated from outcome claims.</span> &quot;We test with screen readers&quot; and &quot;our product works with screen readers&quot; are different statements, and conflating them is the most common way an accessibility page misleads without stating a single false fact. This page keeps them in separate sections deliberately.
          </div>
        </div>

      </div>
    </section>
  );
}
