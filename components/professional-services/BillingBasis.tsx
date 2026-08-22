"use client";

const billingBases = [
  {
    title: "Project or fixed amount",
    description: "An approved service or project scope determines the amount.",
    status: "Supported",
    statusStyle:
      "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Milestone or staged",
    description: "Approved milestone or deliverable states drive billing stages.",
    status: "Supported",
    statusStyle:
      "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Retainer or pre-billed",
    description:
      "An approved prepaid or held service amount is part of the commercial model.",
    status: "Where configured",
    statusStyle:
      "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    title: "Recurring service",
    description: "Repeat service billing on an approved schedule.",
    status: "Supported",
    statusStyle:
      "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Approved expense or pass-through",
    description:
      "An expense or external cost approved for billing to the client.",
    status: "Where configured",
    statusStyle:
      "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    title: "Manual or one-off service",
    description:
      "An authorized service charge entered and approved directly.",
    status: "Supported",
    statusStyle:
      "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Time-based",
    description:
      "Billable input arrives from an approved upstream time source.",
    status: "Requires upstream source",
    statusStyle:
      "bg-gray-100 text-blue-800 border-gray-200",
  },
  {
    title: "Something else",
    description:
      "A model not listed here. Availability is confirmed through fit review.",
    status: "Fit review",
    statusStyle:
      "bg-blue-50 text-blue-700 border-blue-200",
  },
];

export default function BillingBasis() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-0 sm:px-4 lg:px-7">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-6 bg-blue-600 opacity-70" />
          <span className="text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Choose the billing basis
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold leading-8 text-slate-900 sm:text-3xl sm:leading-10">
          Start from the basis you already use.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[686px] text-sm font-normal leading-6 text-slate-600 sm:text-base">
          Seven supported bases, presented with equal weight. This page does
          not score your model, recommend one, or imply every model is
          available in every configuration.
        </p>

        {/* Billing cards */}
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {billingBases.map((item, index) => (
            <div
              key={item.title}
              className={`flex min-h-[180px] flex-col rounded-2xl border bg-white px-4 py-5 ${
                index === 0
                  ? "border-blue-600 shadow-[0_0_0_3px_rgba(31,111,235,0.12)]"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-sm font-bold leading-6 text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 flex-1 text-xs font-normal leading-5 text-slate-600">
                {item.description}
              </p>

              <span
                className={`mt-4 w-fit rounded-md border px-2.5 py-1 text-xs font-semibold leading-4 ${item.statusStyle}`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}