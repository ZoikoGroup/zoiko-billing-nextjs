import Image from "next/image";
import Link from "next/link";

export default function StandardiseBillingControl() {
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
          pb-12
          pt-8

          sm:px-8
          sm:pb-14
          sm:pt-10

          md:px-10
          md:pb-16

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
          lg:px-[100px]
          lg:py-6

          xl:gap-14
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[52%]">
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
              Standardise Billing Control
            </span>
          </div>

          {/* MOBILE + TABLET HEADING */}
          <h2
            className="
              !m-0
              !block
              !max-w-[700px]
              !text-[40px]
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-slate-900

              sm:!text-[46px]

              md:!text-[50px]

              lg:!hidden
            "
          >
            When billing rules live in people&apos;s heads,{" "}
            <span className="text-blue-600">
              they change without anyone deciding.
            </span>
          </h2>

          {/* DESKTOP HEADING */}
          <h2
            className="
              !m-0
              !hidden
              !max-w-none
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-slate-900

              lg:!block
              lg:!text-[44px]

              xl:!text-[50px]
            "
          >
            <span className="block">
              When billing rules live in
            </span>

            <span className="block">
              people&apos;s heads,{" "}
              <span className="text-blue-600">
                they
              </span>
            </span>

            <span className="block text-blue-600">
              change without anyone
            </span>

            <span className="block text-blue-600">
              deciding.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !mt-8
              w-full
              max-w-[687px]
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
            Consistent billing is a question of policy, ownership, approval,
            exception handling and evidence — five things that most teams
            have informally and few have explicitly.
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
              href="/book-demo"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-6
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
              Book Demo
            </Link>

            <Link
              href="/create-account"
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
                px-6
                text-sm
                font-semibold
                leading-6
                text-[#091127]
                transition
                hover:bg-[#f8faff]

                sm:w-auto
              "
            >
              Create Account
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
              aspect-[530/500]
              w-full
              max-w-[530px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/standardise-billing-control/hero.png"
              alt="Standardise Billing Control"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                530px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}