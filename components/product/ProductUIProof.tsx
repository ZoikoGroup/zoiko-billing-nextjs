export default function ProductUIProof() {
  const proofPoints = [
    {
      number: "1",
      title: "Connected record",
      description: (
        <>
          Customer, invoice, payment and balance visible together without being
          merged into one object.
        </>
      ),
    },
    {
      number: "2",
      title: "Explicit state",
      description: (
        <>
          Issued, delivery-unknown and partially allocated shown separately —
          <strong> text plus shape, never color alone</strong>.
        </>
      ),
    },
    {
      number: "3",
      title: "Governed action",
      description:
        "What can be done here depends on role and approval state.",
    },
    {
      number: "4",
      title: "Evidence trail",
      description:
        "The correction is appended. The original entry stays in the timeline.",
    },
  ];

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
              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />

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
                Product UI proof
              </span>

              <span
                className="
                  h-px
                  w-4
                  shrink-0
                  bg-[#7890b2]
                  opacity-40
                "
              />
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
              One composite, with fixtures rather than screenshots.
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
              A single implementation-aware view proves the record model.{" "}
              <strong className="font-semibold">
                All values are deterministic demo fixtures
              </strong>{" "}
              — nothing here is production data, and no authenticated behavior
              is simulated.
            </p>
          </div>

          {/* PRODUCT IMAGE */}
          <div className="w-full pt-7">
            <img
              src="/images/product/product-ui-proof.png"
              alt="Product UI proof showing connected billing records"
              className="
                block
                h-auto
                w-full
                rounded-xl
                border
                border-[#dfe5ee]
                shadow-[0_4px_24px_rgba(11,27,60,0.08)]
              "
            />
          </div>

          {/* PROOF POINTS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {proofPoints.map((point) => (
              <div
                key={point.number}
                className="
                  flex
                  min-h-[160px]
                  flex-col
                  items-start
                  rounded-[10px]
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-3
                  pt-3
                  pb-8
                  shadow-none
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-600
                  "
                >
                  <span
                    className="
                      text-center
                      text-xs
                      font-bold
                      leading-4
                      text-white
                    "
                  >
                    {point.number}
                  </span>
                </div>

                {/* TITLE */}
                <div className="mt-5 w-full">
                  <h3
                    className="
                      !m-0
                      text-xs
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {point.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-2 w-full">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}