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
    <section className="w-full bg-[#F7F7F6] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Desktop / Tablet */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* LEFT */}
          <div className="w-full min-w-0 lg:w-[565px] lg:max-w-[565px] lg:flex-none">
            {/* Eyebrow */}
            <div className="mb-3.5 flex items-center gap-2 pt-2">
              <span className="h-px w-6 shrink-0 bg-[#3B82F6]/75" />

              <span className="text-xs font-bold uppercase leading-4 tracking-[0.16em] text-[#3B82F6]">
                Scripts, right-to-left, rendering &amp; accessibility
              </span>
            </div>

            {/* Heading */}
            <h2 className="!m-0 !w-full !max-w-[565px] !text-[30px] !font-extrabold !leading-9 !tracking-normal !text-[#172033] sm:!text-[30px] sm:!leading-9">
              A translated bundle is not support.
            </h2>

            {/* Description */}
            <p className="mt-4 w-full max-w-[565px] text-base font-normal leading-7 text-[#5B6577]">
              If the claimed surface cannot render and read the language
              accessibly and reliably, the language is not currently supported
              for that surface. Accessibility is capability evidence, not a
              later enhancement.
            </p>

            {/* Items */}
            <div className="mt-4 flex w-full max-w-[565px] flex-col">
              {accessibilityItems.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full items-start gap-3 py-3"
                >
                  {/* Bullet */}
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[#3B82F6]" />

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-start sm:gap-3">
                    <span className="w-full shrink-0 text-sm font-bold leading-6 text-[#5B6577] sm:w-[105px]">
                      {item.title}
                    </span>

                    <span className="min-w-0 flex-1 text-sm font-normal leading-6 text-[#5B6577]">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full min-w-0 lg:w-[565px] lg:max-w-[565px] lg:flex-none lg:pt-[48px]">
            <div className="relative w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]">
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