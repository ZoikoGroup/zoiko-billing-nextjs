import Link from "next/link";

const legalDocuments = [
  {
    title: "Terms of Use",
    linkLabel: "Terms of Use",
    href: "/terms-of-user",
    description: " — the agreement this policy sits under.",
    note: "Precedence between them is Legal's to state.",
  },
  {
    title: "Privacy policy",
    linkLabel: "Privacy policy",
    href: "/privacy-policy",
    description: " — how personal data is handled,",
    note: "including in a report.",
  },
  {
    title: "Data processing addendum",
    linkLabel: "DPA",
    href: "/data-processing-addendum",
    description: " — processing obligations where applicable.",
  },
  {
    title: "Support policy",
    linkLabel: "Support policy",
    href: "/support-policy",
    description: " — what support covers, separate from",
    note: "enforcement.",
  },
  {
    title: "Subprocessors",
    linkLabel: "Subprocessors",
    href: "/subprocessors",
    description: " — third parties in the processing chain.",
  },
  {
    title: "Legal notices",
    linkLabel: "Legal notices",
    href: "/legal-notices",
    description: " — corporate identity and the wider notice",
    note: "set.",
  },
];

export default function RelatedLegalCorporateDocuments() {
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
                Related legal & corporate documents
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
              Where the surrounding obligations live.
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
              An acceptable use policy sits inside a document set and does not
              restate it.
            </p>
          </div>

          {/* DOCUMENT LIST */}
          <div className="flex w-full flex-col gap-4">
            {legalDocuments.map((document) => (
              <article
                key={document.title}
                className="
                  flex
                  w-full
                  flex-col
                  gap-1.5
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                  sm:px-6
                "
              >
                {/* DOCUMENT TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {document.title}
                </h3>

                {/* DOCUMENT DESCRIPTION */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-baseline
                    gap-0
                  "
                >
                  <Link
                    href={document.href}
                    className="
                      text-sm
                      font-semibold
                      leading-6
                      !text-blue-600
                      hover:underline
                    "
                  >
                    {document.linkLabel}
                  </Link>

                  <span
                    className="
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    {document.description}
                  </span>

                  {document.note && (
                    <span
                      className="
                        w-full
                        text-xs
                        font-normal
                        leading-5
                        text-[#5d7192]
                        sm:w-auto
                      "
                    >
                      {document.note}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}