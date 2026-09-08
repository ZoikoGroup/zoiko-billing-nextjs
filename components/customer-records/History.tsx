import Image from "next/image";

export default function History() {
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
              max-w-[1000px]
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
                History, provenance, audit &amp; correction
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Every event names its source, actor and effect.
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
              Customer-record history is operational evidence. It is
              inspectable and exportable according to role, purpose and
              retention policy — and it never becomes a marketing analytics
              feed.
            </p>
          </div>

          {/* MAIN IMAGE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
            "
          >
            <Image
              src="/images/customer-records/history.png"
              alt="Customer record history and audit"
              width={1184}
              height={579}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1240px"
            />
          </div>

          {/* INFORMATION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

              md:grid-cols-2
            "
          >
            {/* REQUIRED FIELDS */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-3
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-6
                py-6
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Required fields on every event
              </h3>

              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Event type, actor, source, before and after, effective time,
                recorded time, reason or ticket for high-risk changes, approval
                state where required, downstream impact where traceable, and a
                correction link showing how an error was fixed without erasing
                evidence.
              </p>
            </div>

            {/* AUDIT */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-3
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-6
                py-6
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Audit is not analytics
              </h3>

              <p
                className="
                  !m-0
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                General website and product analytics must never ingest names,
                emails, tax identifiers, addresses, invoice content or
                free-text record details. Sensitive notes stay out of general
                history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}