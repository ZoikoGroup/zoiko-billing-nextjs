import Image from "next/image";
import Link from "next/link";

export default function HandoffStateCta() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
          "
        >
          {/* CTA CARD */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-3xl
              bg-[#101D35]
              px-6
              py-8

              sm:px-8
              sm:py-10

              md:px-10
              md:py-12

              lg:px-14
            "
          >
            {/* BACKGROUND GLOW */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-28
                h-80
                w-80
                rounded-full
                bg-[radial-gradient(circle,_rgba(31,111,235,0.55)_0%,_rgba(31,111,235,0)_70%)]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                flex-col
                gap-8

                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:gap-12
              "
            >
              {/* LEFT CONTENT */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  items-start
                "
              >
                {/* HEADING */}
                <h2
                  className="
                    !m-0
                    w-full
                    max-w-[1000px]
                    !text-white
                    text-[30px]
                    font-extrabold
                    leading-[1.15]
                    tracking-[-0.03em]

                    sm:text-[34px]

                    md:text-[36px]
                    md:leading-10
                  "
                >
                  Know which state
              
                  your handoff actually reached.
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    !mt-4
                    w-full
                    max-w-[511px]
                    !text-white/70
                    text-[15px]
                    font-normal
                    leading-7

                    sm:mt-5
                    sm:text-base
                  "
                >
                  Sent, acknowledged, accepted and posted are different
                  answers. Check what each connection returns before you rely
                  on it at close.
                </p>

                {/* BUTTONS */}
                <div
                  className="
                    mt-6
                    flex
                    w-full
                    flex-col
                    gap-3

                    sm:mt-7
                    sm:w-auto
                    sm:flex-row
                    sm:flex-wrap
                  "
                >
                  {/* PRIMARY */}
                  <Link
                    href="#correction"
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
                      text-sm
                      font-semibold
                      leading-6
                      !text-[#101D35]
                      no-underline
                      transition
                      hover:bg-slate-100

                      sm:w-auto
                    "
                  >
                    Browse connections
                  </Link>

                  {/* SECONDARY */}
                  <Link
                    href="/integration-availability"
                    className="
                      inline-flex
                      min-h-11
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      bg-transparent
                      px-6
                      py-2.5
                      text-sm
                      font-semibold
                      leading-6
                      !text-white
                      no-underline
                      transition
                      hover:bg-white/10

                      sm:w-auto
                    "
                  >
                    Integration availability
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div
                className="
                  relative
                  w-full
                  shrink-0

                  lg:w-[478px]
                  lg:max-w-[478px]
                "
              >
                <div
                  className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/5
                    p-4

                    sm:p-5
                  "
                >
                  <div className="relative aspect-[478/295] w-full">
                    <Image
                      src="/images/accounting-and-erp/handoff.png"
                      alt="Handoff state and integration status"
                      fill
                      className="object-cover"
                      sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 1023px) 90vw,
                        478px
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}