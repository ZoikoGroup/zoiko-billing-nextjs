import Image from "next/image";
import Link from "next/link";

export default function InvoicesHero() {
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
              Invoices &amp; Credit Notes
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
            Create and correct billing documents{" "}
            <span className="text-blue-600">
              without breaking the record.
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
              Create and correct
            </span>

            <span className="block">
              billing documents
            </span>

            <span className="block text-blue-600">
              without breaking
            </span>

            <span className="block text-blue-600">
              the record.
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
            Zoiko Billing manages invoices and credit notes from draft and
            approval through issue, delivery, correction and connected
            payment or balance status, with entity, numbering, tax-context
            and audit controls.
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
                rounded-full
                bg-blue-600
                px-7
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(31,111,235,0.26)]
                transition
                hover:bg-blue-700

                sm:w-auto
              "
            >
              Create Account
            </Link>

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
                border-[#dfe5ee]
                bg-white
                px-7
                text-sm
                font-semibold
                text-[#091127]
                transition
                hover:bg-[#f8faff]

                sm:w-auto
              "
            >
              Book a Demo
            </Link>
          </div>

          {/* EXPLORE LINK */}
          <Link
            href="#document-lifecycle"
            className="
              mt-2
              inline-flex
              min-h-11
              items-center
              gap-2
              py-2.5
              text-sm
              font-medium
              leading-6
              text-[#5d7192]
              transition
              hover:text-blue-600

              sm:text-base
            "
          >
            <span>Explore the document lifecycle</span>

            <span
              aria-hidden="true"
              className="text-base font-semibold"
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
            lg:w-[44%]

            xl:w-[43%]
          "
        >
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[547px]
              overflow-hidden
              rounded-2xl
              bg-[#f4f7fb]
              p-3

              sm:p-4

              md:p-5

              lg:p-5
            "
          >
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-xl
                border
                border-[#e2e8f0]
                bg-white
                shadow-[0_22px_50px_-20px_rgba(14,33,27,0.18),0_2px_6px_rgba(14,33,27,0.05)]
              "
            >
              <div className="relative aspect-[500/612] w-full">
                <Image
                  src="/images/invoices/invoice.png"
                  alt="Zoiko Billing invoices and credit notes"
                  fill
                  priority
                  className="object-cover"
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 767px) 90vw,
                    (max-width: 1023px) 85vw,
                    (max-width: 1279px) 44vw,
                    547px
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