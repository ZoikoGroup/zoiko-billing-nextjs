import Image from "next/image";
import Link from "next/link";

export default function EnterpriseHero() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-white to-[#f8faff]">
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
          lg:items-start
          lg:gap-10
          lg:px-14
          lg:pt-12

          xl:gap-14
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[52%]">
          {/* Eyebrow */}
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
              Solution for enterprise organizations
            </span>
          </div>

          {/* MOBILE + TABLET HEADING */}
          <h1
            className="
              !m-0
              !block
              !max-w-[760px]
              !text-[40px]
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-[#091127]

              sm:!text-[46px]

              md:!text-[50px]

              lg:!hidden
            "
          >
            Govern billing across teams, entities and systems{" "}
            <span className="text-blue-600">
              without losing the source of truth.
            </span>
          </h1>

          {/* DESKTOP HEADING */}
          <h1
  className="
    !m-0
    !hidden
    !max-w-none
    !font-extrabold
    !leading-[1.08]
    !tracking-[-0.035em]
    !text-[#091127]

    lg:!block
    lg:!text-[46px]

    xl:!text-[52px]
  "
>
  <span className="block">
    Govern billing across
  </span>

  <span className="block">
    teams, entities and
  </span>

  <span className="block">
    systems{" "}
    <span className="text-blue-600">
      without losing
    </span>
  </span>

  <span className="block text-blue-600">
    the source of truth.
  </span>
</h1>

          {/* DESCRIPTION */}
          <p
            className="
              !mt-8
              w-full
              max-w-[690px]
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
            Coordinate billing records, policies, approvals, documents,
            delivery, receivables, payments, integrations, entity context and
            operational evidence through explicit ownership and current states
            — while keeping each system, team and jurisdiction accountable for
            its own authority.
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
              href="/pricing-and-plans"
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
            lg:w-[48%]
          "
        >
          <div
            className="
              w-full
              rounded-[24px]
              bg-[#f0ecff]
              p-3

              sm:rounded-[28px]
              sm:p-4

              lg:p-4

              xl:p-5
            "
          >
            <div
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
                rounded-[18px]

                sm:rounded-[20px]
              "
            >
              <Image
                src="/images/enterprise-organizations/billing-network.png"
                alt="Enterprise billing network"
                fill
                priority
                className="object-cover"
                sizes="
                  100vw
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}