const categories = [
  {
    id: "CAT-01",
    title: "Unlawful or rights-violating use",
    purpose:
      "Groups conduct prohibited by applicable law, and infringement or rights concerns.",
  },
  {
    id: "CAT-02",
    title: "Fraud, deception or harmful financial misuse",
    purpose:
      "Groups misuse involving deceptive or fraudulent billing and financial conduct.",
  },
  {
    id: "CAT-03",
    title: "Security abuse / unauthorised access",
    purpose:
      "Groups attacks, bypass, credential misuse, disruption and unauthorised access.",
  },
  {
    id: "CAT-04",
    title: "Malicious automation / resource abuse",
    purpose:
      "Groups abusive automation, scraping, load, evasion and platform misuse.",
  },
  {
    id: "CAT-05",
    title: "Abuse, harassment or harmful content",
    purpose:
      "Groups harmful or abusive content and conduct, if relevant to the service.",
  },
  {
    id: "CAT-06",
    title: "Privacy / personal-data misuse",
    purpose:
      "Groups unauthorised collection, exposure or misuse of personal and confidential data.",
  },
  {
    id: "CAT-07",
    title: "Intellectual property / content misuse",
    purpose:
      "Groups copyright, trademark and proprietary-rights misuse.",
  },
  {
    id: "CAT-08",
    title: "Circumvention / resale / unauthorised commercial use",
    purpose:
      "Groups circumvention, unauthorised access-sharing or resale, and prohibited commercial behaviour.",
  },
  {
    id: "CAT-09",
    title: "Regulated / restricted activity",
    purpose:
      "Groups sector-specific or regulated uses — included only if Legal requires it.",
  },
  {
    id: "CAT-10",
    title: "Other prohibited conduct",
    purpose:
      "A narrow catch-all — only if Legal approves the wording and scope.",
  },
];

export default function ProhibitedRestrictedUseTaxonomy() {
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
              max-w-[700px]
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
                Prohibited & restricted use — proposed taxonomy
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[700px]
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
              Ten proposed categories. None of them is the policy.
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
              Each module shows the category&apos;s purpose and reserves space
              for the operative clause Legal will write. The operative rule is
              visually primary in the real page — here it renders as an
              explicit gap.
            </p>
          </div>

          {/* CATEGORIES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              md:grid-cols-2
              md:gap-5
            "
          >
            {categories.map((category) => (
              <article
                key={category.id}
                className="
                  flex
                  w-full
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:p-6
                "
              >
                {/* TOP ROW */}
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      leading-4
                      tracking-[0.16em]
                      text-[#7890b2]

                      sm:text-xs
                    "
                  >
                    {category.id}
                  </span>

                  <span
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-[#dfe5ee]
                      bg-[#f7f8fa]
                      px-3
                      py-1
                      text-xs
                      font-medium
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    Legal to author
                  </span>
                </div>

                {/* CATEGORY TITLE */}
                <h3
                  className="
                    !m-0
                    mt-4
                    text-lg
                    font-semibold
                    leading-7
                    text-[#091127]

                    sm:text-xl
                  "
                >
                  {category.title}
                </h3>

                {/* PURPOSE */}
                <p
                  className="
                    !m-0
                    mt-3
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {category.purpose}
                </p>

                {/* OPERATIVE RULE */}
                <div
                  className="
                    mt-5
                    rounded-xl
                    border
                    border-dashed
                    border-[#dfe5ee]
                    bg-[#f7f8fa]
                    p-4

                    sm:p-5
                  "
                >
                  <p
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-5
                      text-[#091127]
                    "
                  >
                    Operative rule — not authored.
                  </p>

                  <p
                    className="
                      !m-0
                      mt-2
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    Legal-approved clause text belongs here and is visually
                    primary in the published policy. No sample wording is
                    shown, because a plausible clause would be relied on as
                    though it were the rule.
                  </p>
                </div>

                {/* FOOTER */}
                <div
                  className="
                    mt-5
                    border-t
                    border-[#dfe5ee]
                    pt-4
                  "
                >
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#7890b2]
                    "
                  >
                    Plain-language summary, examples and exceptions: only
                    where Legal supplies them, and explicitly non-controlling.
                  </p>

                  <p
                    className="
                      !m-0
                      mt-2
                      text-xs
                      font-medium
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    Report route: not established.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}