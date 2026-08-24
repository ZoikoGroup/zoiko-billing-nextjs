import Image from "next/image";
import Link from "next/link";

export default function OutstandingBalances() {
  return (
    <section className="w-full overflow-hidden border-b border-slate-200 bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pb-14
          pt-10

          sm:px-8
          sm:pb-16
          sm:pt-12

          md:px-10
          md:pb-20
          md:pt-16

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
          lg:px-14
          lg:py-20

          xl:gap-14
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            w-full
            min-w-0

            lg:w-[52%]
            lg:max-w-[620px]
          "
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-6 shrink-0 bg-blue-600 opacity-70" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Receivables · Detailed view
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              !m-0
              !block
              !max-w-[620px]
              !text-[40px]
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-slate-900

              sm:!text-[46px]

              md:!text-[50px]

              lg:!text-[44px]
              lg:!leading-[1.08]

              xl:!text-[50px]
            "
          >
            Every outstanding balance, traced to{" "}
            <span className="text-blue-600">its invoice.</span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              w-full
              max-w-[606px]
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:mt-9
              sm:text-base

              md:mt-9

              lg:mt-8

              xl:mt-9
            "
          >
            One record per account, aged to the day. Open a balance to see the
            invoices behind it, the payments applied, and every reminder that
            has already gone out.
          </p>

          {/* CTA */}
          <div className="mt-7 sm:mt-8">
            <Link
              href="/request-demo"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-7
                text-sm
                font-semibold
                leading-6
                text-white
                shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                transition
                hover:bg-blue-700

                sm:w-auto
              "
            >
              Get Demo
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            mt-10
            flex
            w-full
            justify-center

            sm:mt-12

            md:mt-14

            lg:mt-0
            lg:w-[44%]
            lg:justify-end

            xl:w-[43%]
          "
        >
          <div className="w-full max-w-[408px]">
            <Image
              src="/images/outstanding-balances/image.png"
              alt="Outstanding balances detailed receivables view"
              width={408}
              height={400}
              priority
              className="
                h-auto
                w-full
                rounded-2xl
                object-contain
              "
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 80vw,
                (max-width: 1279px) 44vw,
                408px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}