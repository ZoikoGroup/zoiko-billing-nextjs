import Link from "next/link";

interface FourRouteCard {
  title: string;
  description: string;
  linkHref: string;
}

const fourRoutes: FourRouteCard[] = [
  {
    title: "Developer Sandbox",
    description:
      "A safe place to test supported flows. Environment limitations, test-data rules, reset behavior and production differences are stated only when verified.",
    linkHref: "/developer-sandbox",
  },
  {
    title: "SDKs & Examples",
    description:
      "Only languages and libraries that are actually published appear here, with officially supported SDKs distinguished from examples and community code.",
    linkHref: "/sdks-and-examples",
  },
  {
    title: "API Documentation",
    description:
      "The canonical technical source. This overview defers exact schemas and endpoints to it in every case.",
    linkHref: "/developers-api-documentation",
  },
  {
    title: "Build an Integration",
    description:
      "Guided implementation when complexity or enterprise requirements justify it — offered after technical proof, never before.",
    linkHref: "/developers-build-an-integration",
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
          py-16
          sm:px-8
          sm:py-20
          md:px-10
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
            gap-10
            sm:gap-12
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
                  tracking-[0.16em]
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
                !font-[family-name:var(--font-jakarta)]
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
              Four routes, and the commercial one <br className="hidden sm:inline" />
              comes last.
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

          {/* 4 ROUTES CARDS */}
          <div className="grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {fourRoutes.map((route) => (
              <Link
                key={route.title}
                href={route.linkHref}
                className="
                  flex
                  min-h-[220px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#dfe5ee]
                  bg-white
                  p-6
                  shadow-[0_6px_20px_rgba(15,23,42,0.04)]
                  transition
                  duration-200
                  hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]
                  hover:border-slate-300
                  sm:p-7
                "
              >
                <h3
                  className="
                    !m-0
                    !font-[family-name:var(--font-jakarta)]
                    text-base
                    font-bold
                    leading-6
                    text-[#091127]
                  "
                >
                  {route.title}
                </h3>

                <p
                  className="
                    !m-0
                    mt-3
                    text-xs
                    font-normal
                    leading-relaxed
                    text-[#5d7192]
                    sm:text-[13px]
                  "
                >
                  {route.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}