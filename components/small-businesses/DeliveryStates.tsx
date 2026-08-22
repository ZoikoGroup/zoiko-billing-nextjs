"use client";

const deliveryStates = [
  {
    state: "Not sent",
    meaning: "The document exists but no delivery has been attempted.",
    treatment: "Generated is separate from sent",
    type: "gray",
  },
  {
    state: "Sending",
    meaning: "A delivery attempt is in progress.",
    treatment: "Not yet an outcome",
    type: "blue",
  },
  {
    state: "Sent",
    meaning: "The attempt was recorded on an approved route.",
    treatment: "Not confirmation of receipt",
    type: "blue",
  },
  {
    state: "Delivered",
    meaning:
      "Shown only where the product can verify the relevant delivery state.",
    treatment: "Not a payment, and not customer agreement",
    type: "green",
  },
  {
    state: "Failed or bounced",
    meaning: "An explicit failure with attempts and reason.",
    treatment: "Correct the contact or route, then retry safely",
    type: "orange",
  },
  {
    state: "Unknown",
    meaning: "The route cannot confirm the outcome.",
    treatment: "Never converted to Delivered",
    type: "unknown",
  },
];

const badgeStyles = {
  gray: {
    wrapper: "border-gray-200 bg-gray-100 text-gray-500",
    dot: "bg-gray-500",
  },
  blue: {
    wrapper: "border-gray-300 bg-gray-100 text-gray-600",
    dot: "bg-gray-500",
  },
  green: {
    wrapper: "border-green-200 bg-gray-100 text-green-700",
    dot: "bg-green-600",
  },
  orange: {
    wrapper: "border-orange-200 bg-gray-100 text-orange-600",
    dot: "bg-orange-500",
  },
  unknown: {
    wrapper: "border-gray-300 bg-gray-100 text-blue-600",
    dot: "bg-blue-500",
  },
};

function StateBadge({
  state,
  type,
}: {
  state: string;
  type: keyof typeof badgeStyles;
}) {
  const styles = badgeStyles[type];

  return (
    <span
      className={`inline-flex min-h-6 items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold leading-4 ${styles.wrapper}`}
    >
      <span
        className={`mr-2 h-1.5 w-1.5 rounded-sm opacity-80 ${styles.dot}`}
      />
      {state}
    </span>
  );
}

export default function DeliveryStates() {
  return (
    <section className="w-full border-t border-gray-200 bg-gray-50 px-6 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start gap-3.5 px-0 sm:px-4 lg:px-7">
        {/* Eyebrow */}
        <div className="relative flex h-4 items-center">
          <div className="h-px w-6 bg-blue-600 opacity-70" />

          <span className="ml-2.5 text-xs font-bold uppercase leading-4 tracking-widest text-blue-600">
            Documents, delivery &amp; communication
          </span>
        </div>

        {/* Heading */}
        <div className="w-full pb-1">
          <h2 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
            Sent is not delivered.
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[686px]">
          <p className="text-sm font-normal leading-6 text-gray-600 sm:text-base">
            If a document did not reach the customer, chasing payment for it
            damages the relationship. Delivery keeps its own evidence.
          </p>
        </div>

        {/* Table */}
        <div className="mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          {/* Desktop / Tablet */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[820px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-[18%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    State
                  </th>

                  <th className="w-[49%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Meaning
                  </th>

                  <th className="w-[33%] border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-gray-600">
                    Treatment
                  </th>
                </tr>
              </thead>

              <tbody>
                {deliveryStates.map((item, index) => (
                  <tr key={item.state}>
                    {/* State */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== deliveryStates.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <StateBadge
                        state={item.state}
                        type={item.type as keyof typeof badgeStyles}
                      />
                    </td>

                    {/* Meaning */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== deliveryStates.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-normal leading-5 text-gray-600">
                        {item.meaning}
                      </p>
                    </td>

                    {/* Treatment */}
                    <td
                      className={`px-4 py-3.5 align-top ${
                        index !== deliveryStates.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <p className="text-sm font-normal leading-5 text-gray-600">
                        {item.treatment}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="flex flex-col md:hidden">
            {deliveryStates.map((item, index) => (
              <div
                key={item.state}
                className={`flex flex-col gap-4 p-4 ${
                  index !== deliveryStates.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                {/* State */}
                <div>
                  <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    State
                  </p>

                  <StateBadge
                    state={item.state}
                    type={item.type as keyof typeof badgeStyles}
                  />
                </div>

                {/* Meaning */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Meaning
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {item.meaning}
                  </p>
                </div>

                {/* Treatment */}
                <div>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
                    Treatment
                  </p>

                  <p className="text-sm leading-5 text-gray-600">
                    {item.treatment}
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