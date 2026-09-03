import Image from "next/image";

export default function LocalizedDocs() {
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
          {/* Eyebrow */}
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
              Localized Documents
            </span>
          </div>

          {/* MOBILE + TABLET HEADING */}
          <h2
            className="
              !m-0
              !block
              !max-w-[700px]
              !text-[34px]
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-slate-900

              sm:!text-[42px]

              md:!text-[46px]

              lg:!hidden
            "
          >
            Adapt billing documents to approved language and locale —{" "}
            <span className="text-blue-600">
              while keeping the issued record authoritative.
            </span>
          </h2>

          {/* DESKTOP HEADING */}
          <h2
            className="
              !m-0
              !hidden
              !max-w-[650px]
              !font-extrabold
              !leading-[1.08]
              !tracking-[-0.035em]
              !text-slate-900

              lg:!block
              lg:!text-[42px]

              xl:!text-[48px]
            "
          >
            <span className="block whitespace-nowrap">
              Adapt billing documents
            </span>

            <span className="block whitespace-nowrap">
              to approved language
            </span>

            <span className="block whitespace-nowrap">
              and locale —
            </span>

            <span className="block whitespace-nowrap text-blue-600">
              while keeping the issued
            </span>

            <span className="block whitespace-nowrap text-blue-600">
              record authoritative.
            </span>
          </h2>

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
            Use governed language, locale, template, entity and
            document-formatting controls for invoices, credit notes and other
            approved billing surfaces. Financial values, document identity,
            issuer context, currency, source authority and history stay stable.
          </p>
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
              aspect-[526/483]
              w-full
              max-w-[526px]
              overflow-hidden
              rounded-2xl
            "
          >
            <Image
              src="/images/localized-documents/documents.png"
              alt="Localized billing documents"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 767px) 90vw,
                (max-width: 1023px) 85vw,
                (max-width: 1279px) 44vw,
                526px
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}