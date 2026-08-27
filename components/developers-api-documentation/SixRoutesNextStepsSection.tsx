interface RouteRow {
  nextPath: string;
  whenShown: string;
  ctaBehavior: React.ReactNode;
}

const routeRows: RouteRow[] = [
  {
    nextPath: "Authentication",
    whenShown: "The operation needs access setup.",
    ctaBehavior: "Continue to Authentication",
  },
  {
    nextPath: "Developer Sandbox",
    whenShown: "The developer is ready to test safely.",
    ctaBehavior: "Open Sandbox when the canonical destination is published",
  },
  {
    nextPath: "SDKs & Examples",
    whenShown: "The developer wants implementation examples.",
    ctaBehavior: (
      <>
        Open SDKs &amp; Examples —{" "}
        <span className="font-bold text-slate-900">
          no language coverage claimed here
        </span>
      </>
    ),
  },
  {
    nextPath: "Webhooks",
    whenShown: "The workflow has an asynchronous event dependency.",
    ctaBehavior: "Continue to Webhooks",
  },
  {
    nextPath: "Build an Integration",
    whenShown: "There is enough technical confidence to plan production.",
    ctaBehavior: "The primary high-intent developer action",
  },
  {
    nextPath: "Enterprise support",
    whenShown:
      "Implementation requires custom scope, enterprise access or procurement.",
    ctaBehavior: "Use only an approved global commercial or support route",
  },
];

export default function SixRoutesNextStepsSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="next-steps">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          BUILD &amp; TEST NEXT STEPS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Six routes, each shown only when it is relevant.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Reference reading is not interrupted by repeated sales banners; commercial routes
          appear only where implementation scope justifies them.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    NEXT PATH
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[38%]">
                    WHEN SHOWN
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-[37%]">
                    CTA BEHAVIOR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {routeRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.nextPath}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.whenShown}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.ctaBehavior}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
