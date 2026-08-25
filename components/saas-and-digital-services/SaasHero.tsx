import Image from "next/image";
import Link from "next/link";

export default function SaasHero() {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* HERO */}
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-5
          pb-12
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
            lg:max-w-[660px]
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
              Solution for SaaS &amp; digital services
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              !m-0
              !block
              !max-w-[660px]
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
            Keep recurring digital-service billing controlled{" "}
            <span className="text-blue-600">
              without hiding the source of change.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              w-full
              max-w-[650px]
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
            Coordinate approved customer and service context, service
            periods, repeat billing schedules, one-time fees or add-ons,
            approved external usage or seat references where supported,
            invoices, delivery, changes, outstanding balances and payment
            handoffs — with visible ownership and evidence.
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
              href="/signup"
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
              href="/pricing"
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
              View Pricing &amp; Plans
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
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
              max-w-[480px]
              rounded-[26px]
              bg-[#f1edff]
              p-3.5

              sm:p-4
            "
          >
            <div
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
                rounded-[20px]
              "
            >
              <Image
                src="/images/saas-and-digital-services/image.png"
                alt="SaaS and digital services billing"
                fill
                priority
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 767px) 90vw,
                  (max-width: 1023px) 85vw,
                  (max-width: 1279px) 44vw,
                  480px
                "
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          gap-3
          px-5
          pb-14

          sm:grid-cols-2
          sm:px-8
          sm:pb-16

          md:px-10

          lg:grid-cols-4
          lg:gap-4
          lg:px-14
          lg:pb-20

          xl:px-20
        "
      >
        {/* CARD 1 */}
        <div
          className="
            flex
            min-h-[145px]
            flex-col
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-[0_8px_24px_rgba(15,23,42,0.05)]
          "
        >
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
            Ready to bill
          </span>

          <span className="pt-1.5 text-2xl font-extrabold leading-9 text-slate-950">
            42
          </span>

          <p className="text-xs leading-5 text-slate-500">
            Service periods with requirements satisfied
            <br />
            · as of 09:20 BST
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="
            flex
            min-h-[145px]
            flex-col
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-[0_8px_24px_rgba(15,23,42,0.05)]
          "
        >
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
            Source stale
          </span>

          <span className="pt-1.5 text-2xl font-extrabold leading-9 text-slate-950">
            6
          </span>

          <p className="text-xs leading-5 text-slate-500">
            External quantities past the freshness
            <br />
            policy
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="
            flex
            min-h-[145px]
            flex-col
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-[0_8px_24px_rgba(15,23,42,0.05)]
          "
        >
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
            Changes pending
          </span>

          <span className="pt-1.5 text-2xl font-extrabold leading-9 text-slate-950">
            9
          </span>

          <p className="text-xs leading-5 text-slate-500">
            Add-on or service-change references
            <br />
            awaiting approval
          </p>
        </div>

        {/* CARD 4 */}
        <div
          className="
            flex
            min-h-[145px]
            flex-col
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-[0_8px_24px_rgba(15,23,42,0.05)]
          "
        >
          <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
            Open exceptions
          </span>

          <span className="pt-1.5 text-2xl font-extrabold leading-9 text-slate-950">
            7
          </span>

          <p className="text-xs leading-5 text-slate-500">
            Schedule, delivery, reminder or payment
            <br />
            issues
          </p>
        </div>
      </div>
    </section>
  );
}