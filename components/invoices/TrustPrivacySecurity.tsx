import Link from "next/link";

export default function TrustPrivacySecurity() {
  const trustItems = [
    {
      title: "Role-based access",
      description:
        "Preparing, approving, issuing, resending and exporting are separate permissions.",
    },
    {
      title: "Sensitive-data protection",
      description:
        "Customer, address, tax, payment-reference and recipient data are protected in handling.",
    },
    {
      title: "Audit evidence",
      description:
        "Preparation, approval, issue, delivery and correction all leave attributable evidence.",
    },
    {
      title: "Secure rendering and storage",
      description:
        "Rendering, storage, download and external delivery follow the approved architecture.",
    },
    {
      title: "Retention and legal hold",
      description:
        "Retention, archive, deletion and legal-hold treatment are defined, not incidental.",
    },
    {
      title: "Nothing sensitive in logs",
      description:
        "No secrets, full payment credentials or document contents in ordinary analytics or logs.",
    },
  ];

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
            items-start
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* HEADER */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-8

              lg:flex-row
              lg:items-end
              lg:gap-16
            "
          >
            {/* LEFT */}
            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-start
                gap-5
                pt-2
                pb-2

                lg:pb-5
              "
            >
              {/* EYEBROW */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-[2px]
                    w-5
                    shrink-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#27c7d9]
                    to-[#4f8bd9]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#49758f]

                    sm:text-xs
                    sm:tracking-[0.18em]
                  "
                >
                  Trust, privacy and security
                </span>
              </div>

              {/* TITLE */}
              <h2
                className="
                  !m-0
                  max-w-[638px]
                  !text-[30px]
                  !font-extrabold
                  !leading-[1.2]
                  !tracking-[-0.035em]
                  !text-[#08294a]

                  sm:!text-[34px]

                  md:!text-[36px]

                  lg:!text-[40px]
                "
              >
                Documents carry sensitive data. Treat them accordingly.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-[529px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#526c82]

                  sm:text-base
                "
              >
                Customer, address, tax, payment-reference and recipient data
                all appear on billing documents, so access, rendering, storage
                and retention are all controlled.
              </p>
            </div>
          </div>

          {/* TRUST CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-zinc-200
              bg-zinc-200

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {trustItems.map((item, index) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[180px]
                  flex-col
                  items-start
                  bg-white
                  px-5
                  py-5
                  transition-colors
                  hover:bg-[#fbfcfc]

                  sm:min-h-[190px]

                  lg:min-h-[200px]
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    mb-5
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#08294a]
                    text-[10px]
                    font-medium
                    leading-4
                    text-white
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-semibold
                    leading-5
                    text-[#08294a]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    mt-2
                    max-w-[250px]
                    text-sm
                    font-normal
                    leading-5
                    text-[#526c82]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* SCOPE BOUNDARY */}
          <div
            className="
              w-full
              rounded-r-2xl
              border-l-[3px]
              border-[#4389b5]
              bg-[#eef2f3]
              px-5
              py-6

              sm:px-6
              sm:py-7

              md:px-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.12em]
                text-[#49758f]

                sm:text-xs
              "
            >
              Scope boundary
            </span>

            <p
              className="
                !m-0
                mt-2
                max-w-[900px]
                text-sm
                font-normal
                leading-6
                text-[#08294a]

                sm:text-base
                sm:leading-7
              "
            >
              Internal security details and certification claims are published
              only with current evidence. Document controls support your
              process; they are not a substitute for legal, tax or accounting
              review.
            </p>
          </div>

          {/* CTA */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              justify-center
              gap-3
              pt-1

              sm:flex-row
              sm:items-center
            "
          >
            {/* PRIMARY CTA */}
            <Link
              href="/security-overview"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-lg
                bg-[#08294a]
                px-5
                py-2
                text-center
                text-base
                font-normal
                leading-6
                !text-white
                outline
                outline-1
                outline-offset-[-1px]
                outline-[#08294a]
                transition-opacity
                hover:opacity-90
              "
            >
              Review security and trust
            </Link>

            {/* SECONDARY CTA */}
            <Link
              href="/privacy-notice"
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                px-1
                py-2
                text-base
                font-normal
                leading-6
                text-[#39779d]
                transition-opacity
                hover:opacity-75
              "
            >
              Read the privacy notice
              <span className="text-base font-bold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}