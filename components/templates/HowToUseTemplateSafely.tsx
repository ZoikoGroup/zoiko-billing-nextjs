"use client";

const usageSteps = [
  {
    step: "1 · Confirm fit",
    description:
      "Check the template matches the intended operational task and scope",
  },
  {
    step: "2 · Check currency",
    description:
      "Verify the current version and last-reviewed date before use",
  },
  {
    step: "3 · Read the scope note",
    description:
      "Review the professional-review and jurisdiction or product scope note where present",
  },
  {
    step: "4 · Respect editable areas",
    description:
      "Use only the intended input fields; preserve controlled guidance and formulas unless instructed otherwise",
  },
  {
    step: "5 · Minimize data",
    description:
      "Avoid payment card data, credentials and confidential information unless an approved business process requires and protects it",
    boldStart: true,
  },
  {
    step: "6 · Validate outputs",
    description:
      "Check decisions and calculations against the authoritative product, accounting, legal, tax, regulatory, provider or policy source for your organization",
  },
  {
    step: "7 · Escalate appropriately",
    description:
      "When the task becomes product- or account-specific, move to Documentation, Help, Product, Developers or Trust — do not treat the template as system truth",
    boldEnd: true,
  },
  {
    step: "8 · Retire old copies",
    description:
      "When a replacement version publishes, adopt the current version and retire obsolete local copies per your policy",
  },
];

export default function HowToUseTemplateSafely() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 md:px-10 lg:px-16 xl:px-24 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-11 px-0 sm:px-4 lg:px-7">
        {/* Heading */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2 text-center">
          {/* Eyebrow */}
          <div className="flex h-4 items-center justify-center gap-3">
            <div className="h-px w-4 bg-color-azure-60 opacity-40" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              How to use a template safely
            </span>

            <div className="h-px w-4 bg-color-azure-60 opacity-40" />
          </div>

          {/* Title */}
          <h2 className="pb-[0.69px] text-2xl font-extrabold leading-8 text-color-azure-11-2 sm:text-3xl sm:leading-9 md:text-4xl md:leading-10">
            Eight steps, ending with retiring your
         old copy.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] pt-[3px] text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            The sequence assumes the template will be downloaded, edited
            locally and reused — which is exactly where version drift begins.
          </p>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl bg-color-white-solid shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] outline outline-1 outline-offset-[-1px] outline-color-grey-92-4">
          {/* Table heading */}
          <div className="border-b border-color-grey-92-4 bg-color-grey-99-2 px-5 py-4">
            <p className="text-sm font-normal leading-5 text-color-azure-44-3">
              Usage sequence.
            </p>
          </div>

          {/* Desktop / Tablet */}
          <div className="hidden md:block">
            {usageSteps.map((item, index) => (
              <div
                key={item.step}
                className={`grid grid-cols-[192px_minmax(0,1fr)] ${
                  index !== usageSteps.length - 1
                    ? "border-b border-color-grey-95-10"
                    : ""
                }`}
              >
                {/* Step */}
                <div className="px-4 py-3.5">
                  <p className="text-sm font-semibold leading-5 text-color-azure-11-2">
                    {item.step}
                  </p>
                </div>

                {/* Description */}
                <div className="px-4 py-3.5">
                  <p className="text-sm font-normal leading-5 text-color-azure-44-3">
                    {item.boldStart ? (
                      <>
                        <strong className="font-bold">
                          Avoid payment card data, credentials and confidential
                          information
                        </strong>{" "}
                        unless an approved business process requires and
                        protects it
                      </>
                    ) : item.boldEnd ? (
                      <>
                        When the task becomes product- or account-specific,
                        move to Documentation, Help, Product, Developers or
                        Trust —{" "}
                        <strong className="font-bold">
                          do not treat the template as system truth
                        </strong>
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            {usageSteps.map((item, index) => (
              <div
                key={item.step}
                className={`px-4 py-5 sm:px-5 ${
                  index !== usageSteps.length - 1
                    ? "border-b border-color-grey-95-10"
                    : ""
                }`}
              >
                <p className="mb-2 text-sm font-semibold leading-5 text-color-azure-11-2">
                  {item.step}
                </p>

                <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                  {item.boldStart ? (
                    <>
                      <strong className="font-bold">
                        Avoid payment card data, credentials and confidential
                        information
                      </strong>{" "}
                      unless an approved business process requires and protects
                      it
                    </>
                  ) : item.boldEnd ? (
                    <>
                      When the task becomes product- or account-specific, move
                      to Documentation, Help, Product, Developers or Trust —{" "}
                      <strong className="font-bold">
                        do not treat the template as system truth
                      </strong>
                    </>
                  ) : (
                    item.description
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}