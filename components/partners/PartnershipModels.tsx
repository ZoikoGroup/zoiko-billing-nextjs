export default function PartnershipModels() {
  const models = [
    {
      number: "MODEL-01",
      title: "Technology & interoperability",
      bestFor:
        "Organisations whose product would need to interoperate with Zoiko Billing for a shared customer use case.",
      prepare: [
        "The technical use case, described conceptually",
        "Which capability domain is relevant",
        "Who would own build, support and maintenance",
        "Non-confidential evidence of relevant capability",
      ],
      reviews: [
        "Domain relevance and technical feasibility at a concept level",
        "Whether the proposal depends on capability that exists",
        "Delivery and support ownership",
        "Legal and commercial implications",
      ],
      related: "Related: Integration Standards · Integrations",
    },
    {
      number: "MODEL-02",
      title: "Delivery & implementation",
      bestFor:
        "Organisations that would implement, configure or operate billing processes for a shared customer.",
      prepare: [
        "The implementation scope being proposed",
        "Relevant domain experience, non-confidentially described",
        "Which party owns delivery and which owns support",
        "How escalation would work between organisations",
      ],
      reviews: [
        "Implementation capability relevance",
        "Clarity of delivery and support ownership",
        "Customer-impact and escalation implications",
        "Legal and commercial implications",
      ],
      related: "Related: Product · capability pages",
    },
    {
      number: "MODEL-03",
      title: "Advisory & domain expertise",
      bestFor:
        "Organisations advising on finance operations, controls, tax or compliance process where billing governance is relevant.",
      prepare: [
        "The advisory context and the operating problem",
        "Which domain the expertise covers",
        "Whether specialist qualification is involved",
        "How advice and product responsibility would separate",
      ],
      reviews: [
        "Domain relevance to billing governance",
        "Separation between advisory responsibility and product responsibility",
        "Conflict considerations",
        "Legal implications",
      ],
      related: "Related: Tax and Compliance · Global Billing Guide",
    },
    {
      number: "MODEL-04",
      title: "Referral & introduction",
      bestFor:
        "Organisations that encounter billing-governance needs in their own work and would make an introduction.",
      prepare: [
        "The type of customer need typically encountered",
        "The context in which an introduction would arise",
        "Whether any commercial arrangement is proposed",
        "What would and would not be shared about a customer",
      ],
      reviews: [
        "Fit and relevance of the introductions described",
        "Whether commercial discussion is required",
        "Data-handling implications for any customer information",
        "Legal implications",
      ],
      related: "Related: Sales enquiries",
    },
    {
      number: "MODEL-05",
      title: "Ecosystem & community",
      bestFor:
        "Organisations proposing joint content, research, events or community work where no product dependency is involved.",
      prepare: [
        "What is being proposed and the intended audience",
        "What each party would contribute",
        "Whether any brand or logo use is proposed",
        "Timing and any external commitments involved",
      ],
      reviews: [
        "Relevance and audience fit",
        "Brand and claim implications",
        "Whether any product dependency is actually present",
        "Legal and approval implications",
      ],
      related: "Related: Media Enquiries · Company",
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
            gap-5

            sm:gap-7

            md:gap-8
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
                Partnership models
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
              Five functional categories. None is a tier.
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
              Each is a neutral description of a collaboration shape —{" "}
              <strong className="font-bold">
                not a level to reach, a badge to earn or a status to hold
              </strong>
              .
            </p>
          </div>

          {/* MODELS */}
          <div className="w-full pt-2">
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-5

                md:grid-cols-2
                md:gap-5
              "
            >
              {models.map((model) => (
                <article
                  key={model.number}
                  className="
                    flex
                    w-full
                    flex-col
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#dfe5ee]
                    bg-white
                    shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  "
                >
                  {/* CARD HEADER */}
                  <div
                    className="
                      flex
                      flex-col
                      items-start
                      gap-1.5
                      border-b
                      border-[#edf0f4]
                      bg-[#fafbfc]
                      px-4
                      py-3.5
                    "
                  >
                    <div className="flex w-full flex-col items-start gap-0.5">
                      <span
                        className="
                          w-full
                          text-[9px]
                          font-bold
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        {model.number}
                      </span>

                      <h3
                        className="
                          !m-0
                          text-base
                          font-bold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {model.title}
                      </h3>
                    </div>

                    <p
                      className="
                        !m-0
                        w-full
                        text-xs
                        font-normal
                        leading-5
                        text-[#7890b2]
                      "
                    >
                      <span className="font-bold">Best for.</span>{" "}
                      {model.bestFor}
                    </p>
                  </div>

                  {/* CARD BODY */}
                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      items-start
                      gap-5
                      px-4
                      py-4

                      sm:gap-6
                    "
                  >
                    {/* WHAT TO PREPARE */}
                    <div className="flex w-full flex-col items-start gap-1.5">
                      <p
                        className="
                          !m-0
                          w-full
                          text-[9.5px]
                          font-bold
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        What to prepare
                      </p>

                      <ul className="m-0 flex w-full list-none flex-col p-0">
                        {model.prepare.map((item) => (
                          <li
                            key={item}
                            className="
                              relative
                              flex
                              w-full
                              items-start
                              py-[3px]
                              pl-3.5
                            "
                          >
                            <span
                              className="
                                absolute
                                left-0
                                top-[10px]
                                size-1.5
                                rounded-[2px]
                                border
                                border-blue-600
                                bg-[#f1f3f6]
                              "
                            />

                            <span
                              className="
                                text-xs
                                font-normal
                                leading-4
                                text-[#5d7192]
                              "
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* WHAT ZOIKO BILLING REVIEWS */}
                    <div className="flex w-full flex-col items-start gap-1.5">
                      <p
                        className="
                          !m-0
                          w-full
                          text-[9.5px]
                          font-bold
                          uppercase
                          leading-4
                          tracking-wide
                          text-[#7890b2]
                        "
                      >
                        What Zoiko Billing reviews
                      </p>

                      <ul className="m-0 flex w-full list-none flex-col p-0">
                        {model.reviews.map((item) => (
                          <li
                            key={item}
                            className="
                              relative
                              flex
                              w-full
                              items-start
                              py-[3px]
                              pl-3.5
                            "
                          >
                            <span
                              className="
                                absolute
                                left-0
                                top-[10px]
                                size-1.5
                                rounded-[2px]
                                border
                                border-blue-600
                                bg-[#f1f3f6]
                              "
                            />

                            <span
                              className="
                                text-xs
                                font-normal
                                leading-4
                                text-[#5d7192]
                              "
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CARD FOOTER */}
                  <div
                    className="
                      flex
                      flex-wrap
                      content-center
                      items-center
                      gap-2
                      border-t
                      border-[#edf0f4]
                      bg-[#fcfcfd]
                      px-4
                      py-3
                    "
                  >
                    <button
                      type="button"
                      className="
                        min-h-9
                        rounded-full
                        border
                        border-[#dfe5ee]
                        bg-white
                        px-4
                        py-1.5
                        pb-2
                        text-center
                        text-sm
                        font-semibold
                        leading-5
                        text-[#091127]
                        transition-colors
                        hover:bg-[#f7f8fa]
                      "
                    >
                      Start enquiry
                    </button>

                    <span
                      className="
                        text-xs
                        font-normal
                        leading-5
                        text-[#7890b2]
                      "
                    >
                      {model.related}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}