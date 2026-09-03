const localizationDimensions = [
  {
    title: "Language",
    description: "Approved document languages by template and surface",
  },
  {
    title: "Locale",
    description: "Date, number, address and currency presentation rules",
  },
  {
    title: "Template & version",
    description: "Approved template ID and version, with effective period",
  },
  {
    title: "Entity fields",
    description:
      "Name, address, registration and tax references from approved authority only",
  },
  {
    title: "Legal text",
    description:
      "A jurisdiction-reviewed block and version where required — never machine-generated without approval",
  },
  {
    title: "Accessibility",
    description:
      "Accessible output with semantic reading order and language metadata where supported",
  },
  {
    title: "Fallback",
    description:
      "An explicit fallback language or template — never a silent mixed-language document",
  },
  {
    title: "Parity",
    description:
      "Localized version parity against the approved source template",
  },
];

const localizationStates = [
  {
    label: "Supported current",
    description: "Approved and current for the named surface and template",
    type: "success",
  },
  {
    label: "Translation in review",
    description: "Not yet current production",
    type: "review",
  },
  {
    label: "Legal review required",
    description: "A translation may exist, but publication is blocked",
    type: "warning",
  },
  {
    label: "Out of sync",
    description: "The localized version trails the approved source version",
    type: "warning",
  },
  {
    label: "Fallback active",
    description: "An approved fallback is being used",
    type: "review",
  },
  {
    label: "Unavailable",
    description: "No approved localized output for that surface",
    type: "error",
  },
];

const stateStyles = {
  success: {
    wrapper: "bg-color-grey-93-8 border-color-spring-green-86-3",
    dot: "bg-color-spring-green-29",
    text: "text-color-spring-green-29",
  },
  review: {
    wrapper: "bg-color-grey-95-13 border-color-grey-91-5",
    dot: "border-2 border-color-azure-43",
    text: "text-color-azure-43",
  },
  warning: {
    wrapper: "bg-color-grey-94-7 border-color-orange-86",
    dot: "bg-color-orange-35",
    text: "text-color-orange-35",
  },
  error: {
    wrapper: "bg-color-grey-95-12 border-color-red-89",
    dot: "bg-color-red-46-2",
    text: "text-color-red-46-2",
  },
};

export default function LocalizedDocs() {
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
          {/* ================= HEADER ================= */}
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
                  whitespace-nowrap
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
                Localized documents
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
              Translation is not legal compliance.
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
              A localized invoice can be linguistically correct and still not
              satisfy a market&apos;s invoicing requirements. Localization state
              and legal-review state are tracked separately.
            </p>
          </div>

          {/* ================= CONTENT ================= */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              lg:flex-row
              lg:items-start
            "
          >
            {/* ================= LOCALIZATION DIMENSIONS ================= */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-4
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:px-6
                sm:py-6

                lg:flex-1
              "
            >
              <h3
                className="
                  !m-0
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Localization dimensions
              </h3>

              <div className="mt-3 overflow-hidden">
                {localizationDimensions.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      grid
                      grid-cols-1

                      sm:grid-cols-[145px_1fr]

                      ${
                        index !== localizationDimensions.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    {/* TITLE */}
                    <div className="px-3 py-3.5 sm:px-4">
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
                    <div className="px-3 pb-4 sm:px-4 sm:py-3.5">
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

            {/* ================= LOCALIZATION STATES ================= */}
            <div className="w-full lg:flex-1">
              <div
                className="
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-4
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:px-6
                  sm:py-6
                "
              >
                <h3
                  className="
                    !m-0
                    text-lg
                    font-bold
                    leading-7
                    text-[#091127]
                  "
                >
                  Localization states
                </h3>

                <div className="mt-3">
                  {localizationStates.map((item, index) => {
                    const styles =
                      stateStyles[item.type as keyof typeof stateStyles];

                    return (
                      <div
                        key={item.label}
                        className={`
                          grid
                          grid-cols-1

                          sm:grid-cols-[192px_1fr]

                          ${
                            index !== localizationStates.length - 1
                              ? "border-b border-[#edf0f4]"
                              : ""
                          }
                        `}
                      >
                        {/* STATE */}
                        <div className="px-3 py-3.5 sm:px-4">
                          <div
                            className={`
                              inline-flex
                              min-h-6
                              max-w-full
                              items-center
                              gap-2
                              rounded-md
                              border
                              px-2.5
                              py-1
                              ${styles.wrapper}
                            `}
                          >
                            <span
                              className={`
                                h-1.5
                                w-1.5
                                shrink-0
                                rounded-sm
                                ${styles.dot}
                              `}
                            />

                            <span
                              className={`
                                text-xs
                                font-semibold
                                leading-4
                                ${styles.text}
                              `}
                            >
                              {item.label}
                            </span>
                          </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="px-3 pb-4 sm:px-4 sm:py-3.5">
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}