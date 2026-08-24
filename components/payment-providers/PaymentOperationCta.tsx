import Image from "next/image";
import Link from "next/link";

export default function PaymentOperationCta() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1184px]
          px-5
          py-8
          sm:px-8
          sm:py-10
          md:px-10
          lg:px-0
          lg:py-12
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-[#172F5C]
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
              -right-24
              -top-28
              h-80
              w-80
              rounded-full
              bg-[radial-gradient(circle,_rgba(31,111,235,0.55)_0%,_rgba(31,111,235,0)_70%)]
            "
          />

          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              w-full
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-12
            "
          >
            {/* Left Content */}
            <div
              className="
                flex
                min-w-0
                w-full
                flex-1
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
                  leading-[1.15]
                  tracking-[-0.03em]
                  sm:text-[34px]
                  md:text-[36px]
                  md:leading-10
                "
              >
                Check the operation,
                <br />
                not the provider name.
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
                Verify charge, refund, dispute and settlement support for your
                exact currency, market, entity and provider account before you
                commit.
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
                {/* Primary */}
                <Link
                  href="/payment-providers"
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
                    !text-[#172F5C]
                    no-underline
                    transition
                    hover:bg-slate-100
                    sm:w-auto
                  "
                >
                  Browse providers
                </Link>

                {/* Secondary */}
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
                    border-white/35
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

            {/* Right Image */}
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
                  aspect-[478/344]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/5
                  p-3
                  sm:p-4
                  md:p-5
                "
              >
                <Image
                  src="/images/payment-providers/operation-check.png"
                  alt="Payment operation verification"
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
        </div>
      </div>
    </section>
  );
}