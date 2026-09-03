"use client";

import Image from "next/image";
import Link from "next/link";

export default function BalanceContext() {
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
            items-start
            gap-3.5
          "
        >
          {/* EYEBROW */}
          <div className="flex items-center gap-3">
            <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-4
                tracking-[0.16em]
                text-[#7890b2]

                sm:text-xs
                sm:tracking-[0.18em]
              "
            >
              Customer balance &amp; record context
            </span>
          </div>

          {/* HEADING */}
          <div className="w-full">
            <h2
              className="
                !m-0
                w-full
                max-w-[900px]
                !text-[30px]
                !font-bold
                !leading-[1.2]
                !tracking-[-0.025em]
                !text-[#091127]

                sm:!text-[34px]

                md:!text-[36px]

                lg:!text-[40px]
              "
            >
              Every outstanding total decomposes into the documents behind it.
            </h2>
          </div>

          {/* DESCRIPTION */}
          <div className="w-full max-w-[686px]">
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
              Each line below is a real data relationship, not a decorative
              edge. The same lineage is available as a table for screen
              readers and export.
            </p>
          </div>

          {/* MAIN IMAGE */}
          <div
            className="
              mt-6
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
              src="/images/finance-and-account-receivable/balance-context.png"
              alt="Customer balance and record context"
              width={1264}
              height={632}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1320px) 100vw, 1264px"
            />
          </div>

          {/* BOTTOM CARDS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-stretch
              gap-5
              pt-5

              lg:flex-row
            "
          >
            {/* HISTORY CARD */}
            <div
              className="
                flex-1
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                py-6
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

                sm:px-6
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-semibold
                  leading-7
                  text-[#091127]
                "
              >
                History travels with the record
              </h3>

              {/* ITEM 1 */}
              <div className="flex min-h-16 items-start gap-3.5 py-3.5">
                <div
                  className="
                    flex
                    size-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#dfe5ee]
                    bg-white
                  "
                >
                  <span className="text-xs font-semibold leading-5 text-[#091127]">
                    1
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h4
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    Who changed what, and when
                  </h4>

                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    Actor, role, source object, state change and timestamp for
                    every material action.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div
                className="
                  flex
                  min-h-20
                  items-start
                  gap-3.5
                  border-t
                  border-[#edf0f4]
                  py-3.5
                "
              >
                <div
                  className="
                    flex
                    size-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#dfe5ee]
                    bg-white
                  "
                >
                  <span className="text-xs font-semibold leading-5 text-[#091127]">
                    2
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h4
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    From which authorized workflow
                  </h4>

                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    A change records the workflow and permission that allowed
                    it, not just the outcome.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div
                className="
                  flex
                  min-h-20
                  items-start
                  gap-3.5
                  border-t
                  border-[#edf0f4]
                  py-3.5
                "
              >
                <div
                  className="
                    flex
                    size-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#dfe5ee]
                    bg-white
                  "
                >
                  <span className="text-xs font-semibold leading-5 text-[#091127]">
                    3
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h4
                    className="
                      !m-0
                      text-sm
                      font-semibold
                      leading-6
                      text-[#091127]
                    "
                  >
                    Corrections never overwrite
                  </h4>

                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-5
                      text-[#5d7192]
                    "
                  >
                    Credit notes and adjustments are separate documents.
                    Issued history stays intact.
                  </p>
                </div>
              </div>
            </div>

            {/* PRIVACY CARD */}
            <div
              className="
                flex-1
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#f1f3f6]
                px-5
                py-6

                sm:px-6

                lg:pb-24
              "
            >
              <h3
                className="
                  !m-0
                  text-base
                  font-semibold
                  leading-7
                  text-[#091127]
                "
              >
                Privacy boundary
              </h3>

              <p
                className="
                  !m-0
                  mt-3
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Only authorized customer and billing fields appear in this
                context. There is no unrelated personal profiling, no
                behavioral scoring, and no inference about a customer&apos;s
                financial health.
              </p>

              <p
                className="
                  !m-0
                  mt-5
                  text-sm
                  font-normal
                  leading-6
                  text-[#5d7192]
                "
              >
                Detailed profile management stays in{" "}
                <Link
                  href="/customer-records"
                  className="
                    font-semibold
                    text-[#091127]
                    underline
                    decoration-[#7890b2]
                    underline-offset-2
                    hover:text-[#5d7192]
                  "
                >
                  Customer Records
                </Link>
                . This view shows the cross-record relationship — it is not a
                second customer database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}