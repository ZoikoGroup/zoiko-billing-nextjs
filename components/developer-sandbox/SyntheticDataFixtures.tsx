import Image from "next/image";

export default function SyntheticDataFixtures() {
  const requirements = [
    {
      title: "Provenance",
      description: "Where the fixture came from, and who approved it",
    },
    {
      title: "Scope",
      description:
        "Which objects and scenarios it creates, previewed before seeding",
    },
    {
      title: "Dependencies",
      description: "What the fixture requires to exist first",
    },
    {
      title: "Identifiers",
      description:
        "Clearly synthetic, and not reused as production references",
    },
    {
      title: (
        <>
          Reset
          <br />
          relationship
        </>
      ),
      description: "What a reset does to fixture-created objects",
    },
    {
      title: "Retention",
      description:
        "How long fixture data persists, only from canonical policy",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f8fa]">
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
            flex
            w-full
            max-w-[1240px]
            flex-col
            items-center
            gap-8

            sm:gap-10

            lg:gap-11
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
                Synthetic data &amp; fixtures
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !max-w-[662px]
                !text-[30px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]
              "
            >
              Test data is a governed input, not disposable content.
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
              Safe synthetic fixtures are separated from anything that could
              carry real customer, payment or regulated material.
            </p>
          </div>

          {/* CONTENT */}
          <div
            className="
              grid
              w-full
              max-w-[1184px]
              grid-cols-1
              gap-5

              lg:grid-cols-[minmax(0,557px)_minmax(0,605px)]
              lg:gap-[22px]
            "
          >
            {/* FIXTURE REQUIREMENTS */}
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
              {/* CARD HEADER */}
              <div
                className="
                  border-b
                  border-[#dfe5ee]
                  bg-[#fafbfc]
                  px-5
                  py-4
                "
              >
                <span className="text-sm font-normal leading-5 text-[#5d7192]">
                  Fixture requirements.
                </span>
              </div>

              {/* REQUIREMENTS */}
              <div className="w-full">
                {requirements.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      grid
                      w-full
                      grid-cols-[112px_minmax(0,1fr)]
                      ${
                        index !== requirements.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* TITLE */}
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-semibold
                          leading-5
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="px-4 py-3.5">
                      <span
                        className="
                          text-sm
                          font-normal
                          leading-5
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="
                relative
                min-h-[300px]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:min-h-[400px]

                lg:min-h-[478px]
              "
            >
              <Image
                src="/images/developer-sandbox/fixtures.png"
                alt="Synthetic data and fixture sandbox"
                fill
                className="object-cover"
                sizes="
                  (max-width: 1023px) 100vw,
                  (max-width: 1279px) 50vw,
                  605px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}