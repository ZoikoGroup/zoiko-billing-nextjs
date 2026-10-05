import Image from "next/image";

export default function ComplianceRequirementRegistry() {
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
                Compliance requirement registry
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
              Information architecture, not a live legal database.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                text-[15px]
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              <span className="font-bold">
                No jurisdiction, regulator, rate, threshold, due date, form or
                filing frequency appears in any row.
              </span>{" "}
              <span className="font-normal">
                The registry demonstrates structure and states, not content.
              </span>
            </p>
          </div>

          {/* REGISTRY IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              rounded-xl
              border
              border-[#e1e5ea]
              bg-white
              shadow-[0_4px_22px_rgba(11,27,60,0.07)]
            "
          >
            <Image
              src="/images/local-compliance/image1.png"
              alt="Compliance requirement registry information architecture"
              width={1184}
              height={592}
              className="
                block
                h-auto
                w-full
                object-contain
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}