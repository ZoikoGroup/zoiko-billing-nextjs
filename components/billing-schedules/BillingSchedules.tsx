import Image from "next/image";
import Link from "next/link";

export default function BillingSchedules() {
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
        <div className="w-full min-w-0 lg:w-[52%]">
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-0.5 w-5 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#5272a0]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Billing Schedules
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              !max-w-[700px]
              !text-[40px]
              !font-medium
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-slate-900

              sm:!text-[46px]

              md:!text-[50px]

              lg:!hidden
            "
          >
            Control when billing work should begin —{" "}
            <span className="text-blue-600">
              without guessing the result.
            </span>
          </h2>

          {/* DESKTOP HEADING */}
          <h2
            className="
              !m-0
              !hidden
              !max-w-none
              !font-medium
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-slate-900

              lg:!block
              lg:!text-[44px]

              xl:!text-[50px]
            "
          >
            <span className="block">Control when</span>
            <span className="block">billing work</span>
            <span className="block">should begin —</span>

            <span className="block text-blue-600">without guessing</span>
            <span className="block text-blue-600">the result.</span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              w-full
              max-w-[529px]
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:mt-8
              sm:text-base
              sm:leading-8

              lg:mt-8
            "
          >
            Zoiko Billing manages governed start dates, recurrence, timezone,
            cutoffs, eligibility, ownership, exceptions and next-run evidence
            for one-time and supported recurring billing work.
          </p>

          {/* CTA */}
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
                rounded-lg
                bg-blue-600
                px-5
                text-base
                font-normal
                leading-6
                text-white
                transition
                hover:bg-blue-700

                sm:w-auto
              "
            >
              Create Account
            </Link>

            <Link
              href="/request-demo"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-zinc-200
                bg-white
                px-5
                text-base
                font-normal
                leading-6
                text-slate-900
                transition
                hover:bg-slate-50

                sm:w-auto
              "
            >
              Book a Demo
            </Link>
          </div>

          {/* SECONDARY LINK */}
          <Link
            href="#schedule-model"
            className="
              mt-4
              inline-flex
              min-h-11
              items-center
              gap-2
              text-base
              font-normal
              leading-6
              text-blue-600
              transition
              hover:text-blue-700
            "
          >
            <span>Explore the schedule model</span>
            <span className="text-base font-semibold">↓</span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div
          id="schedule-model"
          className="
            mt-10
            w-full

            sm:mt-12

            md:mt-14

            lg:mt-0
            lg:w-[44%]

            xl:w-[43%]
          "
        >
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[547px]
              overflow-hidden
              rounded-3xl
              bg-gradient-to-br
              from-[#edf5ff]
              via-[#e7f0fa]
              to-[#dce9f5]
              p-4

              sm:p-5

              md:p-7
            "
          >
            {/* Background glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-full
                w-[70%]
                bg-[radial-gradient(circle_at_60%_20%,rgba(0,0,0,0.14),transparent_65%)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-full
                w-[70%]
                opacity-30
                bg-[radial-gradient(circle,rgba(34,197,94,0.4),transparent_65%)]
              "
            />

            {/* IMAGE */}
            <div
              className="
                relative
                z-10
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-zinc-200
                bg-white
                shadow-[0px_22px_50px_-20px_rgba(14,33,27,0.24),0px_2px_6px_0px_rgba(14,33,27,0.06)]
              "
            >
              <Image
                src="/images/billing-schedules/schedules.png"
                alt="Billing schedules"
                width={547}
                height={635}
                priority
                className="h-auto w-full object-cover"
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 767px) 90vw,
                  (max-width: 1023px) 85vw,
                  (max-width: 1279px) 44vw,
                  547px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}