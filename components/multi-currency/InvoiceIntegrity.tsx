"use client";

const points = [
  {
    title: "Original amount",
    text: "— the authoritative document amount and currency are stored and displayed as issued.",
  },
  {
    title: "Precision",
    text: "— line, tax and total precision follow the currency and calculation policy; source precision is preserved internally.",
  },
  {
    title: "Display conversion",
    text: "— clearly labeled as reference or estimated, never substituted into document evidence.",
  },
  {
    title: "Issue event",
    text: "— captures the document currency and the effective rate context if a conversion was part of generation.",
  },
  {
    title: "Correction",
    text: "— credit, reissue or adjustment through the controlled document model; no silent currency rewrite.",
  },
  {
    title: "Language",
    text: "— separate from currency;",
    extra: "Localized Documents",
    extraText: "owns document language and formatting.",
  },
];

export default function InvoiceIntegrity() {
  return (
    <section className="w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1184px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
        {/* Image */}
        <div className="w-full shrink-0 rounded-3xl bg-gray-100 p-4 lg:w-[calc(50%-28px)]">
          <div className="overflow-hidden rounded-2xl bg-white">
            <img
              src="/images/multi-currency/invoice-currency.png"
              alt="Invoice and document currency integrity"
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-start gap-3.5 lg:w-[calc(50%-28px)] lg:pt-2">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-sky-700/70" />

            <span className="text-xs font-bold uppercase leading-4 tracking-[0.18em] text-slate-500">
              Invoice &amp; document currency integrity
            </span>
          </div>

          {/* Heading */}
          <h2 className="w-full text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-3xl sm:leading-9">
            Changing a default cannot turn a GBP invoice into a EUR invoice.
          </h2>

          {/* Description */}
          <p className="w-full text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A future currency change affects eligible future documents from
            its effective date. It never rewrites what was already issued,
            and any converted view stays visibly secondary unless a new
            authoritative document is issued.
          </p>

          {/* Points */}
          <div className="mt-1 w-full space-y-4">
            {points.map((point) => (
              <div key={point.title} className="flex items-start gap-3">
                {/* Bullet */}
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-sky-700" />

                {/* Text */}
                <div className="min-w-0 flex-1 text-sm leading-6 text-slate-600">
                  <span className="font-bold text-slate-700">
                    {point.title}
                  </span>{" "}
                  {point.text}

                  {point.extra && (
                    <>
                      {" "}
                      <span className="font-semibold text-sky-700">
                        {point.extra}
                      </span>{" "}
                      {point.extraText}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}