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
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            md:gap-11

            lg:flex-row
            lg:items-start
            lg:gap-14
          "
        >
          {/* IMAGE CARD */}
          <div
            className="
              w-full
              shrink-0
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-4
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              lg:w-[calc(50%-28px)]
            "
          >
            <div className="overflow-hidden rounded-xl bg-white">
              <img
                src="/images/multi-currency/invoice-currency.png"
                alt="Invoice and document currency integrity"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3.5

              lg:w-[calc(50%-28px)]
              lg:pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Invoice &amp; document currency integrity
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Changing a default cannot turn a GBP invoice into a EUR invoice.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A future currency change affects eligible future documents from
              its effective date. It never rewrites what was already issued,
              and any converted view stays visibly secondary unless a new
              authoritative document is issued.
            </p>

            {/* POINTS */}
            <div className="mt-1 w-full space-y-4">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-3"
                >
                  {/* BULLET */}
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-[#7890b2]" />

                  {/* TEXT */}
                  <div
                    className="
                      min-w-0
                      flex-1
                      text-[15px]
                      leading-6
                      text-[#5d7192]

                      sm:text-base
                    "
                  >
                    <span className="font-bold text-[#091127]">
                      {point.title}
                    </span>{" "}
                    {point.text}

                    {point.extra && (
                      <>
                        {" "}
                        <span className="font-semibold text-[#7890b2]">
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
      </div>
    </section>
  );
}