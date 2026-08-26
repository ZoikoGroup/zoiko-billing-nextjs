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
    linkHref: "#sandbox",
  },
  {
    title: "SDKs & Examples",
    description:
      "Only languages and libraries that are actually published appear here, with officially supported SDKs distinguished from examples and community code.",
    linkText: "SDKs & Examples",
    linkHref: "#sdks",
  },
  {
    title: "API Documentation",
    description:
      "The canonical technical source. This overview defers exact schemas and endpoints to it in every case.",
    linkText: "API Documentation",
    linkHref: "#api-docs",
  },
  {
    title: "Build an Integration",
    description:
      "Guided implementation when complexity or enterprise requirements justify it — offered after technical proof, never before.",
    linkText: "Build an Integration",
    linkHref: "#build-integration",
  },
];

export default function FourRoutesSection() {
  return (
    <section className="w-full bg-slate-50/60 py-12 lg:py-24 border-t border-slate-100" id="sandbox">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          SANDBOX, SDKs &amp; EXAMPLES
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-xl font-extrabold leading-tight text-slate-900 sm:text-3xl lg:text-4xl max-w-3xl">
          Four routes, and the commercial one comes last.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-xl text-xs font-normal leading-relaxed text-slate-600 sm:text-base">
          A guided implementation conversation never replaces self-service documentation.
        </p>

        {/* 4 Cards Grid (2 columns on mobile, 4 columns on desktop) */}
        <div className="mt-8 lg:mt-12 grid w-full grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4 text-left">
          {fourRoutes.map((route, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-7 shadow-sm transition hover:shadow-md"
            >
              <div>
                <h3 className="text-xs sm:text-base font-bold text-slate-900 mb-1.5 sm:mb-2">
                  {route.title}
                </h3>
                <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {route.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-4 sm:mt-6 pt-1 sm:pt-2">
                <Link
                  href={route.linkHref}
                  className="inline-flex items-center text-[11px] sm:text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  {route.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Yellow Warning Notice Card (Published SDKs only) */}
        <div className="mt-4 sm:mt-6 w-full max-w-[1240px] rounded-xl border border-amber-200 bg-amber-50/80 p-3.5 text-left text-xs leading-relaxed text-amber-950 font-normal">
          <span className="font-bold text-amber-900">Published SDKs only.</span> No language list appears until it is
          confirmed, and support status is labeled rather than implied by presence.
        </div>

      </div>
    </section>
  );
}
