import Image from "next/image";
import Link from "next/link";

export default function DeveloperSandbox() {
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
          md:pt-14

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
          lg:px-14
          lg:py-10

          xl:gap-14
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[53%]">
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
              Developers · Developer Sandbox
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
              !leading-[1.1]
              !tracking-[-0.035em]
              !text-slate-900

              sm:!text-[46px]

              md:!text-[50px]

              lg:!hidden
            "
          >
            Test integrations safely{" "}
            <span className="text-blue-600">
              before production.
            </span>
          </h2>

          {/* DESKTOP HEADING */}
          <h2
            className="
              !m-0
              !hidden
              !max-w-none
              !font-extrabold
              !leading-[1.1]
              !tracking-[-0.035em]
              !text-slate-900

              lg:!block
              lg:!text-[44px]

              xl:!text-[50px]
            "
          >
            <span className="block">
              Test integrations safely
            </span>

            <span className="block text-blue-600">
              before production.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              w-full
              max-w-[687px]
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:mt-8
              sm:text-base

              md:mt-9

              lg:mt-8

              xl:mt-9
            "
          >
            Use a controlled non-production environment to exercise approved
            Zoiko Billing integration behavior, build with synthetic test
            data, observe requests and asynchronous activity, and identify
            what still needs production validation.
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
              href="/request-sandbox-access"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-6
                py-2.5
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
              Request sandbox access
            </Link>

            <Link
              href="/api-documentation"
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
                py-2.5
                text-sm
                font-semibold
                leading-6
                text-[#091127]
                transition
                hover:bg-[#f8faff]

                sm:w-auto
              "
            >
              API Documentation
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
            lg:w-[43%]

            xl:w-[42%]
          "
        >
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[517px]
              overflow-hidden
              rounded-2xl
              aspect-[517/474]
            "
          >
            <Image
              src="/images/developer-sandbox/sandbox.png"
              alt="Zoiko Billing Developer Sandbox"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 43vw,
                517px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}