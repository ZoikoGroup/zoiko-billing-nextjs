import Image from "next/image";

export default function PaymentMatchModel() {
  const rows = [
    {
      signal: (
        <>
          Exact payment
          <br />
          reference
        </>
      ),
      boundary: (
        <>
          A strong deterministic signal — still validate amount,
          <br className="hidden lg:block" /> currency and object state
        </>
      ),
    },
    {
      signal: "Invoice reference",
      boundary: (
        <>
          Strong if exact, unique and current; reused or ambiguous
          <br className="hidden lg:block" /> references are not matched blindly
        </>
      ),
    },
    {
      signal: (
        <>
          Provider
          <br />
          settlement ID
        </>
      ),
      boundary: (
        <>
          Useful for the provider-to-bank relation, but may represent
          <br className="hidden lg:block" /> a batch payout rather than one invoice
        </>
      ),
    },
    {
      signal: (
        <>
          Amount and
          <br />
          currency
        </>
      ),
      boundary: (
        <>
          A candidate signal —{" "}
          <span className="font-bold">not sufficient alone</span> where
          duplicates,
          <br className="hidden lg:block" /> fees or batches exist
        </>
      ),
    },
    {
      signal: "Date window",
      boundary: "A ranking constraint, never sole authority",
    },
    {
      signal: (
        <>
          Customer
          <br />
          reference
        </>
      ),
      boundary: (
        <>
          Candidate context if mapped; no identity inference from a
          <br className="hidden lg:block" /> name alone
        </>
      ),
    },
    {
      signal: (
        <>
          Transaction
          <br />
          description
        </>
      ),
      boundary: (
        <>
          Supplementary only — free-text similarity cannot authorize
          <br className="hidden lg:block" /> a financial match by itself
        </>
      ),
    },
    {
      signal: "Deterministic rule",
      boundary: (
        <>
          May auto-match only when inputs are unambiguous and
          <br className="hidden lg:block" /> policy permits; rule basis and version stay explainable
        </>
      ),
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
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
                Matching model: payments, invoices, customers &amp; references
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              A confidence score is not financial
              <br className="hidden sm:block" />
              evidence.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Where heuristic ranking orders candidates, the underlying match
              basis stays visible. A percentage or &quot;high confidence&quot;
              label never substitutes for evidence or review policy.
            </p>
          </div>

          {/* CONTENT GRID */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-8

              lg:flex-row
              lg:items-start
              lg:gap-5
            "
          >
            {/* MATCH SIGNALS CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:flex-1
              "
            >
              {/* CARD HEADER */}
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  Match signals and their boundaries.
                </p>
              </div>

              {/* TABLE */}
              <div className="w-full overflow-x-auto">
                <div className="min-w-[580px]">
                  {rows.map((row, index) => (
                    <div
                      key={index}
                      className={`
                        grid
                        grid-cols-[160px_1fr]
                        ${
                          index !== rows.length - 1
                            ? "border-b border-[#edf0f4]"
                            : ""
                        }
                      `}
                    >
                      {/* SIGNAL */}
                      <div
                        className="
                          px-4
                          py-3.5
                        "
                      >
                        <p
                          className="
                            !m-0
                            text-sm
                            font-semibold
                            leading-5
                            text-[#091127]
                          "
                        >
                          {row.signal}
                        </p>
                      </div>

                      {/* BOUNDARY */}
                      <div
                        className="
                          px-4
                          py-3.5
                        "
                      >
                        <p
                          className="
                            !m-0
                            text-sm
                            font-normal
                            leading-5
                            text-[#5d7192]
                          "
                        >
                          {row.boundary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IMAGE CARD */}
            <div
              className="
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                lg:w-[calc(50%-10px)]
                lg:flex-1
              "
            >
              <div className="relative aspect-[580/483] w-full">
                <Image
                  src="/images/banking-and-reconciliation/match-model.png"
                  alt="Payment matching model and confidence evidence"
                  fill
                  className="object-cover"
                  sizes="
                    (max-width: 1023px) 100vw,
                    50vw
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}