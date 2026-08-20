import Image from "next/image";

const billingBases = [
  {
    title: "Fixed client fee",
    description: "An approved client or service scope establishes the fee.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Retainer",
    description: "An approved recurring or pre-billed client service arrangement.",
    status: "Where configured",
    type: "configured",
  },
  {
    title: "Project or milestone fee",
    description: "An approved phase or milestone drives billing.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Recurring service schedule",
    description: "Repeat service billing on an approved schedule.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Pass-through or reimbursable cost",
    description: "An approved external cost that is billable to the client.",
    status: "Where configured",
    type: "configured",
  },
  {
    title: "Manual or one-off fee",
    description: "An authorized one-off client fee or service charge.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Time-derived",
    description: "Billable input arrives from an approved upstream time source.",
    status: "Requires upstream source",
    type: "upstream",
  },
  {
    title: "Something else",
    description: "A fee arrangement not listed here.",
    status: "Fit review",
    type: "review",
  },
];

export default function BillingBasis() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">

        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Choose the client billing basis
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[620px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          Most agencies run several of these at once.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          Seven bases, shown with equal weight. Nothing here recommends a model
          using client value, spend, margin or account tier — the selector
          helps you recognize what you already run and check whether the
          configured Billing model supports it.
        </p>

        {/* Billing basis cards */}
        <div className="grid w-full grid-cols-1 gap-3 pt-3 sm:grid-cols-2 lg:grid-cols-4">

          {billingBases.map((item, index) => (
            <div
              key={item.title}
              className={`flex min-h-[144px] flex-col rounded-2xl border bg-white px-4 py-5 ${
                index === 0
                  ? "border-blue-600 shadow-[0_0_0_3px_rgba(31,111,235,0.12)]"
                  : "border-gray-200"
              }`}
            >
              {/* Title */}
              <h3 className="!m-0 text-sm font-bold leading-6 text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-1 min-h-[40px] text-xs font-normal leading-5 text-gray-600">
                {item.description}
              </p>

              {/* Status */}
              <div className="mt-auto pt-2">
                <span
                  className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${
                    item.type === "supported"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : item.type === "configured"
                        ? "border-orange-200 bg-orange-50 text-orange-700"
                        : item.type === "upstream"
                          ? "border-gray-200 bg-gray-50 text-gray-600"
                          : "border-blue-100 bg-blue-50 text-blue-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section image */}
        <div className="mt-1 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05)]">
          <Image
            src="/images/agencies/basis.png"
            alt="Client billing basis overview"
            width={1264}
            height={632}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}