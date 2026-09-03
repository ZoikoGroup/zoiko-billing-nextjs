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
            w-full
            max-w-[1240px]
          "
        >
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
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
                bg-[radial-gradient(circle,_rgba(72,177,255,0.45)_0%,_rgba(72,177,255,0)_70%)]

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

            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-col
                gap-8

                sm:gap-10

                md:gap-11
              "
            >
              {/* CONTENT */}
              <div
                className="
                  flex
                  w-full
                  max-w-[700px]
                  flex-col
                  items-start
                "
              >
                {/* EYEBROW */}
                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-4 shrink-0 bg-white opacity-40" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.16em]
                      text-white/60

                      sm:text-xs
                      sm:tracking-[0.18em]
                    "
                  >
                    Payment reconciliation
                  </span>

                  <span className="h-px w-4 shrink-0 bg-white opacity-40" />
                </div>

                {/* HEADING */}
                <h2
                  className="
                    !m-0
                    mt-3
                    w-full
                    max-w-[700px]
                    !text-[30px]
                    !font-extrabold
                    !leading-[1.2]
                    !tracking-[-0.035em]
                    !text-white

                    sm:!text-[34px]

                    md:!text-[36px]

                    lg:!text-[40px]
                  "
                >
                  Close the month with nothing left to reconcile.
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-3
                    w-full
                    max-w-[600px]
                    text-[15px]
                    font-normal
                    leading-7
                    !text-white/70

                    sm:mt-4
                    sm:text-base
                  "
                >
                  Balances, payments and credit notes sit on one record, so
                  the number you report is the number in the ledger.
                </p>

                {/* CTA BUTTONS */}
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
                    href="#"
                    className="
                      inline-flex
                      min-h-11
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
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

              {/* RECONCILIATION CARD */}
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/[0.06]
                "
              >
                {/* CARD HEADER */}
                <div
                  className="
                    border-b
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-3.5

                    sm:px-5

                    md:px-6
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      leading-4
                      tracking-wide
                      text-white/60
                    "
                  >
                    Reconciliation
                  </span>
                </div>

                {/* ROWS */}
                <div className="px-4 sm:px-5 md:px-6">
                  {reconciliationRows.map((row, index) => (
                    <div
                      key={row.label}
                      className={`
                        flex
                        items-center
                        justify-between
                        gap-4
                        py-3.5

                        ${
                          index !== reconciliationRows.length - 1
                            ? "border-b border-white/10"
                            : ""
                        }
                      `}
                    >
                      <span
                        className="
                          min-w-0
                          text-sm
                          font-normal
                          leading-5
                          !text-white/60
                        "
                      >
                        {row.label}
                      </span>

                      <span
                        className="
                          shrink-0
                          text-right
                          text-sm
                          font-semibold
                          leading-5
                          !text-white

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
        </div>
      </div>
    </section>
  );
}