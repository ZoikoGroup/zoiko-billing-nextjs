'use client';

type Path = {
  title: string;
  linkLabel: string;
  href: string;
  description: React.ReactNode;
};

const paths: Path[] = [
  {
    title: 'Build with the API',
    linkLabel: 'Documentation',
    href: '/documentation',
    description: (
      <>
        Developer resources for connecting a system yourself.{' '}
        <strong>
          No protocol, endpoint or authentication method is stated on this
          page
        </strong>{' '}
        — Developers own technical truth.
      </>
    ),
  },
  {
    title: 'Submit an integration',
    linkLabel: 'Submit an Integration',
    href: '/submit-integration',
    description: (
      <>
        for technical review.{' '}
        <strong>
          Submission is not approval, and approval is not a directory listing.
        </strong>
      </>
    ),
  },
  {
    title: 'Partner path',
    linkLabel: 'Partner Program',
    href: '/partner-program',
    description: (
      <>
        for a commercial relationship.{' '}
        <strong>A partnership is not an integration</strong>, and neither
        implies the other.
      </>
    ),
  },
  {
    title: 'Ask about a specific system',
    linkLabel: 'Sales enquiries',
    href: '/contact-sales',
    description: (
      <>
        for evaluation questions.{' '}
        <strong>No coverage is promised in the asking.</strong>
      </>
    ),
  },
  {
    title: 'Existing integration failing',
    linkLabel: 'Integration Support',
    href: '/integration-support',
    description: (
      <>
        — account-specific failures, never a directory page.
      </>
    ),
  },
  {
    title: 'Check applicability',
    linkLabel: 'Integration availability',
    href: '/integration-availability',
    description: (
      <>
        by market, which is a separate question from whether an integration
        exists.
      </>
    ),
  },
];

export default function AlternativePaths() {
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
                Developer, custom build &amp; partner paths
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
              Three routes when the directory does
            
              not have it.
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
              &quot;Not listed&quot; is a common outcome and each of these is a
              real answer — but they are not interchangeable, and none is
              equivalent to a supported integration.
            </p>
          </div>

          {/* PATH CARDS */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4
              pt-5

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {paths.map((path) => (
              <article
                key={path.title}
                className="
                  flex
                  min-h-[220px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
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
                  {path.title}
                </h3>

                {/* CONTENT */}
                <div className="mt-4 text-xs leading-5 text-[#5d7192]">
                  <a
                    href={path.href}
                    className="
                      text-sm
                      font-semibold
                      leading-6
                      text-blue-600
                      underline-offset-2
                      hover:underline
                    "
                  >
                    {path.linkLabel}
                  </a>{' '}
                  {path.description}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}