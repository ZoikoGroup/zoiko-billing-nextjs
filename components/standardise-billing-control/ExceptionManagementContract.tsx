import Image from "next/image";

export default function ExceptionManagementContract() {
  return (
    <section className="w-full bg-white">
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
            gap-4
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
                Exception management contract
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
              Nine conceptual fields, five statuses,
            
              four edge cases.
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
              An exception is{" "}
              <span className="font-bold">
                a controlled deviation from the standard operating rule, for a
                bounded reason and scope
              </span>{" "}
              — the words "controlled" and "bounded" carry the whole
              definition.
            </p>
          </div>

          {/* INFORMATION CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5
              pt-7

              md:flex-row
            "
          >
            {/* REQUIRED CONCEPTUAL FIELDS */}
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-start
                gap-2
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-6
                pb-9
                pt-6
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
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
                Required conceptual fields
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Title · affected control · scope · owner · reason category ·
                requested period or context · review state · resolution path ·
                evidence link.
              </p>

              <p
                className="
                  !m-0
                  w-full
                  pt-1
                  text-sm
                  leading-5
                  text-[#5d7192]
                "
              >
                <strong>
                  Resolution path is the field most often missing in practice
                </strong>
                , and its absence is what turns a temporary deviation into an
                undocumented standard.
              </p>
            </div>

            {/* STATUS VOCABULARY */}
            <div
              className="
                flex
                min-w-0
                flex-1
                flex-col
                items-start
                gap-2
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#f1f3f6]
                px-6
                pb-9
                pt-6
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
                Status vocabulary
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-sm
                  font-normal
                  leading-5
                  text-[#5d7192]
                "
              >
                Proposed · Under review · Approved exception · Rejected ·
                Resolved.
              </p>

              <p
                className="
                  !m-0
                  w-full
                  pt-1
                  text-sm
                  leading-5
                  text-[#5d7192]
                "
              >
                <strong>Recommended only.</strong> These are not verified
                product statuses, and "Approved exception" deliberately keeps
                the word exception rather than becoming a second kind of
                normal.
              </p>
            </div>
          </div>

          {/* IMAGE */}
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
              src="/images/standardise-billing-control/image1.png"
              alt="Illustrative exception management workspace"
              width={1184}
              height={592}
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}