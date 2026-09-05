"use client";

import Image from "next/image";
import Link from "next/link";

const accessControls = [
  {
    title: "Authenticated or tokenized access",
    description:
      "An authenticated session or a tokenized access model, where each is supported.",
  },
  {
    title: "Recipient or tenant binding",
    description:
      "Access is bound to the intended recipient or tenant rather than open to anyone holding a URL.",
  },
  {
    title: "Expiry and download limits",
    description:
      "Access windows expire, and download counts can be limited where supported.",
  },
  {
    title: "Revocation",
    description:
      "Access can be withdrawn before expiry when circumstances change.",
  },
  {
    title: "Step-up verification",
    description:
      "Additional verification before access, where that is supported for the document class.",
  },
  {
    title: "Nothing sensitive in URLs",
    description:
      "No sensitive data is placed in ordinary URL parameters.",
  },
];

const securityItems = [
  {
    title: "Least-privilege access",
    description:
      "Documents, recipients, templates and provider actions each carry their own access scope.",
  },
  {
    title: "Content protection",
    description:
      "Customer, address, tax, payment-reference and document content are protected in handling.",
  },
  {
    title: "Approved secret storage",
    description:
      "Provider credentials sit in approved systems with minimum provider scopes.",
  },
  {
    title: "Encryption as evidenced",
    description:
      "Encryption, secure links and downloads are described only as far as evidence supports.",
  },
  {
    title: "Full action audit",
    description:
      "Render, release, send, retry, download, export and correction all leave evidence.",
  },
  {
    title: "Retention and legal hold",
    description:
      "Defined retention, archive, deletion and legal-hold treatment for artifacts.",
  },
];

export default function SecureAccess() {
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
            gap-10

            sm:gap-11

            md:gap-12
          "
        >
          {/* ================= HEADER ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-7
              text-center

              lg:flex-row
              lg:items-end
              lg:gap-16
              lg:text-left
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                w-full
                flex-1
                flex-col
                items-center
                gap-4

                lg:items-start
              "
            >
              {/* EYEBROW */}

              <div className="flex items-center justify-center gap-3 lg:justify-start">
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
                  Secure access
                </span>

                <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
              </div>

              {/* HEADING */}

              <h2
                className="
                  !m-0
                  w-full
                  max-w-[650px]
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
                Protect sensitive billing content from render to access.
              </h2>
            </div>

            {/* DESCRIPTION */}

            <div className="w-full max-w-[530px] flex-1">
              <p
                className="
                  !m-0
                  text-[15px]
                  font-normal
                  leading-7
                  text-[#5d7192]

                  sm:text-base
                "
              >
                Where a document is reached by link or portal rather than
                attached, the access model is part of the delivery design.
              </p>
            </div>
          </div>

          {/* ================= ACCESS CONTROLS ================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-10

              lg:grid-cols-2
              lg:items-start
              lg:gap-12

              xl:gap-16
            "
          >
            {/* LEFT - ACCESS CONTROLS */}

            <div
              className="
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:px-6
                sm:py-6
              "
            >
              <h3
                className="
                  !m-0
                  mb-2
                  text-lg
                  font-semibold
                  leading-6
                  text-[#091127]
                "
              >
                Access controls
              </h3>

              <div className="flex w-full flex-col">
                {accessControls.map((item, index) => (
                  <div
                    key={item.title}
                    className={`
                      grid
                      w-full
                      grid-cols-1
                      gap-1.5
                      py-4

                      sm:grid-cols-[145px_minmax(0,1fr)]
                      sm:gap-5

                      ${
                        index !== accessControls.length - 1
                          ? "border-b border-[#edf0f4]"
                          : ""
                      }
                    `}
                  >
                    <div>
                      <h4
                        className="
                          !m-0
                          text-sm
                          font-semibold
                          leading-6
                          text-[#091127]
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          !m-0
                          text-sm
                          font-normal
                          leading-6
                          text-[#5d7192]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex w-full flex-col gap-4">
              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[280px]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white

                  sm:h-[320px]

                  lg:h-[351px]
                "
              >
                <Image
                  src="/images/documents-and-delivery/secure-access.png"
                  alt="Secure access"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 526px"
                />
              </div>

              {/* ACCESS BOUNDARY */}

              <div
                className="
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-white
                  px-5
                  py-5

                  sm:px-6
                  sm:py-6
                "
              >
                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    leading-4
                    tracking-[0.16em]
                    text-[#7890b2]
                  "
                >
                  Access boundary
                </span>

                <p
                  className="
                    !m-0
                    w-full
                    text-sm
                    font-normal
                    leading-7
                    text-[#091127]

                    sm:text-base
                  "
                >
                  A view or download event is not necessarily legal
                  acceptance, and no link is described as fully secure or
                  unbreakable. Security behaviour is stated only from approved
                  architecture and evidence.
                </p>
              </div>
            </div>
          </div>

          {/* ================= TRUST HEADER ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-3
              border-t
              border-[#dfe5ee]
              pt-10
              text-center

              sm:pt-12

              lg:items-start
              lg:text-left
            "
          >
            <h3
              className="
                !m-0
                w-full
                max-w-[650px]
                !text-[26px]
                !font-extrabold
                !leading-[1.2]
                !tracking-[-0.03em]
                !text-[#091127]

                sm:!text-[30px]

                md:!text-[32px]
              "
            >
              Trust, privacy and security
            </h3>

            <p
              className="
                !m-0
                w-full
                max-w-[700px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Billing documents carry customer, address, tax and
              payment-reference data, so handling is controlled from render
              through to retention.
            </p>
          </div>

          {/* ================= SECURITY BOXES ================= */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {securityItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-[180px]
                  w-full
                  flex-col
                  items-start
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)]

                  sm:px-6
                  sm:py-6
                "
              >
                <h4
                  className="
                    !m-0
                    mb-2
                    text-base
                    font-semibold
                    leading-6
                    text-[#091127]
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* ================= PUBLICATION BOUNDARY ================= */}

          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              px-5
              py-6

              sm:px-6
              sm:py-7
            "
          >
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]
              "
            >
              Publication boundary
            </span>

            <p
              className="
                !m-0
                w-full
                text-sm
                font-normal
                leading-7
                text-[#091127]

                sm:text-base
              "
            >
              Internal provider, queue and security details are never
              published, and no document contents, recipients, links or
              secrets appear in ordinary analytics. Product controls do not
              replace legal service, records-management or privacy advice.
            </p>
          </div>

          {/* ================= CTA ================= */}

          <div
            className="
              flex
              w-full
              items-center
              justify-start
              pt-1
            "
          >
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-3

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
                  border
                  border-[#091127]
                  bg-[#091127]
                  px-5
                  py-2
                  text-center
                  text-base
                  font-normal
                  leading-6
                  !text-white
                  no-underline
                  transition-opacity
                  hover:opacity-90
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#091127]
                  focus:ring-offset-2
                "
              >
                <span className="!text-white">
                  Review security and trust
                </span>
              </Link>

              {/* SECONDARY CTA */}

              <Link
                href="/privacy-policy"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  px-3
                  py-2
                  text-base
                  font-normal
                  leading-6
                  !text-[#0077B6]
                  no-underline
                "
              >
                <span className="!text-[#0077B6]">
                  Read the privacy notice
                </span>

                <span
                  aria-hidden="true"
                  className="
                    text-base
                    font-bold
                    leading-6
                    !text-[#0077B6]
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}