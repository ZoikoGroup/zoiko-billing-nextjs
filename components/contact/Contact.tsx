import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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
          lg:items-start
          lg:justify-between
          lg:gap-10
          lg:px-14
          lg:py-16

          xl:gap-14
          xl:px-20
          xl:py-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full min-w-0 lg:w-[52%]">
          <div className="flex w-full flex-col items-start gap-6">
            {/* Eyebrow */}
            <div className="flex h-4 items-center gap-2.5">
              <span className="h-px w-6 shrink-0 bg-blue-600 opacity-75" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-[#7890b2]

                  sm:text-xs
                "
              >
                Contact
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                !m-0
                w-full
                max-w-[620px]
                text-[34px]
                font-bold
                leading-[1.12]
                tracking-[-0.025em]
                text-slate-900

                sm:text-[38px]

                md:text-[42px]

                lg:text-[40px]

                xl:text-[44px]
              "
            >
              Tell us what this is about,
              <br />
              <span className="text-blue-600">
                and we will send you to
                <br />
                the right place.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Most inquiries have a destination built to handle them — with
              the right people, the right security handling, and often a faster
              answer than a general corporate queue. Choose an inquiry type
              below and the correct route appears with the reason for it.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3

                sm:w-auto
                sm:flex-row
                sm:flex-wrap
              "
            >
              <Link
                href="#inquiry"
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
                Choose an inquiry type
              </Link>

              <Link
                href="/help-center"
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
                Search Help Center
              </Link>
            </div>

            {/* Security Notice */}
            <div
              className="
                w-full
                max-w-[562px]
                rounded-r-[10px]
                border
                border-l-[3px]
                border-[#dfe5ee]
                border-l-blue-600
                bg-white
                px-4
                py-3.5
              "
            >
              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Never include passwords, authentication codes, API keys or
                full card and bank details in any message to us.
              </p>
            </div>
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
              aspect-[557/519]
              w-full
              max-w-[557px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/contact/contact.png"
              alt="Contact support"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                557px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}