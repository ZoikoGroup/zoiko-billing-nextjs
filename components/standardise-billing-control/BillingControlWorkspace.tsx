import Image from "next/image";

export default function BillingControlWorkspace() {
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
            gap-5
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
              gap-2.5
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
                Illustrative billing control workspace
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[662px]
                pt-[2.5px]
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
              What explicit control looks like in an
            
              interface.
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
              <span className="font-bold">
                Every value uses specimen data
              </span>{" "}
              and must not resemble a real customer, invoice, tax rule, price
              or live operational record. Navigation labels are conceptual and
              annotated as illustrative.
            </p>
          </div>

          {/* WORKSPACE IMAGE */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-xl
              border
              border-[#dfe5ee]
              bg-white
              pt-5
              shadow-[0_4px_22px_rgba(11,27,60,0.07)]
            "
          >
            <Image
              src="/images/standardise-billing-control/image.png"
              alt="Illustrative billing control workspace"
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