import Image from "next/image";
import Link from "next/link";

export default function BillingCta() {
  return (
    <section className="w-full bg-[#f7f8fa] px-5 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20 xl:px-20">
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1240px]
          overflow-hidden
          rounded-3xl
          bg-[#17243a]
          px-6
          py-8
          sm:px-8
          sm:py-10
          md:px-10
          md:py-12
          lg:min-h-[496px]
          lg:px-14
          lg:py-14
        "
      >
        {/* BACKGROUND GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-96
            w-96
            rounded-full
            bg-[#58759d]/30
            blur-3xl
          "
        />

        {/* MAIN CONTENT */}
        <div
          className="
            relative
            z-10
            grid
            w-full
            grid-cols-1
            items-center
            gap-8
            md:gap-10
            lg:grid-cols-[minmax(0,1fr)_520px]
            lg:gap-12
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              h-full
              flex-col
              items-start
              justify-center
              gap-3
            "
          >
            {/* EYEBROW */}
            <div className="flex h-4 items-center gap-3">
              <span className="h-px w-4 shrink-0 bg-white/40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  !text-white/60
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Client billing
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                max-w-[620px]
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
              Keep every client-billing
              <br className="hidden sm:block" />
              decision connected to its source.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                max-w-[511px]
                text-[15px]
                font-normal
                leading-7
                !text-white/70
                sm:text-base
              "
            >
              Coordinate fee bases, retainers, pass-through costs, invoices,
              delivery and receivables without losing ownership or correction
              history.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-3
                pt-3
              "
            >
              {/* CREATE ACCOUNT */}
              <Link
                href="/create-account"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  !bg-white
                  px-5
                  text-sm
                  font-semibold
                  leading-6
                  !text-[#17243a]
                  transition
                  hover:!bg-[#f1f3f6]
                "
              >
                Create account
              </Link>

              {/* BOOK A DEMO */}
              <Link
                href="/book-demo"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  !border
                  !border-white/30
                  !bg-transparent
                  px-5
                  text-sm
                  font-semibold
                  leading-6
                  !text-white
                  opacity-100
                  transition
                  hover:!bg-white/10
                  hover:!text-white
                "
              >
                Book a demo
              </Link>

              {/* VIEW PRICING */}
              <Link
                href="/pricing-and-plans"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  !border
                  !border-white/30
                  !bg-transparent
                  px-5
                  text-sm
                  font-semibold
                  leading-6
                  !text-white
                  opacity-100
                  transition
                  hover:!bg-white/10
                  hover:!text-white
                "
              >
                View pricing
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/15
              bg-white/5
            "
          >
            <Image
              src="/images/agencies/cta.png"
              alt="Client billing workflow"
              width={520}
              height={384}
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}