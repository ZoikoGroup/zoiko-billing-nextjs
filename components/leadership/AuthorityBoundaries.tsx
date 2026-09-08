import Link from "next/link";

const questions = [
  {
    question: "Who runs Zoiko Group?",
    authority: "Zoiko Group",
    behavior: (
      <>
        Linked. Duplicated locally{" "}
        <strong>only where an approved cross-listing exists</strong>
      </>
    ),
  },
  {
    question: "Who is the legal director or contracting officer?",
    authority: "Legal and company records",
    behavior: <strong>Never inferred from a leadership title</strong>,
  },
  {
    question: "Who is the employer of record?",
    authority: "Legal registry",
    behavior: (
      <>
        Can vary by jurisdiction;{" "}
        <Link
          href="/careers"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Careers
        </Link>{" "}
        states it per role
      </>
    ),
  },
  {
    question: "How do I contact a specific leader?",
    authority: (
      <>
        <Link
          href="/contact"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Contact
        </Link>{" "}
        · press routes
      </>
    ),
    behavior: <strong>No personal contact details published by default</strong>,
  },
  {
    question: "What does the product do?",
    authority: (
      <>
        Product ·{" "}
        <Link
          href="/documentation"
          className="font-semibold !text-[#5278aa] hover:underline"
        >
          Documentation
        </Link>
      </>
    ),
    behavior: "Contextual summary only",
  },
  {
    question: "What did this person achieve here?",
    authority: "Approved claim source",
    behavior: (
      <strong>
        No business outcome or customer result attributed to an individual
      </strong>
    ),
  },
];

export default function AuthorityBoundaries() {
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

            sm:gap-8

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
                Authority boundaries
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
              Six questions a leadership page attracts and must not answer.
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
              Each has an owner, and inferring any of them from a job title is
              the error this section prevents.
            </p>
          </div>

          {/* TABLE */}
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
            {/* DESKTOP TABLE */}
            <div className="hidden md:block">
              {/* HEADER */}
              <div
                className="
                  grid
                  grid-cols-[minmax(0,1.15fr)_240px_minmax(0,1.65fr)]
                  bg-[#fafbfc]
                "
              >
                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Question
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Authority
                  </span>
                </div>

                <div className="border-b border-[#dfe5ee] px-4 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Behavior on this page
                  </span>
                </div>
              </div>

              {/* ROWS */}
              {questions.map((item, index) => (
                <div
                  key={item.question}
                  className={`
                    grid
                    grid-cols-[minmax(0,1.15fr)_240px_minmax(0,1.65fr)]
                    ${
                      index !== questions.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* QUESTION */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-semibold leading-5 text-[#091127]">
                      {item.question}
                    </span>
                  </div>

                  {/* AUTHORITY */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.authority}
                    </span>
                  </div>

                  {/* BEHAVIOR */}
                  <div className="px-4 py-3.5">
                    <span className="text-sm font-normal leading-5 text-[#5d7192]">
                      {item.behavior}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE / SMALL TABLET CARDS */}
            <div className="flex flex-col md:hidden">
              {questions.map((item, index) => (
                <div
                  key={item.question}
                  className={`
                    p-5
                    ${
                      index !== questions.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }
                  `}
                >
                  {/* QUESTION */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Question
                    </p>

                    <p className="!m-0 mt-1.5 text-sm font-semibold leading-5 text-[#091127]">
                      {item.question}
                    </p>
                  </div>

                  {/* AUTHORITY */}
                  <div className="mb-4">
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Authority
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.authority}
                    </p>
                  </div>

                  {/* BEHAVIOR */}
                  <div>
                    <p className="!m-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#7890b2]">
                      Behavior on this page
                    </p>

                    <p className="!m-0 mt-1.5 text-sm leading-6 text-[#5d7192]">
                      {item.behavior}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}