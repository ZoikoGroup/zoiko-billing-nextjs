import Image from "next/image";

export default function IntegrationMapping() {
  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-14

          md:px-10
          md:py-16

          lg:px-14
          lg:py-20

          xl:px-24
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-5
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
              flex-col
              items-center
              gap-3
              pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />

              <span
                className="
                  text-center
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.16em]
                  text-blue-600

                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Integrations, ERP, CRM, providers &amp; Zoiko One
              </span>

              <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
                text-center
                text-[30px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.035em]
                text-slate-900

                sm:text-[36px]

                md:text-[40px]

                lg:text-4xl
                lg:leading-10
              "
            >
              No silent remapping.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-center
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              An external source changing an entity identifier, customer
              relationship or merchant account must enter versioned mapping
              and reconciliation logic rather than silently moving historical
              billing records.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              w-full
              max-w-[1184px]
              overflow-hidden
              rounded-2xl
              border
              border-[#e1e5eb]
              bg-white
              pt-5
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <div className="relative aspect-[1184/592] w-full">
              <Image
                src="/images/multi-entity-billing/mapping.png"
                alt="Integration mapping and reconciliation"
                fill
                priority
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 90vw,
                  1184px
                "
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}