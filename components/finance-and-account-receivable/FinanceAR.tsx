import Image from "next/image";
import Link from "next/link";

export default function FinanceAR() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div
        className="
          mx-auto
          flex
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

          xl:px-[60px]
        "
      >
        <div
          className=" 
            relative
            flex
            w-full
            flex-col
            overflow-hidden
            rounded-3xl

            lg:min-h-[498px]
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-7
          "
        >
          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              items-start
              gap-4
              py-8

              sm:py-10

              md:max-w-[700px]
              md:py-12

              lg:w-[52%]
              lg:max-w-[680px]
              lg:py-10
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-blue-600

                  sm:text-xs
                  sm:tracking-[0.2em]
                "
              >
                Solution for Finance &amp; Accounts Receivable
              </span>

              <span className="hidden h-px w-6 bg-blue-600/50 sm:block" />
            </div>

            {/* HEADING */}
            <h1
              className="
                !m-0
                w-full
                max-w-[650px]
                !text-[32px]
                !font-extrabold
                !leading-[1.14]
                !tracking-[-0.025em]
                !text-slate-900

                sm:!text-[40px]

                md:!text-[44px]

                lg:!text-[48px]
              "
            >
              Know what is owed, what was paid, and{" "}
              <span className="text-blue-600">
                what needs review.
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[686px]
                text-[15px]
                font-normal
                leading-6
                text-slate-600

                sm:text-base
                sm:leading-7
              "
            >
              Bring invoices, credit notes, adjustments, payments, outstanding
              balances, approvals and reporting into one governed operating
              view — while keeping the underlying billing record traceable.
            </p>

            {/* CTA */}
            <div
              className="
                mt-1
                flex
                w-full
                flex-col
                gap-3

                sm:w-auto
                sm:flex-row
                sm:flex-wrap
              "
            >
              <Link
                href="pricing-and-plans"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  px-5
                  text-center
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                  shadow-[0_6px_16px_rgba(31,111,235,0.24)]
                  transition
                  hover:bg-blue-700

                  sm:w-auto
                "
              >
                View Pricing &amp; Plans
              </Link>

              <Link
                href="create-account"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  px-5
                  text-center
                  text-sm
                  font-semibold
                  leading-6
                  text-slate-900
                  transition
                  hover:bg-gray-50

                  sm:w-auto
                "
              >
                Create account
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              mt-8
              flex
              w-full
              justify-center

              sm:mt-10

              md:mt-12

              lg:mt-0
              lg:w-[46%]
              lg:justify-end
            "
          >
            <div
              className="
                relative
                aspect-[523/473]
                w-full
                max-w-[420px]

                sm:max-w-[500px]

                lg:max-w-[523px]
              "
            >
              <Image
                src="/images/finance-and-account-receivable/image.png"
                alt="Finance and accounts receivable"
                fill
                priority
                className="rounded-2xl object-cover"
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 767px) 500px,
                  (max-width: 1023px) 600px,
                  523px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}