import Image from "next/image";
import Link from "next/link";

export default function DocumentsDelivery() {
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
          py-10

          sm:px-8
          sm:py-12

          md:px-10
          md:py-16

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-12
          lg:px-14
          lg:py-20

          xl:gap-16
          xl:px-20
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            w-full
            min-w-0

            lg:w-[50%]
            xl:w-[51%]
          "
        >
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-5 shrink-0 bg-blue-600" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#5679a8]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Documents &amp; Delivery
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
              !m-0
              max-w-[700px]
              text-[40px]
              font-medium
              leading-[1.08]
              tracking-[-0.035em]
              text-slate-900

              sm:text-[46px]

              md:text-[50px]

              lg:text-[46px]

              xl:text-[52px]
            "
          >
            Deliver the right
            <br className="hidden sm:block" />
            billing document
            <br className="hidden sm:block" />
            <span className="text-blue-600">
              through a controlled path.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              w-full
              max-w-[560px]
              text-[15px]
              font-normal
              leading-7
              text-[#5d7192]

              sm:mt-8
              sm:text-base

              lg:mt-7
            "
          >
            Zoiko Billing supports versioned rendering, verified recipients,
            governed release, channel-specific delivery, recovery and
            accountable evidence for approved billing documents.
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
              href="/create-account"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                bg-blue-600
                px-5
                text-sm
                font-normal
                text-white
                transition
                hover:bg-blue-700

                sm:w-auto
              "
            >
              Create Account
            </Link>

            <Link
              href="/request-demo"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-zinc-200
                bg-white
                px-5
                text-sm
                font-normal
                text-slate-900
                transition
                hover:bg-slate-50

                sm:w-auto
              "
            >
              Book a Demo
            </Link>
          </div>

          {/* SECONDARY LINK */}
          <Link
            href="/documents-and-delivery"
            className="
              mt-5
              inline-flex
              min-h-11
              items-center
              gap-2
              text-sm
              font-normal
              text-blue-600
              transition
              hover:text-blue-700

              sm:mt-4
              sm:text-base
            "
          >
            <span>Explore the delivery model</span>

            <span
              aria-hidden="true"
              className="text-base leading-6"
            >
              ↓
            </span>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            mt-10
            w-full

            sm:mt-12

            md:mt-14

            lg:mt-0
            lg:w-[46%]

            xl:w-[44%]
          "
        >
          <div
            className="
              relative
              mx-auto
              aspect-[500/620]
              w-full
              max-w-[500px]
              overflow-hidden
              rounded-3xl
              bg-[#edf5f8]
              p-4

              sm:p-5

              md:p-6

              lg:p-7
          "
          >
            {/* Background glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_20%_20%,rgba(50,220,140,0.18),transparent_45%)]
              "
            />

            {/* IMAGE */}
            <div
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-zinc-200
                bg-white
                shadow-[0_22px_50px_-20px_rgba(14,33,27,0.24)]
              "
            >
              <Image
                src="/images/documents-and-delivery/docs.png"
                alt="Billing documents and delivery"
                fill
                priority
                className="object-cover"
                sizes="
                  (max-width: 639px) 90vw,
                  (max-width: 1023px) 75vw,
                  (max-width: 1279px) 42vw,
                  500px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}