const states = [
  {
    state: "Planned",
    stateType: "planned",
    behavior:
      "Explain that it is not currently production-available; optional consent-based notification if a program exists.",
    prohibited:
      "Any date, quarter, launch month, wait time, guaranteed roadmap, pre-order or signup implication",
  },
  {
    state: "Not available",
    stateType: "unavailable",
    behavior:
      "State that there is no current offering for the scope; offer Explore Platform or an approved request route.",
    prohibited:
      'Any "Book a demo" or "Create account" copy that implies market support',
  },
  {
    state: "No public record",
    stateType: "record",
    behavior:
      "Say the public registry cannot confirm; offer another jurisdiction or an approved contact route.",
    prohibited: "Labelling it Not available automatically",
  },
  {
    state: "Needs review",
    stateType: "review",
    behavior:
      "An internal safety state — suppress the positive claim and route to governed review.",
    prohibited: "Exposing a stale Available value for convenience",
  },
];

function StateBadge({
  state,
  type,
}: {
  state: string;
  type: string;
}) {
  const styles: Record<string, string> = {
    planned:
      "bg-[#F1F3F5] border-[#DDE2E7] text-[#3979B5] before:bg-[#3979B5]",
    unavailable:
      "bg-[#F7F0F1] border-[#E6C6CB] text-[#C43F4B] before:bg-[#C43F4B]",
    record:
      "bg-[#F3F4F5] border-[#D9DDE1] text-[#526273] before:bg-[#526273]",
    review:
      "bg-[#F5F6F7] border-[#DEE1E4] text-[#64748B] before:bg-[#64748B]",
  };

  return (
    <span
      className={`inline-flex min-h-6 max-w-full items-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 ${styles[type]} before:mr-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-sm`}
    >
      {state}
    </span>
  );
}

export default function PlannedStates() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-7 sm:gap-10">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-1 text-center">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />

            <span className="text-center text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-[#4387A8] sm:text-xs sm:tracking-[0.2em]">
              Planned, Not available &amp; request states
            </span>

            <span className="h-px w-4 shrink-0 bg-[#4387A8]/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#102A43] sm:text-[36px] lg:text-[42px]">
            Planned is an intent, never a date.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] text-center text-sm font-normal leading-6 text-[#60758A] sm:text-base sm:leading-7">
            No quarter, launch month, wait time, guaranteed roadmap, pre-order
            or signup implication appears against a Planned market.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-xl border border-[#E1E5E9] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)] sm:rounded-2xl">
          {/* Desktop Header */}
          <div className="hidden grid-cols-[160px_minmax(0,1.1fr)_minmax(0,1fr)] border-b border-[#E1E5E9] bg-[#FAFBFC] md:grid">
            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-[#4387A8]">
                State
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-[#4387A8]">
                Required behavior
              </span>
            </div>

            <div className="px-4 py-3.5">
              <span className="text-xs font-bold uppercase tracking-wide text-[#4387A8]">
                Prohibited
              </span>
            </div>
          </div>

          {/* Rows */}
          <div>
            {states.map((item, index) => (
              <div
                key={item.state}
                className={`grid grid-cols-1 md:grid-cols-[160px_minmax(0,1.1fr)_minmax(0,1fr)] ${
                  index !== states.length - 1
                    ? "border-b border-[#EEF0F2]"
                    : ""
                }`}
              >
                {/* State */}
                <div className="px-4 pt-5 pb-4 md:py-5">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#8A98A8] md:hidden">
                    State
                  </div>

                  <StateBadge
                    state={item.state}
                    type={item.stateType}
                  />
                </div>

                {/* Required behavior */}
                <div className="px-4 pb-5 md:py-5">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#8A98A8] md:hidden">
                    Required behavior
                  </div>

                  <p className="text-sm font-normal leading-6 text-[#60758A]">
                    {item.behavior}
                  </p>
                </div>

                {/* Prohibited */}
                <div className="px-4 pb-5 md:py-5">
                  <div className="mb-2 text-[10px] font-bold uppercase tracking-wide text-[#8A98A8] md:hidden">
                    Prohibited
                  </div>

                  <p className="text-sm font-normal leading-6 text-[#60758A]">
                    {item.prohibited}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}