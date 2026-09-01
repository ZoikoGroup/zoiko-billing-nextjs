const items = [
  {
    title: "Not a support queue",
    link: "Contact Support",
    before: "",
    after: "has its own path chooser and intake.",
    description: "A duplicate here would drift from it and answer more slowly.",
  },
  {
    title: "Not a vulnerability intake",
    link: "Responsible Disclosure",
    before: "",
    after: "handles reports with appropriate confidentiality.",
    bold: "Exploit details are never collected here.",
  },
  {
    title: "Not a privacy-rights form",
    description:
      "Rights requests need legal workflow and identity handling. A general message field satisfies neither.",
  },
  {
    title: "Not an application route",
    link: "Careers",
    after: "routes to the approved application system.",
    bold: "No résumé or identity document is accepted here.",
  },
  {
    title: "Not a status page",
    description:
      "System Status owns current availability. This page never asserts or infers operational state.",
  },
  {
    title: "Not a commitment surface",
    before: "Support commitments live in",
    link: "Support Policy",
    after: ".",
    bold: "No response time or channel promise appears here.",
  },
];

export default function WhatThisPageIsNot() {
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
                What this page is not
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
              Six things a corporate contact page
            
              must not become.
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
              Each is a surface that already exists with controls this page
              does not have.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:gap-5

              md:grid-cols-2
            "
          >
            {items.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[190px]
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
                  {item.title}
                </h3>

                {/* CONTENT */}
                <div className="w-full text-xs leading-5 text-[#5d7192]">
                  {item.link ? (
                    <p className="!m-0">
                      {item.before && (
                        <span>{item.before} </span>
                      )}

                      <span
                        className="
                          text-sm
                          font-semibold
                          leading-6
                          text-[#7890b2]
                        "
                      >
                        {item.link}
                      </span>

                      {item.after && <span> {item.after}</span>}

                      {item.bold && (
                        <>
                          {" "}
                          <strong className="font-bold text-[#5d7192]">
                            {item.bold}
                          </strong>
                        </>
                      )}
                    </p>
                  ) : (
                    <p className="!m-0">
                      {item.description}
                    </p>
                  )}

                  {/* BOLD FOLLOW-UP */}
                  {item.link && item.title === "Not an application route" && (
                    <p className="!m-0 font-bold text-[#5d7192]">
                      No résumé or identity document is accepted here.
                    </p>
                  )}

                  {item.link && item.title === "Not a commitment surface" && (
                    <p className="!m-0 font-bold text-[#5d7192]">
                      No response time or channel promise appears here.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}