"use client";

const preferences = [
  {
    title: "Allowed currency set",
    text: "— only from the current applicability registry.",
  },
  {
    title: "Effective date",
    text: "— future changes clearly separated from the current value.",
  },
  {
    title: "One-off override",
    text: "— permissioned, with reason and downstream effect visible.",
  },
  {
    title: "Currency locked by contract",
    text: "— explains why it cannot be changed and routes to the commercial workflow.",
  },
  {
    title: "Unsupported request",
    text: "— shown as unavailable or needs review; never silently converted to the nearest alternative.",
  },
  {
    title: "Display preference",
    text: "— independently selectable, and cannot change the authoritative invoice or payment currency.",
  },
  {
    title: "History",
    text: "— before and after, source, actor, effective date and reason.",
  },
];

export default function CustomerPrefs() {
  return (
    <section className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col items-center gap-10 lg:flex-row lg:gap-14">
        {/* Content */}
        <div className="flex w-full flex-col items-start gap-3.5 lg:flex-1 lg:pt-2">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-sky-700/70" />

            <span className="text-xs font-bold uppercase leading-4 tracking-[0.18em] text-slate-500">
              Customer preference &amp; overrides
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-3xl sm:leading-9">
            <span className="block sm:whitespace-nowrap">
              A preference is a request, not a
            </span>

            <span className="block sm:whitespace-nowrap">
              permission.
            </span>
          </h2>

          {/* Description */}
          <p className="w-full text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A preferred billing currency is subject to eligibility and to
            contract, entity, jurisdiction and provider rules. Where it cannot
            be honored, the reason is shown and the request routes to the
            authorized workflow.
          </p>

          {/* Preference list */}
          <div className="mt-1 w-full space-y-4">
            {preferences.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                {/* Bullet */}
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-sky-700" />

                {/* Content */}
                <div className="min-w-0 flex-1 text-sm leading-6 text-slate-600">
                  <span className="font-bold text-slate-700">
                    {item.title}
                  </span>{" "}
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full rounded-3xl bg-gray-100 p-4 lg:flex-1">
          <div className="overflow-hidden rounded-2xl bg-white">
            <img
              src="/images/multi-currency/customer-currency.png"
              alt="Customer currency preferences and overrides"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}