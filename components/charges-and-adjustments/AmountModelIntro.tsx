export default function AmountModelIntro() {
  return (
    <div
      className="
        flex
        w-full
        flex-col
        items-start
        justify-center
        gap-8

        sm:gap-10

        md:flex-row
        md:items-end
        md:gap-12

        lg:gap-16
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          flex
          w-full
          flex-1
          flex-col
          items-start
          gap-5
          pt-2.5
          pb-4

          md:pb-6
        "
      >
        {/* EYEBROW */}
        <div className="flex h-4 items-center">
          <span
            className="
              h-0.5
              w-5
              rounded-sm
              bg-gradient-to-r
              from-[#4bb9c7]
              to-[#5b8fc4]
            "
          />

          <span
            className="
              ml-2
              text-xs
              font-medium
              uppercase
              leading-4
              tracking-[0.12em]
              text-[#5b8fc4]
            "
          >
            Amount model
          </span>
        </div>

        {/* HEADING */}
        <div className="w-full max-w-[638px]">
          <h2
            className="
              m-0
              text-[34px]
              font-medium
              leading-[1.2]
              tracking-[-0.03em]
              text-[#08233f]

              sm:text-[40px]

              md:text-[44px]

              lg:text-5xl
              lg:leading-[53.82px]
            "
          >
            Keep the source, rule and purpose behind every amount.
          </h2>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        className="
          flex
          w-full
          flex-1
          flex-col
          items-start

          md:max-w-[528.77px]
        "
      >
        <p
          className="
            m-0
            w-full
            text-[15px]
            font-normal
            leading-7
            text-[#4f6687]

            sm:text-base
            sm:leading-8
          "
        >
          Five component types, each with an explicit direction and its own
          governance. Not every type is available in every plan or market.
        </p>
      </div>
    </div>
  );
}