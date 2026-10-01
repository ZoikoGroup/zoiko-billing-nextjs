import Link from "next/link";

interface FourRouteCard {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const fourRoutes: FourRouteCard[] = [
  {
    title: "Developer Sandbox",
    description:
      "A safe place to test supported flows. Environment limitations, test-data rules, reset behavior and production differences are stated only when verified.",
    linkText: "Developer Sandbox",
    linkHref: "/developer-sandbox",
  },
  {
    title: "SDKs & Examples",
    description:
      "Only languages and libraries that are actually published appear here, with officially supported SDKs distinguished from examples and community code.",
    linkText: "SDKs & Examples",
    linkHref: "/sdks-and-example",
  },
  {
    title: "API Documentation",
    description:
      "The canonical technical source. This overview defers exact schemas and endpoints to it in every case.",
    linkText: "API Documentation",
    linkHref: "/developer-api-documentation",
  },
  {
    title: "Build an Integration",
    description:
      "Guided implementation when complexity or enterprise requirements justify it — offered after technical proof, never before.",
    linkText: "Build an Integration",
    linkHref: "/integrations",
  },
];

export default function FourRoutesSection() {
  return (
    <section id="sandbox" className="w-full bg-[#f7f8fa]">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
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
          {/* INTRO */}
          <div
            className="
              flex
              w-full
              max-w-[800px]
              flex-col
              items-center
              gap-3
              text-center
            "
          >
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 bg-[#7890b2] opacity-40" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  leading-4
                  tracking-[0.14em]
                  text-[#7890b2]
                  sm:text-xs
                  sm:tracking-[0.18em]
                "
              >
                Sandbox, SDKs &amp; Examples
              </span>

              <span className="h-px w-4 bg-[#7890b2] opacity-40" />
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
              Four routes, and the commercial one comes last.
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                !m-0
                w-full
                max-w-[720px]
                text-[15px]
                font-normal
                leading-7
                text-[#5d7192]
                sm:text-base
              "
            >
              A guided implementation conversation never replaces self-service
              documentation.
            </p>
          </div>

          {/* ROUTES */}
          <div className="grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
            {fourRoutes.map((route) => (
              <div
                key={route.title}
                className="
                  flex
                  min-h-[250px]
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-5
                  shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                  transition-shadow
                  duration-200
                  hover:shadow-[0_8px_24px_rgba(15,23,42,0.07)]
                  sm:p-6
                  md:p-7
                "
              >
                <div>
                  <h3
                    className="
                      !m-0
                      text-base
                      font-bold
                      leading-6
                      text-[#091127]
                      sm:text-lg
                    "
                  >
                    {route.title}
                  </h3>

                  <p
                    className="
                      !m-0
                      mt-2
                      text-sm
                      font-normal
                      leading-6
                      text-[#5d7192]
                    "
                  >
                    {route.description}
                  </p>
                </div>

                <Link
                  href={route.linkHref}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    text-xs
                    font-semibold
                    text-[#5d7192]
                    transition-colors
                    duration-200
                    hover:text-[#091127]
                  "
                >
                  {route.linkText}
                </Link>
              </div>
            ))}
          </div>

          {/* PUBLISHED SDK NOTICE */}
          <div
            className="
              w-full
              rounded-2xl
              border
              border-[#dfe5ee]
              bg-white
              p-5
              text-left
              text-sm
              leading-6
              text-[#5d7192]
              shadow-[0_6px_20px_rgba(15,23,42,0.04)]
              sm:p-6
            "
          >
            <span className="font-bold text-[#091127]">
              Published SDKs only.
            </span>{" "}
            No language list appears until it is confirmed, and support status
            is labeled rather than implied by presence.
          </div>
        </div>
      </div>
    </section>
  );
}