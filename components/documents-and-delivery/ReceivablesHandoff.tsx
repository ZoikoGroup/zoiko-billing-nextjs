"use client";

import Image from "next/image";
import Link from "next/link";

const handoffItems = [
  {
    title: "Document reference",
    description:
      "The invoice or credit note the follow-up relates to.",
  },
  {
    title: "Current recipient and state",
    description:
      "Who it was sent to, and the current delivery state.",
  },
  {
    title: "Last verified attempt",
    description:
      "The most recent attempt with its result and failure reason.",
  },
  {
    title: "Balance and due date",
    description:
      "Outstanding balance and due-date context from approved sources.",
  },
  {
    title: "Next permitted action",
    description:
      "Communication preference and what may legitimately happen next.",
  },
  {
    title: "Pause conditions",
    description:
      "Dispute, hold, privacy concern or contact correction all pause follow-up.",
  },
];

export default function ReceivablesHandoff() {
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
          {/* ==================== HEADER ==================== */}

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
                  Receivables handoff
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
                Delivery evidence informs follow-up. It does not prove the
                debt.
              </h2>
            </div>

            {/* RIGHT */}

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
                Knowing whether a document actually reached someone changes
                how you follow up — and nothing more than that.
              </p>
            </div>
          </div>

          {/* ==================== MAIN CONTENT ==================== */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              items-start
              gap-10

              lg:grid-cols-2
              lg:gap-12

              xl:gap-16
            "
          >
            {/* ==================== IMAGE ==================== */}

            <div className="flex w-full flex-col items-start gap-4">
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
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                  sm:h-[340px]

                  lg:h-[404px]
                "
              >
                <Image
                  src="/images/documents-and-delivery/secure-access.png"
                  alt="Receivables handoff and delivery evidence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 526px"
                />
              </div>

              {/* IMAGE CAPTION */}

              <p
                className="
                  !m-0
                  w-full
                  text-[10px]
                  font-normal
                  uppercase
                  leading-5
                  tracking-wide
                  text-[#7890b2]
                "
              >
                Balance and due-date context comes from approved sources, with
                its currency, date and allocation context attached.
              </p>
            </div>

            {/* ==================== RIGHT CONTENT ==================== */}

            <div
              className="
                flex
                w-full
                flex-col
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
                What the handoff carries
              </h3>

              {/* HANDOFF ITEMS */}

              <div className="flex w-full flex-col">
                {handoffItems.map((item, index) => (
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
                        index !== handoffItems.length - 1
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

              {/* ==================== INTERPRETATION BOUNDARY ==================== */}

              <div
                className="
                  mt-7
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-2
                  rounded-r-2xl
                  border-l-[3px]
                  border-[#7890b2]
                  bg-[#f7f8fa]
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
                  Interpretation boundary
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
                  Delivery state is not proof that a debt is valid or
                  undisputed. External follow-up requires approved content,
                  recipient, timing and permission before anything is sent.
                </p>
              </div>
            </div>
          </div>

          {/* ==================== CTA ==================== */}

          <div className="flex w-full items-center justify-start pt-1">
            <Link
              href="/accounts-receivable"
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
                Explore Accounts Receivable
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}