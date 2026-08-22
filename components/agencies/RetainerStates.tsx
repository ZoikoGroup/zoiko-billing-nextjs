"use client";

const states = [
  {
    label: "Not used",
    type: "neutral",
    meaning: "No retainer model exists for this client or engagement.",
    boundary: "No empty retainer panel is rendered",
  },
  {
    label: "Needs setup",
    type: "orange",
    meaning:
      "The commercial model indicates a retainer but configuration is incomplete.",
    boundary: "No available amount is claimed",
  },
  {
    label: "Available",
    type: "green",
    meaning:
      "Shown only where Billing holds an authoritative current state.",
    boundary: "Not a custody, trust or escrow claim",
  },
  {
    label: "Partially applied",
    type: "approval",
    meaning: "A supported application relationship exists.",
    boundary: "Invoice and charge links shown explicitly",
  },
  {
    label: "Fully applied",
    type: "green",
    meaning: "The available supported amount is fully referenced.",
    boundary: "No accounting or revenue conclusion follows",
  },
  {
    label: "Adjustment pending",
    type: "orange",
    meaning: "An authorized change is under review.",
    boundary: "Prior state and history retained",
  },
  {
    label: "Refund or release pending",
    type: "orange",
    meaning: "Only where a supported commercial workflow exists.",
    boundary: "No legal entitlement claim",
  },
  {
    label: "Unknown",
    type: "blue",
    meaning: "The final state cannot be confirmed.",
    boundary: "Reconcile before reapplying — never apply twice",
  },
];

const stateStyles = {
  neutral: "border-gray-200 bg-gray-50 text-gray-500",
  orange: "border-orange-200 bg-orange-50 text-orange-700",
  green: "border-green-200 bg-green-50 text-green-700",
  approval: "border-gray-200 bg-gray-100 text-gray-600",
  blue: "border-blue-100 bg-blue-50 text-blue-600",
};

const dotStyles = {
  neutral: "bg-gray-500",
  orange: "bg-orange-500",
  green: "bg-green-600",
  approval: "border-2 border-gray-500 bg-transparent",
  blue: "bg-blue-500",
};

export default function RetainerStates() {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-6 py-12 sm:px-8 sm:py-14 lg:px-7 lg:py-16">

        {/* Eyebrow */}
        <div className="flex h-4 items-center">
          <span className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
            Retainers, deposits &amp; pre-billed amounts
          </span>
        </div>

        {/* Heading */}
        <h2 className="!m-0 w-full max-w-[900px] !text-[30px] !font-extrabold !leading-[1.15] tracking-tight text-gray-900">
          An agency retainer is a commercial arrangement you define. This is
          only the billing record.
        </h2>

        {/* Description */}
        <p className="w-full max-w-[686px] text-sm font-normal leading-6 text-gray-600 sm:text-base">
          Where a retainer or pre-billed model is configured and supported,
          Zoiko Billing tracks the record, its application to invoices, and
          the history of both.
        </p>

        {/* Table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">

          {/* Intro */}
          <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
            <p className="!m-0 text-sm font-normal leading-5 text-gray-600">
              Retainer and pre-billed states. Where no model is configured, no
              retainer interface is shown at all.
            </p>
          </div>

          {/* Scrollable table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-64 border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    State
                  </th>

                  <th className="w-[596px] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Meaning
                  </th>

                  <th className="w-96 border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-blue-600">
                    Boundary
                  </th>
                </tr>
              </thead>

              <tbody>
                {states.map((state) => (
                  <tr key={state.label}>
                    {/* State */}
                    <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                      <span
                        className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${
                          stateStyles[
                            state.type as keyof typeof stateStyles
                          ]
                        }`}
                      >
                        <span
                          className={`mr-2 h-1.5 w-1.5 rounded-sm ${
                            dotStyles[state.type as keyof typeof dotStyles]
                          }`}
                        />

                        {state.label}
                      </span>
                    </td>

                    {/* Meaning */}
                    <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                      <p className="!m-0 text-sm font-normal leading-5 text-gray-600">
                        {state.meaning}
                      </p>
                    </td>

                    {/* Boundary */}
                    <td className="border-b border-gray-100 px-4 py-3.5 align-top">
                      <p className="!m-0 text-sm font-normal leading-5 text-gray-600">
                        {state.boundary}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}