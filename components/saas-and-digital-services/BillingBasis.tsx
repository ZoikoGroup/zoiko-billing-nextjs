import Image from "next/image";

const billingBases = [
  {
    title: "Recurring service schedule",
    description: "A repeat service fee approved for defined service periods.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Fixed service period",
    description: "A defined period with an approved fixed billing amount.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "One-time setup or onboarding fee",
    description: "An approved one-time service charge.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Add-on or service change",
    description: "An approved service modification creates a billing change.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Manual or one-off charge",
    description: "An authorized digital-service fee entered and approved.",
    status: "Supported",
    type: "supported",
  },
  {
    title: "Usage-derived input",
    description:
      "A billable quantity arrives from an approved upstream source.",
    status: "Requires upstream source",
    type: "source",
  },
  {
    title: "Seat or user-count derived",
    description:
      "A current count arrives from an approved external source.",
    status: "Requires upstream source",
    type: "source",
  },
  {
    title: "Something else",
    description: "A model not listed here.",
    status: "Fit review",
    type: "review",
  },
];

export default function BillingBasis() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[950px] flex-col items-center gap-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 bg-blue-600/40" />

            <span className="text-center text-[11px] font-bold uppercase leading-4 tracking-[0.18em] text-blue-600 sm:text-xs">
              Choose the billing basis
            </span>

            <span className="h-px w-4 bg-blue-600/40" />
          </div>

          {/* Heading */}
          <h2 className="w-full text-center text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
            Start from what you already bill.
          </h2>

          {/* Description */}
          <p className="mx-auto w-full max-w-[687px] text-center text-sm font-normal leading-6 text-slate-500 sm:text-base sm:leading-7">
            Seven bases with equal weight. Two of them depend entirely on an
            approved upstream source — and the page says so on the card rather
            than in a footnote.
          </p>
        </div>

        {/* Billing Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {billingBases.map((item, index) => (
            <div
              key={item.title}
              className={`flex min-h-[190px] flex-col rounded-2xl bg-white p-5 ${
                index === 0
                  ? "border border-blue-600 shadow-[0px_0px_0px_3px_rgba(31,111,235,0.12)]"
                  : "border border-gray-200 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]"
              }`}
            >
              {/* Card Title */}
              <h3 className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="mt-2 flex-1 text-xs font-normal leading-5 text-slate-500">
                {item.description}
              </p>

              {/* Status */}
              <div
                className={`mt-4 w-fit rounded-md border px-2.5 py-1 text-[11px] font-semibold leading-4 ${
                  item.type === "supported"
                    ? "border-green-200 bg-green-50 text-green-700"
                    : item.type === "source"
                      ? "border-gray-200 bg-gray-50 text-slate-600"
                      : "border-blue-200 bg-blue-50 text-blue-600"
                }`}
              >
                {item.status}
              </div>
            </div>
          ))}
        </div>

        {/* Section Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/saas-and-digital-services/billing-basis.png"
            alt="Billing basis"
            width={1184}
            height={592}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}