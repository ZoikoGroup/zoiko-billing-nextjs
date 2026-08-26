import Image from "next/image";
import Link from "next/link";

export default function SdkCta() {
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
          lg:flex-row
          lg:items-center
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
            bg-[radial-gradient(circle,_rgba(64,120,190,0.55)_0%,_rgba(64,120,190,0)_70%)]
            sm:-right-16
            lg:-right-24
          "
        />

        {/* Left Content */}
        <div
          className="
            relative
            z-10
            flex
            min-w-0
            w-full
            flex-col
            items-start
            lg:w-[calc(100%-518px)]
            lg:max-w-[620px]
          "
        >
          {/* Heading */}
          <h2
            className="
              !m-0
              w-full
              max-w-[600px]
              !text-white
              text-3xl
              font-extrabold
              leading-10
              tracking-[-0.035em]
              sm:text-4xl
            "
          >
            Copy code that
            <br />
            knows its own limits.
          </h2>

          {/* Description */}
          <p
            className="
              !m-0
              mt-4
              w-full
              max-w-[511px]
              !text-white/70
              text-sm
              font-normal
              leading-6
              sm:mt-5
              sm:text-base
              sm:leading-7
            "
          >
            Provenance, version scope, prerequisites, expected evidence,
            failure guidance — and an explicit statement of what each example
            does not prove.
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
              sm:flex-wrap
              sm:items-center
            "
          >
            {/* Browse SDKs */}
            <Link
              href="/sdks"
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
              Browse SDKs
            </Link>

            {/* Browse Examples */}
            <Link
              href="/examples"
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
              Browse examples
            </Link>

            {/* API Documentation */}
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
                border-white/30
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
              API Documentation
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            relative
            z-10
            mt-8
            w-full
            shrink-0
            sm:mt-9
            lg:absolute
            lg:right-8
            lg:top-1/2
            lg:mt-0
            lg:w-[478px]
            lg:max-w-[478px]
            lg:-translate-y-1/2
          "
        >
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-white/15
              bg-white/5
            "
          >
            <Image
              src="/images/sdks-and-examples/sdk-cta.png"
              alt="SDK example preview"
              width={478}
              height={345}
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