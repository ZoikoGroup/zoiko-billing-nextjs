"use client";

const preferences = [
  {
    title: "Allowed currency set",
    text: "— only from the current applicability registry.",
  },
  {
    title: "Effective date",
    text: "— future changes clearly separated from the current value.",
  },
  {
    title: "One-off override",
    text: "— permissioned, with reason and downstream effect visible.",
  },
  {
    title: "Currency locked by contract",
    text: "— explains why it cannot be changed and routes to the commercial workflow.",
  },
  {
    title: "Unsupported request",
    text: "— shown as unavailable or needs review; never silently converted to the nearest alternative.",
  },
  {
    title: "Display preference",
    text: "— independently selectable, and cannot change the authoritative invoice or payment currency.",
  },
  {
    title: "History",
    text: "— before and after, source, actor, effective date and reason.",
  },
];

export default function CustomerPrefs() {
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

            lg:flex-row
            lg:items-center
          "
        >
          {/* CONTENT */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start
              gap-3.5

              lg:flex-1
              lg:pt-2
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
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
                Customer preference &amp; overrides
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
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
              A preference is a request, not a permission.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              A preferred billing currency is subject to eligibility and to
              contract, entity, jurisdiction and provider rules. Where it
              cannot be honored, the reason is shown and the request routes to
              the authorized workflow.
            </p>

            {/* PREFERENCE LIST */}
            <div className="mt-1 w-full space-y-4">
              {preferences.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3"
                >
                  {/* BULLET */}
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-[#7890b2]" />

                  {/* CONTENT */}
                  <div
                    className="
                      min-w-0
                      flex-1
                      text-[15px]
                      leading-6
                      text-[#5d7192]

                      sm:text-base
                    "
                  >
                    <span className="font-bold text-[#091127]">
                      {item.title}
                    </span>{" "}
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE CARD */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-4
              shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]

              lg:flex-1
            "
          >
            <div className="overflow-hidden rounded-xl bg-white">
              <img
                src="/images/multi-currency/customer-currency.png"
                alt="Customer currency preferences and overrides"
                className="block h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}