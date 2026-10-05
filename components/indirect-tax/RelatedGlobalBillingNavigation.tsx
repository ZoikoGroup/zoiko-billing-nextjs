export default function RelatedGlobalBillingNavigation() {
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
            gap-6
            sm:gap-8
            md:gap-11
          "
        >
          {/* SECTION INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[1000px]
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
                Related Global Billing navigation
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Where each answer actually lives.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-1
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              This page is the orientation layer. Every question of fact
              routes elsewhere.
            </p>
          </div>

          {/* NAVIGATION CARDS */}
          <div className="flex w-full flex-col gap-3 sm:gap-4">
            {/* CONFIGURING THE RESULT */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-4
                py-5
                shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]
                sm:px-5
              "
            >
              <h3 className="!m-0 text-sm font-bold leading-6 text-[#091127]">
                Configuring the result
              </h3>

              <p className="!m-0 mt-1.5 text-xs leading-5 text-[#5d7192] sm:text-sm">
                <a
                  href="/tax-configuration"
                  className="font-bold !text-blue-600 transition-colors hover:text-blue-700"
                >
                  Tax Configuration
                </a>{" "}
                governs how a resolved decision is recorded and
                effective-dated.{" "}
                <span className="font-bold !text-blue-600">
                  Route pending
                </span>{" "}
                — and configuration is not determination.
              </p>
            </div>

            {/* REQUIREMENT CONTEXT */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-4
                py-5
                shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]
                sm:px-5
              "
            >
              <h3 className="!m-0 text-sm font-bold leading-6 text-[#091127]">
                Requirement context
              </h3>

              <p className="!m-0 mt-1.5 text-xs leading-5 text-[#5d7192] sm:text-sm">
                <a
                  href="/local-compliance"
                  className="font-bold !text-blue-600 transition-colors hover:text-blue-700"
                >
                  Local Compliance
                </a>{" "}
                organizes local requirement records.{" "}
                <span className="font-bold">Route pending.</span>
              </p>
            </div>

            {/* WHERE ZOIKO BILLING OPERATES */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-4
                py-5
                shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]
                sm:px-5
              "
            >
              <h3 className="!m-0 text-sm font-bold leading-6 text-[#091127]">
                Where Zoiko Billing operates
              </h3>

              <p className="!m-0 mt-1.5 text-xs leading-5 text-[#5d7192] sm:text-sm">
                <a
                  href="/jurisdiction-availability"
                  className="font-semibold !text-blue-600 transition-colors hover:text-blue-700"
                >
                  Jurisdiction Availability
                </a>
                .{" "}
                <span className="font-bold text-[#5d7192]">
                  No country support claim comes from this page.
                </span>
              </p>
            </div>

            {/* DOCUMENT OUTPUT */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-4
                py-5
                shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]
                sm:px-5
              "
            >
              <h3 className="!m-0 text-sm font-bold leading-6 text-[#091127]">
                Document output
              </h3>

              <p className="!m-0 mt-1.5 text-xs leading-5 text-[#5d7192] sm:text-sm">
                <a
                  href="/localized-documents"
                  className="font-semibold !text-blue-600 transition-colors hover:text-blue-700"
                >
                  Localized Documents
                </a>
                .{" "}
                <span className="font-bold text-[#5d7192]">
                  No invoice field or mandate is stated here.
                </span>
              </p>
            </div>

            {/* ENTITY SCOPE */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-4
                py-5
                shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]
                sm:px-5
              "
            >
              <h3 className="!m-0 text-sm font-bold leading-6 text-[#091127]">
                Entity scope
              </h3>

              <p className="!m-0 mt-1.5 text-xs leading-5 text-[#5d7192] sm:text-sm">
                <a
                  href="/multi-entity-billing"
                  className="font-semibold !text-blue-600 transition-colors hover:text-blue-700"
                >
                  Multi-Entity Billing
                </a>{" "}
                and{" "}
                <a
                  href="/entity-level-controls"
                  className="font-semibold !text-blue-600 transition-colors hover:text-blue-700"
                >
                  Entity-Level Controls
                </a>
                .
              </p>
            </div>

            {/* ASSURANCE EVIDENCE */}
            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-4
                py-5
                shadow-[0px_8px_24px_rgba(15,23,42,0.05),0px_1px_2px_rgba(15,23,42,0.04)]
                sm:px-5
              "
            >
              <h3 className="!m-0 text-sm font-bold leading-6 text-[#091127]">
                Assurance evidence
              </h3>

              <p className="!m-0 mt-1.5 text-xs leading-5 text-[#5d7192] sm:text-sm">
                <a
                  href="/trust-center"
                  className="font-semibold !text-blue-600 transition-colors hover:text-blue-700"
                >
                  Trust Center
                </a>
                .{" "}
                <span className="font-bold text-[#5d7192]">
                  No certification or regulator endorsement is claimed.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}