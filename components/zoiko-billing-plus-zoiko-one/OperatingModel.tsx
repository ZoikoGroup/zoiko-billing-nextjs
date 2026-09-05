import Image from "next/image";
import Link from "next/link";

export default function OperatingModel() {
  return (
    <section className="w-full bg-white px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[532px]
          w-full
          max-w-[1360px]
          flex-col
          overflow-hidden
          rounded-[24px]
          bg-[#0D2348]
          px-7
          py-10
          sm:px-10
          sm:py-12
          md:px-12
          md:py-14
          lg:px-[60px]
          lg:py-[60px]
        "
      >
        {/* Background Glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-80
            w-80
            rounded-full
            bg-[radial-gradient(circle,_rgba(56,189,248,0.42)_0%,_rgba(56,189,248,0)_70%)]
            sm:h-96
            sm:w-96
            lg:-right-20
            lg:-top-24
            lg:h-[420px]
            lg:w-[420px]
          "
        />

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            max-w-[600px]
            flex-col
            items-start
          "
        >
          {/* Heading */}
          <h2
            className="
              !m-0
              max-w-[620px]
              !text-[30px]
              !font-extrabold
              !leading-[1.2]
              !tracking-[-0.035em]
              !text-white
              sm:!text-[34px]
              md:!text-[36px]
              lg:!text-[40px]
            "
          >
            Choose the operating model,
            <br className="hidden sm:block" />
            then connect only what you scope.
          </h2>

          {/* Description */}
          <p
            className="
              !m-0
              !mt-4
              max-w-[500px]
              !text-[15px]
              !font-normal
              !leading-7
              !text-white/65
              sm:mt-5
              sm:!text-base
            "
          >
            Verify current availability, preserve authority and recoverability,
            and use the route that matches your situation — commercial or
            operational, never both at once.
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
            "
          >
            {/* Create Account */}
            <Link
              href="/create-account"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-full
                bg-white
                px-5
                py-2.5
                text-sm
                font-semibold
                leading-6
                !text-[#0D2348]
                no-underline
                transition
                hover:bg-white/90
                sm:w-auto
              "
            >
              Create account
            </Link>

            {/* View Pricing */}
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
                border-white/35
                bg-transparent
                px-5
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
              View pricing
            </Link>

            {/* Book Demo */}
            <Link
              href="/book-demo"
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
                px-5
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
              Book a demo
            </Link>
          </div>

          {/* Supporting Text */}
          <p
            className="
              !m-0
              !mt-5
              max-w-[390px]
              !text-xs
              !font-normal
              !leading-5
              !text-white/55
              sm:mt-6
            "
          >
            Zoiko Billing is standalone SaaS and may also be provided as an
            integrated component of Zoiko One.
          </p>
        </div>

        {/* Image */}
        <div
          className="
            relative
            z-10
            mt-8
            w-full
            sm:mt-10
            lg:absolute
            lg:right-[60px]
            lg:top-[60px]
            lg:mt-0
            lg:w-[560px]
            lg:max-w-[560px]
          "
        >
          <div
            className="
              relative
              aspect-[560/410]
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-white/15
            "
          >
            <Image
              src="/images/zoiko-billing-plus-zoiko-one/operating-model.png"
              alt="Zoiko Billing operating model"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 90vw,
                560px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}