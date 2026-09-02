const templateRules = [
  {
    title: "Template ID",
    description:
      "— a stable identifier; a user-facing filename is never the authority.",
  },
  {
    title: "Entity applicability",
    description:
      "— entity-specific, or an approved shared scope.",
  },
  {
    title: "Language & locale applicability",
    description:
      "— explicit supported pairs, with no implicit global inheritance.",
  },
  {
    title: "Jurisdiction applicability",
    description:
      "— only when approved, and it does not itself prove compliance.",
  },
  {
    title: "Version & effective period",
    description:
      "— an immutable released version, marked current, future, expired or superseded.",
  },
  {
    title: "Inheritance",
    description:
      "— a shared base with entity or locale overrides only under deterministic precedence.",
  },
  {
    title: "Preview & approval",
    description:
      "— synthetic-data preview before release, with approvals matched to the fields changed.",
  },
  {
    title: "Rollback",
    description:
      "— reverts future use to a prior approved version; issued documents retain their original snapshot.",
  },
];

export default function TemplateVersion() {
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
            gap-10

            md:gap-11

            lg:flex-row
            lg:items-center
            lg:gap-12
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start

              lg:w-[58%]
            "
          >
            {/* EYEBROW */}
            <div className="mb-3 flex items-center gap-3">
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
                Templates, layouts &amp; versioning
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              A draft edit cannot reach an issued document.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-4
                w-full
                max-w-[600px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A template editor may be flexible, but production issue always
              uses a released version. Draft changes never alter documents
              already issued or locked in an approval workflow.
            </p>

            {/* RULES */}
            <div className="mt-4 flex w-full flex-col">
              {templateRules.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 py-2"
                >
                  {/* BULLET */}
                  <span
                    className="
                      mt-2
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-sm
                      bg-[#7890b2]
                    "
                  />

                  {/* TEXT */}
                  <div
                    className="
                      min-w-0
                      flex-1
                      text-sm
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    <span className="font-semibold text-[#091127]">
                      {item.title}
                    </span>{" "}
                    <span className="font-normal">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              flex
              w-full
              items-center
              justify-center

              lg:w-[42%]
            "
          >
            <img
              src="/images/localized-documents/template-versioning.png"
              alt="Templates, layouts and versioning"
              className="
                h-auto
                w-full
                max-w-[430px]
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                object-contain
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}