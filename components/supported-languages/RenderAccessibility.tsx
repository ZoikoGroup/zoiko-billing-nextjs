import Image from "next/image";

const accessibilityItems = [
  {
    title: "Script coverage",
    description:
      "— approved font and render resources include every required character and glyph.",
  },
  {
    title: "Direction & bidi",
    description:
      "— left-to-right, right-to-left and mixed direction defined and tested, so identifiers, numbers, currency codes and punctuation render safely.",
  },
  {
    title: "Typography",
    description:
      "— no illegible fallback, no missing glyphs, and no text converted to an image as a shortcut.",
  },
  {
    title: "Document semantics",
    description:
      "— document language, reading order, tags and text extraction where supported.",
  },
  {
    title: "Screen reader",
    description:
      "— reasonable language-switching behavior, with mixed-language spans tagged where possible.",
  },
  {
    title: "Zoom & reflow",
    description:
      "— 200% text zoom and 320 CSS pixel reflow for web surfaces.",
  },
  {
    title: "Right-to-left layout",
    description:
      "— mirrored only where appropriate, keeping numbers, controls, icons and sequence semantically correct.",
  },
];

export default function RenderAccessibility() {
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

            lg:flex-row
            lg:items-start
            lg:gap-14
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              min-w-0

              lg:w-[565px]
              lg:max-w-[565px]
              lg:flex-none
            "
          >
            {/* EYEBROW */}
            <div className="mb-3.5 flex items-center gap-3 pt-2">
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
                Scripts, right-to-left, rendering &amp; accessibility
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                !w-full
                !max-w-[565px]
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
              A translated bundle is not support.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-4
                w-full
                max-w-[565px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              If the claimed surface cannot render and read the language
              accessibly and reliably, the language is not currently supported
              for that surface. Accessibility is capability evidence, not a
              later enhancement.
            </p>

            {/* ACCESSIBILITY ITEMS */}
            <div className="mt-4 flex w-full max-w-[565px] flex-col">
              {accessibilityItems.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full items-start gap-3 py-3"
                >
                  {/* BULLET */}
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[#7890b2]" />

                  {/* CONTENT */}
                  <div
                    className="
                      flex
                      min-w-0
                      flex-1
                      flex-col

                      sm:flex-row
                      sm:items-start
                      sm:gap-3
                    "
                  >
                    <span
                      className="
                        w-full
                        shrink-0
                        text-sm
                        font-bold
                        leading-6
                        text-[#091127]

                        sm:w-[105px]
                      "
                    >
                      {item.title}
                    </span>

                    <span
                      className="
                        min-w-0
                        flex-1
                        text-sm
                        font-normal
                        leading-6
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

          {/* RIGHT IMAGE */}
          <div
            className="
              w-full
              min-w-0

              lg:w-[565px]
              lg:max-w-[565px]
              lg:flex-none
              lg:pt-[48px]
            "
          >
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <div className="relative aspect-[565/547] w-full">
                <Image
                  src="/images/supported-languages/render-accessibility.png"
                  alt="Scripts, right-to-left rendering and accessibility"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 565px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}