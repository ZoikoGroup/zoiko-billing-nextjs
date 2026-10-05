export default function LifecycleVersioningEffectiveDating() {
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
              max-w-[1000px]
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
                Lifecycle, versioning &amp; effective-dating
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2
              className="
                !m-0
                w-full
                max-w-[1000px]
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
              Eight states, and only one is currently
              <br className="hidden sm:block" />
              in force.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[1000px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]

                sm:text-base
              "
            >
              Select a state to see its required UI behavior.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src="/images/tax-configuration/image2.png"
              alt="Lifecycle, versioning and effective-dating states"
              className="
                block
                h-auto
                w-full
                rounded-2xl
                border
                border-[#dfe5ee]
                object-cover
                shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
              "
            />
          </div>

          {/* INFORMATION CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-5

              lg:grid-cols-2
            "
          >
            {/* CHANGE CONTROL RULES */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-2
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
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Change-control rules
              </h3>

              <p
                className="
                  !m-0
                  text-sm
                  leading-5
                  text-[#5d7192]
                "
              >
                <strong className="font-bold text-[#5d7192]">
                  No silent mutation of effective configuration
                </strong>{" "}
                when the meaning materially changes.
              </p>

              <p
                className="
                  !m-0
                  pt-1
                  text-sm
                  leading-5
                  text-[#5d7192]
                "
              >
                A material change creates a{" "}
                <strong className="font-bold">
                  new governed version or an explicit correction or
                  supersession relation
                </strong>
                .
              </p>

              <p
                className="
                  !m-0
                  pt-1
                  text-sm
                  font-bold
                  leading-5
                  text-[#5d7192]
                "
              >
                Rollback is a governed change event, not deletion of
                historical context.
              </p>
            </div>

            {/* WHY ROLLBACK IS NOT DELETION */}
            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-2
                rounded-2xl
                border
                border-[#dfe5ee]
                bg-[#f1f3f6]
                px-5
                py-6

                sm:px-6
              "
            >
              <h3
                className="
                  !m-0
                  text-lg
                  font-bold
                  leading-7
                  text-[#091127]
                "
              >
                Why rollback is not deletion
              </h3>

              <p
                className="
                  !m-0
                  text-sm
                  leading-5
                  text-[#5d7192]
                "
              >
                A configuration that was effective for a period produced
                outputs during that period, and those outputs need explaining.
              </p>

              <p
                className="
                  !m-0
                  pt-1
                  text-sm
                  leading-5
                  text-[#5d7192]
                "
              >
                <strong className="font-bold">
                  Deleting the record removes the explanation while leaving
                  the consequences in place
                </strong>{" "}
                — documents already issued under it do not change because the
                configuration behind them disappeared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}