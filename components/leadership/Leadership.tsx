import Image from "next/image";
import Link from "next/link";

export default function Leadership() {
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
              Leadership
            </span>
          </div>

          {/* MOBILE + TABLET HEADING */}
          <h1
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
            Who is accountable,{" "}
            <span className="text-blue-600">
              and for exactly what.
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
              !text-slate-900

              lg:!block
              lg:!text-[44px]

              xl:!text-[50px]
            "
          >
            <span className="block">
              Who is accountable,
            </span>

            <span className="block text-blue-600">
              and  for exactly what.
            </span>

           
          </h1>

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
            This page presents approved Zoiko Billing leadership records —
            role, accountability domain and decision scope. It states what
            each person is publicly accountable for, and it is careful about
            what a leadership title does and does not establish.
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
              href="#leadership"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-7
                text-center
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                transition
                hover:bg-blue-700

                sm:w-auto
              "
            >
              Meet the leadership team
            </Link>

            <Link
              href="#"
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
                text-center
                text-sm
                font-semibold
                text-[#091127]
                transition
                hover:bg-[#f8faff]

                sm:w-auto
              "
            >
              How Zoiko Billing is governed
            </Link>
          </div>

          {/* SECONDARY LINK */}
          <Link
            href="/zoiko-billing-plus-zoiko-one"
            className="
              mt-5
              inline-flex
              min-h-11
              items-center
              gap-1.5
              text-sm
              font-semibold
              leading-6
              text-blue-600
              transition
              hover:text-blue-700

              sm:mt-4
              sm:text-base
            "
          >
            <span>About Zoiko Billing</span>

            <span
              aria-hidden="true"
              className="text-base font-normal leading-6"
            >
              →
            </span>
          </Link>

          {/* NOTE */}
          <div
            className="
              mt-7
              w-full
              max-w-[562px]
              rounded-r-[10px]
              border
              border-l-[3px]
              border-[#1f6feb]
              bg-white
              px-4
              py-3.5

              sm:mt-8
              sm:py-4
            "
          >
            <p
              className="
                !m-0
                text-sm
                font-normal
                leading-5
                text-[#5d7192]
              "
            >
              Public professional information only. No personal contact
              details, home address, family information or protected
              attributes appear on this page.
            </p>
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
              src="/images/leadership/leadership.png"
              alt="Zoiko Billing leadership"
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