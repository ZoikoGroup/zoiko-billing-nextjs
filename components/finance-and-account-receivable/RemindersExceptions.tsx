"use client";

import Image from "next/image";

export default function RemindersExceptions() {
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
              Reminders, disputes &amp; exceptions
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
              A reminder checks the current state before it sends.
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
              Chasing an invoice that is disputed, undelivered, or awaiting a
              credit note damages the customer relationship and the record.
              Each state below is checked first.
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
              src="/images/finance-and-account-receivable/reminders-exceptions.png"
              alt="Reminders, disputes and exceptions"
              width={1264}
              height={637}
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
            {/* HUMAN AUTHORITY */}
            <div
              className="
                flex-1
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#f1f3f6]
                px-5
                pb-9
                pt-6

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
                Human authority is retained
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
                Automation may recommend or execute configured operational
                steps where production capability exists. Sensitive
                exceptions, disputes and financial corrections keep explicit
                human authority and review.
              </p>
            </div>

            {/* NOTHING DISAPPEARS */}
            <div
              className="
                flex-1
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-white
                px-5
                pb-14
                pt-6
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
                Nothing disappears quietly
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
                An unresolved exception stays visible in the queue.
                Communication history records the approved reminder or contact
                event without exposing unrelated communication content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}