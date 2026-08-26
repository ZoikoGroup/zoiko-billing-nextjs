import Image from "next/image";

const operationalStates = [
  "Accounts Receivable",
  "Payments & Reconciliation",
  "Outstanding Balances",
];

export default function PaymentAndBalance() {
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
            max-w-[1220px]
            flex-col
            items-start
            gap-10
            sm:gap-12
            lg:gap-14
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8
              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2
                pb-2
                lg:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#5c83aa]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#5c83aa]
                    sm:text-xs
                  "
                >
                  Payment and balance
                </span>
              </div>

              {/* TITLE */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  text-[34px]
                  font-medium
                  leading-[1.15]
                  tracking-[-0.035em]
                  text-[#091127]
                  sm:text-[40px]
                  md:text-[44px]
                  lg:text-[48px]
                "
              >
                What the document is worth right now.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]
                  sm:text-base
                  sm:leading-8
                "
              >
                Issued amount, credits, allocations and what remains — always
                stated with its source, currency, date and allocation context.
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-10
              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-5
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[526/401]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  shadow-[0px_4px_14px_0px_rgba(14,33,27,0.04)]
                  shadow-[0px_1px_2px_0px_rgba(14,33,27,0.05)]
                "
              >
                <Image
                  src="/images/invoices/payment-and-balance.png"
                  alt="Payment and balance"
                  fill
                  className="object-cover"
                  sizes="
                    (max-width: 1024px) 100vw,
                    526px
                  "
                />
              </div>

              {/* IMAGE CAPTION */}
              <p
                className="
                  !m-0
                  w-full
                  text-[10px]
                  font-normal
                  uppercase
                  leading-5
                  tracking-[0.08em]
                  text-[#527f73]
                "
              >
                Every figure carries its source, currency, date and allocation
                context.
                <br className="hidden sm:block" />
                Dispute, hold and exception context appears here where
                supported.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex w-full flex-col items-start">
              {/* HEADING */}
              <h3
                className="
                  !m-0
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                Operational states you will see
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  !m-0
                  mt-2
                  max-w-[480px]
                  text-sm
                  font-normal
                  leading-7
                  text-[#5d7192]
                  sm:text-base
                "
              >
                Unpaid, partially paid, paid and overdue are operational states
                about a document and its due date. They describe the billing
                position, nothing more.
              </p>

              {/* LINKS */}
              <div
                className="
                  mt-8
                  flex
                  w-full
                  flex-col
                  gap-1
                "
              >
                {operationalStates.map((state, index) => (
                  <div
                    key={state}
                    className="
                      flex
                      min-h-12
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      px-3
                      py-3
                      transition-colors
                      hover:bg-white
                    "
                  >
                    <span
                      className={`
                        text-sm
                        leading-6
                        text-[#091127]
                        ${
                          index === 0
                            ? "sm:text-base"
                            : ""
                        }
                      `}
                    >
                      {state}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        text-base
                        leading-6
                        text-[#527f73]
                      "
                    >
                      →
                    </span>
                  </div>
                ))}
              </div>

              {/* INTERPRETATION BOUNDARY */}
              <div
                className="
                  mt-8
                  w-full
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#5c83aa]
                  bg-[#f7f8fa]
                  px-5
                  py-6
                  sm:px-7
                  sm:py-7
                "
              >
                <span
                  className="
                    text-[10px]
                    font-normal
                    uppercase
                    leading-4
                    tracking-[0.08em]
                    text-[#5c83aa]
                  "
                >
                  Interpretation boundary
                </span>

                <p
                  className="
                    !m-0
                    mt-2
                    text-sm
                    font-normal
                    leading-7
                    text-[#091127]
                    sm:text-base
                  "
                >
                  An outstanding invoice is a billing position, not evidence of
                  misconduct and not a creditworthiness conclusion. Zoiko
                  Billing does not draw either.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}