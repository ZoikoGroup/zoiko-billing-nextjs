const routes = [
  {
    title: "Understand the program",
    content: (
      <>
        <span className="font-semibold text-[#5279ad]">
          Partner Program
        </span>{" "}
        owns paths, participation model and requirements.
      </>
    ),
  },
  {
    title: "Apply",
    content: (
      <>
        <span className="font-semibold text-[#5279ad]">
          Become a Partner
        </span>{" "}
        is the canonical application.
        <br />
        <strong>Submitting does not grant portal access</strong> — approval is
        a separate determination.
      </>
    ),
  },
  {
    title: "Submit an integration",
    content: (
      <>
        <span className="font-semibold text-[#5279ad]">
          Submit an Integration
        </span>{" "}
        for technical review.
        <br />
        Independent of partner status in both directions.
      </>
    ),
  },
  {
    title: "Buying instead?",
    content: (
      <>
        <span className="font-semibold text-[#5279ad]">Contact</span> routes
        commercial enquiries. Prospective-customer intent is not partner
        intent.
      </>
    ),
  },
  {
    title: "Colleague has access?",
    content: (
      <>
        Access is managed within your organization under the approved role
        registry — ask them rather than requesting here.
      </>
    ),
  },
  {
    title: "Product support?",
    content: (
      <>
        <span className="font-semibold text-[#5279ad]">Help Center</span> and{" "}
        <span className="font-semibold text-[#5279ad]">
          Contact Support
        </span>
        . Never collected through a partner route.
      </>
    ),
  },
];

export default function NotAPartnerYet() {
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
                Not a partner yet?
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
              Four routes, none of them this page.
            </h2>

            {/* DESCRIPTION */}
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
              The portal has no request-access form, because access is not
              granted by asking here.
            </p>
          </div>

          {/* ROUTES */}
          <div className="grid w-full grid-cols-1 gap-4">
            {routes.map((route) => (
              <div
                key={route.title}
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]
                "
              >
                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    text-sm
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {route.title}
                </h3>

                {/* CONTENT */}
                <p
                  className="
                    !m-0
                    mt-1.5
                    text-xs
                    font-normal
                    leading-5
                    text-[#5d7192]
                  "
                >
                  {route.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}