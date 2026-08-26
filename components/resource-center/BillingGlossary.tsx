import Image from "next/image";

export default function BillingGlossary() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-start
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-10
          md:py-20

          lg:px-14

          xl:px-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[662px]
              flex-col
              items-center
              gap-3
              pt-2
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

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
                Billing glossary &amp; direct answers
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.035em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              A definition is not accounting advice.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Where a term varies by jurisdiction or accounting practice, the
              scope is stated rather than forcing one universal definition.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5
              pt-1

              lg:grid-cols-2
            "
          >
            {/* IMAGE */}
            <div
              className="
                relative
                min-h-[280px]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:min-h-[360px]

                lg:min-h-[414px]
              "
            >
              <Image
                src="/images/resource-center/billing-glossary.png"
                alt="Billing glossary and direct answers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* EXPLANATION CARD */}
            <div
              className="
                flex
                min-h-[280px]
                w-full
                flex-col
                items-start
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#eef0f3]
                p-5

                sm:min-h-[360px]
                sm:p-6

                lg:min-h-[414px]
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Why scope beats a universal definition
              </h3>

              <p
                className="
                  !m-0
                  mt-1.5
                  w-full
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Billing terminology genuinely differs across jurisdictions and
                accounting practices. A glossary that flattens that into one
                confident definition will be wrong for some readers in a way
                they cannot detect — which is worse than a definition that
                names its own boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}