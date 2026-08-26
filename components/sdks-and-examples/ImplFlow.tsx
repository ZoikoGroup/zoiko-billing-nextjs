export default function ImplFlow() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1240px]
          flex-col
          items-center
          gap-8
          px-5
          sm:gap-10
          sm:px-7
          lg:gap-11
        "
      >
        {/* Intro */}
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
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-4 bg-[#7890b2] opacity-40" />

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
              From example to implementation
            </span>

            <span className="h-px w-4 bg-[#7890b2] opacity-40" />
          </div>

          {/* Heading */}
          <h2
            className="
              !m-0
              text-center
              text-[30px]
              font-extrabold
              leading-[1.2]
              tracking-[-0.035em]
              text-[#091127]
              sm:text-[34px]
              md:text-[36px]
            "
          >
            Working code is the conversion.
          </h2>

          {/* Description */}
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
            Seven stages, with documentation never gated behind a commercial
            conversation.
          </p>
        </div>

        {/* Image / Implementation flow */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[#dfe5ee]
            bg-white
            shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
          "
        >
          <img
            src="/images/sdks-and-examples/impl-flow.png"
            alt="From example to implementation flow"
            className="
              block
              h-auto
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}