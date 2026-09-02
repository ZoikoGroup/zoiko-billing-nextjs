import Image from "next/image";

export default function IssueTimeIntegrity() {
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

            lg:flex-row
            lg:items-center
            lg:gap-14

            xl:gap-16
          "
        >
          {/* IMAGE */}
          <div className="w-full min-w-0 flex-1">
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
              <Image
                src="/images/localized-documents/issue-time-integrity.png"
                alt="Issue-time integrity"
                width={1184}
                height={592}
                priority
                sizes="
                  (max-width: 1023px) 100vw,
                  50vw
                "
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div
            className="
              w-full
              min-w-0
              flex-1
              pt-2

              lg:pt-0
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
                Issue-time integrity, corrections &amp; reproduction
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                max-w-[600px]
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
              The snapshot is what makes it defensible.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                mt-4
                max-w-[600px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              At issue, the system stores the template version, language,
              locale, resource-bundle version, controlled-text versions,
              render profile, issuer entity, currency and relevant rule
              references.
            </p>

            {/* POINTS */}
            <div className="mt-6 flex max-w-[620px] flex-col gap-4">
              {/* ISSUED OUTPUT */}
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7890b2]" />

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  <span className="font-bold text-[#091127]">
                    Issued output
                  </span>{" "}
                  — the rendered artifact, hash or reference is preserved per
                  the document evidence architecture.
                </p>
              </div>

              {/* LATER TEMPLATE CHANGE */}
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7890b2]" />

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  <span className="font-bold text-[#091127]">
                    Later template change
                  </span>{" "}
                  — affects eligible future documents only.
                </p>
              </div>

              {/* LATER TRANSLATION CHANGE */}
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7890b2]" />

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  <span className="font-bold text-[#091127]">
                    Later translation change
                  </span>{" "}
                  — does not rewrite issued document evidence.
                </p>
              </div>

              {/* CUSTOMER LANGUAGE CHANGE */}
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7890b2]" />

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  <span className="font-bold text-[#091127]">
                    Customer language change
                  </span>{" "}
                  — affects future eligible documents from the effective date,
                  with history preserved.
                </p>
              </div>

              {/* CORRECTION */}
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7890b2]" />

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  <span className="font-bold text-[#091127]">Correction</span>{" "}
                  — a credit, reissue or corrected document follows the
                  controlled workflow; there is no silent edit of an issued
                  artifact.
                </p>
              </div>

              {/* REPRODUCTION */}
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7890b2]" />

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  <span className="font-bold text-[#091127]">
                    Reproduction
                  </span>{" "}
                  — historical documents are re-rendered only from the exact
                  historical snapshot, or the stored issued artifact is served.
                </p>
              </div>

              {/* AUDIT */}
              <div className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7890b2]" />

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  <span className="font-bold text-[#091127]">Audit</span> —
                  every localization-affecting change records source, actor,
                  version, effective date, approval and affected surfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}