import Link from "next/link";

const reconciliationRows = [
  {
    label: "Opening balance",
    value: "£2,731,900",
  },
  {
    label: "Invoiced",
    value: "£826,890",
  },
  {
    label: "Payments applied",
    value: "−£1,072,480",
  },
  {
    label: "Credit notes",
    value: "−£0",
  },
  {
    label: "Closing balance",
    value: "£2,486,310",
  },
];

export default function ClosingBalance() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          py-10
          sm:px-8
          sm:py-12
          md:px-10
          md:py-16
          lg:px-14
          lg:py-20
          xl:px-20
        "
      >
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[1184px]
            overflow-hidden
            rounded-3xl
            bg-[#142F4A]
            px-5
            py-8
            sm:px-8
            sm:py-10
            md:px-10
            md:py-12
            lg:px-14
            lg:py-14
          "
        >
          {/* Background Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-[radial-gradient(circle,_rgba(72,177,255,0.5)_0%,_rgba(72,177,255,0)_70%)]
              sm:-right-20
              sm:-top-20
              sm:h-72
              sm:w-72
              lg:-right-16
              lg:-top-20
              lg:h-80
              lg:w-80
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-7
              sm:gap-8
            "
          >
            {/* Top Content */}
            <div className="flex flex-col items-start">
              {/* Heading */}
              <h2
                className="
                  !m-0
                  w-full
                  max-w-[700px]
                  !text-white
                  text-[30px]
                  font-extrabold
                  leading-[1.12]
                  tracking-[-0.025em]
                  sm:text-[36px]
                  sm:leading-[1.1]
                  md:text-[40px]
                  lg:text-[44px]
                "
              >
                Close the month with nothing left to reconcile.
              </h2>

              {/* Description */}
              <p
                className="
                  !m-0
                  mt-4
                  w-full
                  max-w-[600px]
                  !text-white/70
                  text-[15px]
                  font-normal
                  leading-7
                  sm:mt-5
                  sm:text-base
                "
              >
                Balances, payments and credit notes sit on one record, so the
                number you report is the number in the ledger.
              </p>

              {/* CTA Buttons */}
              <div
                className="
                  mt-6
                  flex
                  w-full
                  flex-col
                  gap-3
                  sm:mt-7
                  sm:w-auto
                  sm:flex-row
                "
              >
                <Link
                  href="/create-account"
                  className="
                    inline-flex
                    min-h-11
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    px-7
                    py-2.5
                    text-sm
                    font-semibold
                    leading-6
                    !text-[#142F4A]
                    no-underline
                    transition
                    hover:bg-slate-100
                    sm:w-auto
                  "
                >
                  Create account
                </Link>

                <Link
                  href="/talk-to-sales"
                  className="
                    inline-flex
                    min-h-11
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/35
                    bg-transparent
                    px-7
                    py-2.5
                    text-sm
                    font-semibold
                    leading-6
                    !text-white
                    no-underline
                    transition
                    hover:bg-white/10
                    sm:w-auto
                  "
                >
                  Talk to sales
                </Link>
              </div>
            </div>

            {/* Reconciliation Card */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-white/15
                bg-white/[0.06]
                p-4
                sm:p-5
                md:p-6
              "
            >
              {reconciliationRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`
                    flex
                    items-center
                    justify-between
                    gap-4
                    py-3
                    ${
                      index !== 0
                        ? "border-t border-white/10"
                        : ""
                    }
                  `}
                >
                  <span
                    className="
                      min-w-0
                      !text-white/60
                      text-sm
                      font-normal
                      leading-5
                    "
                  >
                    {row.label}
                  </span>

                  <span
                    className="
                      shrink-0
                      !text-white
                      text-right
                      text-sm
                      font-semibold
                      leading-5
                      sm:text-base
                    "
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}