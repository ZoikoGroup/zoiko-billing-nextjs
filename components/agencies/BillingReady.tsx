import Image from "next/image";

const states = [
  {
    label: "Not assessed",
    type: "neutral",
  },
  {
    label: "Needs input",
    type: "orange",
  },
  {
    label: "Needs evidence",
    type: "orange",
  },
  {
    label: "Needs approval",
    type: "approval",
  },
  {
    label: "Ready",
    type: "green",
  },
  {
    label: "Changed since review",
    type: "orange",
  },
  {
    label: "Blocked",
    type: "red",
  },
  {
    label: "Unsupported",
    type: "disabled",
  },
  {
    label: "Unknown",
    type: "blue",
  },
];

const stateStyles = {
  neutral:
    "border-gray-200 bg-gray-50 text-gray-500",
  orange:
    "border-orange-200 bg-orange-50 text-orange-700",
  approval:
    "border-gray-200 bg-gray-100 text-gray-600",
  green:
    "border-green-200 bg-green-50 text-green-700",
  red:
    "border-red-200 bg-red-50 text-red-600",
  disabled:
    "border-gray-200 bg-gray-50 text-gray-500",
  blue:
    "border-blue-100 bg-blue-50 text-blue-600",
};

export default function BillingReady() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">

        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Billing readiness, fee basis &amp; evidence
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[850px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          Readiness is a list of named blockers, not a percentage.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          A single missing fee basis, source document, approval or client-cost
          relationship can block billing — so it stays visible instead of
          disappearing into a score.
        </p>

        {/* Main Image */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/agencies/ready.png"
            alt="Billing readiness overview"
            width={1264}
            height={632}
            priority
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Bottom Cards */}
        <div className="grid w-full grid-cols-1 gap-5 pt-2 lg:grid-cols-2">

          {/* Readiness State Model */}
          <div className="flex min-h-[220px] flex-col gap-3.5 rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
            <h3 className="!m-0 text-base font-bold leading-7 text-gray-900">
              Readiness state model
            </h3>

            <div className="flex flex-wrap gap-2">
              {states.map((state) => (
                <span
                  key={state.label}
                  className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${
                    stateStyles[state.type as keyof typeof stateStyles]
                  }`}
                >
                  <span
                    className={`mr-2 h-1.5 w-1.5 rounded-sm ${
                      state.type === "green"
                        ? "bg-green-600"
                        : state.type === "red"
                          ? "bg-red-500"
                          : state.type === "orange"
                            ? "bg-orange-500"
                            : state.type === "blue"
                              ? "bg-blue-500"
                              : "bg-gray-500"
                    }`}
                  />

                  {state.label}
                </span>
              ))}
            </div>
          </div>

          {/* Changed Means Re-review */}
          <div className="flex min-h-[220px] flex-col gap-3 rounded-2xl border border-gray-200 bg-gray-100 px-6 py-6">
            <h3 className="!m-0 text-base font-bold leading-7 text-gray-900">
              Changed means re-review
            </h3>

            <p className="!m-0 text-sm font-normal leading-5 text-gray-600">
              A Ready engagement becomes Changed since review when its
              material fee, source, cost, schedule, approval or integration
              context changes. A fee arrangement change gets a new version and
              effective date; a markup rule change revalidates the costs it
              touches; a mapping change triggers a targeted integration test.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}