'use client';

interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'Least privilege',
    description:
      'Every subject receives the narrowest access that lets them do their job.',
  },
  {
    number: '02',
    title: 'Explicit scope',
    description:
      'Workspace, entity, region, record type, field, amount, action and time are all boundaries.',
  },
  {
    number: '03',
    title: 'Meaningful review',
    description:
      'Where policy requires a decision, the reviewer gets the context to make a real one.',
  },
  {
    number: '04',
    title: 'Attributable execution',
    description:
      'Who requested, who approved and who executed is recorded on the action.',
  },
  {
    number: '05',
    title: 'Availability varies',
    description:
      'Plan, action, integration and jurisdiction all affect what is available to you.',
  },
];

export default function AccessPrinciplesSection() {
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
            gap-8

            sm:gap-10

            md:gap-11
          "
        >
          {/* PRINCIPLES */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              overflow-hidden
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-[#dfe5ee]
              gap-px

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="
                  flex
                  min-h-[190px]
                  flex-col
                  gap-1.5
                  bg-white
                  p-5
                  pb-8

                  sm:pb-10
                "
              >
                {/* ITEM INDEX */}
                <span
                  className="
                    text-[10px]
                    font-bold
                    leading-4
                    tracking-[0.12em]
                    text-[#7890b2]
                  "
                >
                  {principle.number}
                </span>

                {/* TITLE */}
                <h3
                  className="
                    !m-0
                    pt-1
                    text-sm
                    font-semibold
                    leading-5
                    text-[#091127]
                  "
                >
                  {principle.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    !m-0
                    text-sm
                    font-normal
                    leading-6
                    text-[#5d7192]
                  "
                >
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* OPERATING BOUNDARY */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-2
              rounded-r-2xl
              border-l-[3px]
              border-[#7890b2]
              bg-white
              p-5

              sm:p-6

              md:p-7
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
              Operating boundary
            </span>

            <p
              className="
                !m-0
                w-full
                max-w-3xl
                text-sm
                font-normal
                leading-6
                text-[#5d7192]

                sm:text-base
                sm:leading-7
              "
            >
              These are access controls, not a compliance outcome. A role
              title does not establish legal authority, and permission granted
              under current policy is not the same as being legally authorized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}