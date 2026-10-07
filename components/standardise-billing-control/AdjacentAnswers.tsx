import Link from "next/link";

export default function AdjacentAnswers() {
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
            gap-11
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
                Where the adjacent answers live
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
              Six destinations, and two are still pending routes.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[687px]
                pt-[3px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              Control touches evidence, product behavior and commercial terms
              without owning any of them.
            </p>
          </div>

          {/* DESTINATIONS */}
          <div className="flex w-full flex-col items-start gap-3">
            {/* 1 — DEEPER EVIDENCE */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-1.5
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-sm
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Deeper evidence &amp; review model
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-xs
                  leading-5
                  text-[#5d7192]
                "
              >
                <Link
                  href="/strengthen-auditability"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Strengthen Auditability
                </Link>{" "}
                owns attribution, evidence linkage and correction semantics.{" "}
                <strong>Route pending — no link asserted.</strong>
              </p>
            </div>

            {/* 2 — OWNER LEVEL */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-1.5
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-sm
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Owner-level view
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-xs
                  leading-5
                  text-[#5d7192]
                "
              >
                <Link
                  href="/founders-and-owners"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Founders and Owners
                </Link>{" "}
                covers what to monitor as complexity grows.{" "}
                <strong>Route pending.</strong>
              </p>
            </div>

            {/* 3 — APPROVALS */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-1.5
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-sm
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Approvals in the product
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-xs
                  leading-5
                  text-[#5d7192]
                "
              >
                <Link
                  href="/roles-and-approvals"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Roles &amp; Approvals
                </Link>{" "}
                owns permission and approval behavior —{" "}
                <strong>
                  this page describes the operating model, not the feature
                </strong>
                .
              </p>
            </div>

            {/* 4 — RECORD MODEL */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-1.5
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-sm
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                The record model
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-xs
                  leading-5
                  text-[#5d7192]
                "
              >
                <Link
                  href="/product"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Product
                </Link>{" "}
                owns how corrections and states actually work.
              </p>
            </div>

            {/* 5 — COMPLIANCE */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-1.5
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-sm
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Compliance &amp; assurance
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-xs
                  leading-5
                  text-[#5d7192]
                "
              >
                <Link
                  href="/trust-center"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Trust Center
                </Link>
                .{" "}
                <strong>
                  Operational reviewability is not compliance
                </strong>
                , and this page draws no such conclusion.
              </p>
            </div>

            {/* 6 — SCOPE AND TERMS */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-1.5
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-5
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            >
              <h3
                className="
                  !m-0
                  w-full
                  text-sm
                  font-bold
                  leading-6
                  text-[#091127]
                "
              >
                Scope and terms
              </h3>

              <p
                className="
                  !m-0
                  w-full
                  text-xs
                  leading-5
                  text-[#5d7192]
                "
              >
                <Link
                  href="/pricing"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Pricing
                </Link>
                .{" "}
                <strong>No entitlement is inferred</strong> from any control
                capability described here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}