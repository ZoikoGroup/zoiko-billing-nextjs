'use client';

type Stage = {
  number: string;
  title: string;
  description: React.ReactNode;
};

const stages: Stage[] = [
  {
    number: '1',
    title: 'Prerequisites',
    description: (
      <>
        What must exist first — an external account, a permission, a
        configuration.{' '}
        <strong>
          Stated before setup begins, not discovered during it.
        </strong>
      </>
    ),
  },
  {
    number: '2',
    title: 'Authorization',
    description: (
      <>
        Connecting the two systems.{' '}
        <strong>
          Method rendered only where public-safe.
        </strong>
      </>
    ),
  },
  {
    number: '3',
    title: 'Configuration',
    description: (
      <>
        Mapping and options. Incomplete configuration is a real state, not a
        failure.
      </>
    ),
  },
  {
    number: '4',
    title: 'Verification',
    description: (
      <>
        Confirming the connection behaves as expected before relying on it.
      </>
    ),
  },
  {
    number: '5',
    title: 'Ongoing',
    description: (
      <>
        Reauthorization, provider changes and attention states —{' '}
        <strong>
          all authenticated, none shown publicly
        </strong>
        .
      </>
    ),
  },
];

export default function SetupLifecycle() {
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
            gap-5
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
                Setup lifecycle
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
              Five stages, and this page owns none
             
              of them.
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
              Setup happens in the authenticated product with documentation
              alongside. The directory explains what the shape looks like so a
              reader can judge effort before committing.
            </p>
          </div>

          {/* LIFECYCLE STAGES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-3
              pt-6

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className={`
                  flex
                  min-h-[192px]
                  flex-col
                  rounded-[10px]
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-[15px]
                  ${
                    index === 0
                      ? 'border-t-2 border-t-blue-600'
                      : ''
                  }
                `}
              >
                {/* NUMBER + TITLE */}
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      size-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eef1f5]
                      ring-1
                      ring-inset
                      ring-blue-600
                    "
                  >
                    <span className="text-xs font-bold leading-4 text-[#315da8]">
                      {stage.number}
                    </span>
                  </div>

                  <h3
                    className="
                      !m-0
                      text-xs
                      font-bold
                      leading-5
                      text-[#091127]
                    "
                  >
                    {stage.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-auto pt-10">
                  <p
                    className="
                      !m-0
                      text-xs
                      font-normal
                      leading-4
                      text-[#5d7192]
                    "
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}