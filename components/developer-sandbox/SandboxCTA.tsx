import Image from "next/image";
import Link from "next/link";

export default function SandboxCTA() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        pb-10
        sm:pb-12
        md:pb-16
        lg:pb-20
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1184px]
          overflow-hidden
          rounded-3xl
          bg-[#182A45]
          px-6
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
            -top-28
            h-80
            w-80
            rounded-full
            bg-[radial-gradient(circle,_rgba(82,111,159,0.55)_0%,_rgba(82,111,159,0)_70%)]
            sm:-right-20
            sm:-top-24
            sm:h-96
            sm:w-96
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            grid
            w-full
            items-center
            gap-8
            lg:grid-cols-[minmax(0,1fr)_478px]
            lg:gap-10
          "
        >
          {/* Left Content */}
          <div
            className="
              flex
              min-w-0
              w-full
              flex-col
              items-start
            "
          >
            {/* Heading */}
            <h2
              className="
                !m-0
                w-full
                max-w-[600px]
                !text-white
                text-[30px]
                font-extrabold
                leading-[1.2]
                tracking-[-0.03em]
                sm:text-[34px]
                md:text-[38px]
                lg:text-[40px]
              "
            >
              Test what is testable.
              <br />
              Know what is not.
            </h2>

            {/* Description */}
            <p
              className="
                !m-0
                mt-4
                w-full
                max-w-[511px]
                !text-white/70
                text-[15px]
                font-normal
                leading-6
                sm:mt-5
                sm:text-base
                sm:leading-7
              "
            >
              Per-dimension fidelity, explicit side-effect status, and an
              honest readiness review — so nothing that only works in the
              sandbox reaches production unnoticed.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                items-start
                gap-3
                sm:mt-7
                sm:w-auto
                sm:flex-row
                sm:items-center
                sm:gap-4
              "
            >
              {/* Primary Button */}
              <Link
                href="/request-sandbox-access"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-6
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  leading-6
                  !text-[#182A45]
                  no-underline
                  transition-opacity
                  hover:opacity-90
                  sm:w-auto
                "
              >
                Request sandbox access
              </Link>

              {/* Secondary Button */}
              <Link
                href="/sandbox-fidelity"
                className="
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/35
                  bg-transparent
                  px-6
                  py-2.5
                  text-center
                  text-sm
                  font-semibold
                  leading-6
                  !text-white
                  no-underline
                  transition-colors
                  hover:bg-white/10
                  sm:w-auto
                "
              >
                Fidelity matrix
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/15
              bg-white/[0.03]
            "
          >
            <Image
              src="/images/developer-sandbox/sandbox-cta.png"
              alt="Sandbox workspace"
              width={478}
              height={369}
              className="h-auto w-full object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 80vw,
                478px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}