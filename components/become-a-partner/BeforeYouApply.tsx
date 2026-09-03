export default function BeforeYouApply() {
  const cards = [
    {
      title: "Review the program",
      content: (
        <>
          The application asks which path you are applying to.{" "}
          <span className="font-semibold text-[#526fa0]">
            Partner Program
          </span>{" "}
          describes what each involves — applying to the wrong one costs a
          review cycle.
        </>
      ),
    },
    {
      title: "Bring context, not documents",
      content: (
        <>
          The initial form asks for a short rationale.{" "}
          <strong>
            No contracts, questionnaires, certificates or financial documents
            are collected at this stage.
          </strong>
        </>
      ),
    },
    {
      title: "Nothing confidential",
      content: (
        <>
          Do not include customer names, customer data, credentials or
          anything under an NDA. A free-text field is not a secure channel.
        </>
      ),
    },
    {
      title: "An integration is a separate route",
      content: (
        <>
          If you have built something technical,{" "}
          <span className="font-semibold text-[#526fa0]">
            Submit an Integration
          </span>{" "}
          is the review path. Being technical does not make this the right
          form.
        </>
      ),
    },
    {
      title: "No timeline is promised",
      content: (
        <>
          The application states no response time or review duration, because
          none is source-approved. States tell you where things stand instead.
        </>
      ),
    },
    {
      title: "Already a partner?",
      content: (
        <>
          An existing relationship is managed through approved partner routes.{" "}
          <strong>
            Submitting a new application does not update an existing one.
          </strong>
        </>
      ),
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
                Before you apply
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
              Four things worth knowing first.
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
              None of these is a barrier. They exist so a submission is useful
              rather than something the review process has to come back to you
              about.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="
                  flex
                  min-h-[180px]
                  w-full
                  flex-col
                  items-start
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    w-full
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {card.title}
                </h3>

                {/* CONTENT */}
                <p
                  className="
                    !m-0
                    w-full
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}