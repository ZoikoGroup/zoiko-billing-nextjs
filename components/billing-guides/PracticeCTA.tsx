import Image from "next/image";
import Link from "next/link";

export default function PracticeCTA() {
  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 md:px-10 lg:px-14 xl:px-20">
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1184px]
          flex-col
          overflow-hidden
          rounded-3xl
          bg-[#182a45]
          px-6
          py-8

          sm:px-8
          sm:py-10

          md:px-10
          md:py-12

          lg:min-h-[384px]
          lg:px-14
          lg:py-14
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-28
            h-80
            w-80
            rounded-full
            bg-[radial-gradient(circle,rgba(82,121,180,0.55)_0%,rgba(82,121,180,0)_70%)]

            sm:-right-16
            sm:-top-24
            sm:h-96
            sm:w-96
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-[760px]
            flex-col
            items-start
            gap-3.5
            pb-6
          "
        >
          {/* HEADING */}
          <h2
            className="
              !m-0
              max-w-[650px]
              text-[30px]
              font-extrabold
              leading-[1.2]
              tracking-[-0.03em]
              !text-white

              sm:text-[34px]

              md:text-[36px]

              lg:text-[40px]
              lg:leading-10
            "
          >
            Put the guidance
            <br />
            into practice.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              !m-0
              w-full
              max-w-[511px]
              text-[15px]
              font-normal
              leading-6
              !text-white/70

              sm:text-base
            "
          >
            Start with a guide, or go directly to the destination that owns
            the answer you need.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-3
              pt-3

              sm:w-auto
              sm:flex-row
              sm:flex-wrap
              sm:items-center
            "
          >
            {/* PRIMARY */}
            <Link
              href="/signup"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-white
                px-6
                py-2
                text-center
                text-sm
                font-semibold
                leading-6
                !text-[#182a45]
                outline
                outline-1
                outline-offset-[-1px]
                outline-white
                transition
                hover:bg-slate-100

                sm:w-auto
              "
            >
              Create account
            </Link>

            {/* SECONDARY */}
            <Link
              href="/book-a-demo"
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
                py-2
                text-center
                text-sm
                font-semibold
                leading-6
                !text-white
                transition
                hover:bg-white/10

                sm:w-auto
              "
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="
            relative
            z-10
            mt-2
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/15
            bg-white/5
            p-3

            sm:p-4

            lg:absolute
            lg:bottom-5
            lg:right-5
            lg:mt-0
            lg:w-[40%]
            lg:max-w-[478px]
            lg:p-5
          "
        >
          <div className="relative aspect-[478/295] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/billing-guides/practice.png"
              alt="Billing guidance in practice"
              fill
              className="object-cover"
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