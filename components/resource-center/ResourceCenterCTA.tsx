import Image from "next/image";
import Link from "next/link";

export default function ResourceCenterCTA() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-5
        pb-10
        pt-10
        sm:px-8
        sm:pb-12
        sm:pt-12
        md:px-10
        md:pb-16
        md:pt-16
        lg:px-14
        lg:pb-20
        lg:pt-20
        xl:px-20
      "
    >
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
          bg-[#182A45]
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
        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-28
            h-80
            w-80
            rounded-full
            bg-[radial-gradient(circle,_rgba(82,121,180,0.55)_0%,_rgba(82,121,180,0)_70%)]
            sm:h-96
            sm:w-96
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-[760px]
            flex-col
            items-start
          "
        >
          {/* Heading */}
          <h2
            className="
              !m-0
              w-full
              max-w-[650px]
              !text-white
              text-[30px]
              font-extrabold
              leading-[1.2]
              tracking-[-0.035em]
              sm:text-[34px]
              md:text-[36px]
              lg:text-[40px]
            "
          >
            Ready to put better billing
            <br className="hidden sm:block" />
            operations into practice?
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
            Start with the resources above, or go straight to the destination
            that owns the answer you need.
          </p>

          {/* Buttons */}
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
              sm:items-center
            "
          >
            {/* Primary */}
            <Link
              href="/signup"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-transparent
                bg-white
                px-6
                py-2.5
                text-center
                text-sm
                font-semibold
                leading-6
                !text-[#182A45]
                no-underline
                transition
                hover:bg-white/90
                sm:w-auto
              "
            >
              Create account
            </Link>

            {/* Secondary */}
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
                py-2.5
                text-center
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
              Book a demo
            </Link>
          </div>
        </div>

        {/* Image */}
        <div
          className="
            relative
            z-10
            mt-8
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/15
            bg-white/5
            sm:mt-9
            lg:absolute
            lg:bottom-5
            lg:right-5
            lg:mt-0
            lg:w-[478px]
            lg:max-w-[478px]
          "
        >
          <Image
            src="/images/resource-center/billing-cta.png"
            alt="Zoiko Billing resource center"
            width={478}
            height={342}
            className="h-auto w-full object-cover"
            sizes="
              (max-width: 639px) 100vw,
              (max-width: 1023px) 80vw,
              478px
            "
          />
        </div>
      </div>
    </section>
  );
}