import Image from "next/image";
import Link from "next/link";

export default function PayHero() {
  return (
    <section className="w-full overflow-hidden bg-white">
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

            lg:w-[48%]
            lg:max-w-[620px]
          "
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-6 shrink-0 bg-blue-600 opacity-75" />

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
              Payments &amp; Reconciliation
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
            Connect every payment to the right billing record{" "}
            <span className="text-blue-600">
              — with exceptions visible.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              w-full
              max-w-[600px]
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
            Zoiko Billing captures payment evidence, normalizes provider
            states, matches and allocates funds, manages exceptions and
            reversals, and updates receivable positions with explicit source,
            currency, timing and audit context.
          </p>

          {/* CTA BUTTONS */}
          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              gap-3

              sm:mt-8
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
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
              Create Account
            </Link>

            <Link
              href="/book-a-demo"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-[#dfe5ee]
                bg-white
                px-7
                text-sm
                font-semibold
                leading-6
                text-[#091127]
                transition
                hover:bg-[#f8faff]

                sm:w-auto
              "
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            mt-10
            flex
            w-full
            items-center
            justify-center

            sm:mt-12

            md:mt-14

            lg:mt-0
            lg:w-[48%]
            lg:justify-end

            xl:w-[47%]
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[680px]
            "
          >
            {/* GLOW */}
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                top-1/2
                h-64
                w-64
                -translate-y-1/2
                rounded-full
                bg-cyan-400/10
                blur-3xl

                sm:h-80
                sm:w-80

                lg:h-[380px]
                lg:w-[380px]
              "
            />

            <Image
              src="/images/payments-and-reconcilliation/image.png"
              alt="Payments and reconciliation"
              width={1200}
              height={800}
              priority
              className="
                relative
                z-10
                h-auto
                w-full
                object-contain
              "
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 48vw,
                680px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}