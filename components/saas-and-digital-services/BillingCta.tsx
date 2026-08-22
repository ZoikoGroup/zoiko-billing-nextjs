import Image from "next/image";

export default function BillingCta() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-7 lg:py-12">
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            bg-slate-900
            px-6
            py-8
            sm:rounded-3xl
            sm:px-8
            sm:py-10
            lg:min-h-[504px]
            lg:px-14
            lg:py-14
          "
        >
          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-28
              h-72
              w-72
              rounded-full
              bg-blue-500/20
              blur-3xl
              sm:h-80
              sm:w-80
              lg:h-96
              lg:w-96
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              max-w-[500px]
              flex-col
              items-start
              gap-3.5
              lg:max-w-[480px]
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[24px]
                font-extrabold
                leading-[1.25]
                tracking-[-0.01em]
                text-white
                sm:text-[26px]
                lg:text-[28px]
              "
            >
              <span className="block">
                Keep recurring digital-service
              </span>

              <span className="block">
                billing explicit.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                max-w-[450px]
                text-sm
                font-normal
                leading-6
                text-white/70
                sm:text-base
              "
            >
              Know the service period, billing basis, source input, change
              history and downstream finance state behind every billing event.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-wrap gap-3 pt-2 sm:pt-3">
              <button
                type="button"
                className="
                  min-h-11
                  rounded-full
                  bg-white
                  px-5
                  text-sm
                  font-semibold
                  leading-6
                  text-slate-900
                  transition
                  hover:bg-gray-100
                  sm:px-6
                "
              >
                Create account
              </button>

              <button
                type="button"
                className="
                  min-h-11
                  rounded-full
                  border
                  border-white/30
                  px-5
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                  transition
                  hover:bg-white/10
                  sm:px-6
                "
              >
                Book a demo
              </button>

              <button
                type="button"
                className="
                  min-h-11
                  rounded-full
                  border
                  border-white/30
                  px-5
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                  transition
                  hover:bg-white/10
                  sm:px-6
                "
              >
                View pricing
              </button>
            </div>
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
              lg:right-10
              lg:top-6
              lg:mt-0
              lg:w-[44%]
              lg:max-w-[478px]
            "
          >
            <div
              className="
                relative
                aspect-[478/480]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white/10
              "
            >
              <Image
                src="/images/saas-and-digital-services/billing-cta.png"
                alt="Recurring digital-service billing"
                fill
                className="object-cover"
                sizes="
                  (max-width: 1023px) 100vw,
                  44vw
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}