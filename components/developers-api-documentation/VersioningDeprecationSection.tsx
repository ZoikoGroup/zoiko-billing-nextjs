interface VersioningRow {
  topic: string;
  behavior: React.ReactNode;
}

const versioningRows: VersioningRow[] = [
  {
    topic: "Version visibility",
    behavior:
      "A version selector appears only if multiple supported versions exist, and current context stays visible while navigating",
  },
  {
    topic: "Compatibility",
    behavior:
      "Document what constitutes a breaking versus non-breaking change, from the engineering-owned policy",
  },
  {
    topic: "Deprecation banner",
    behavior: (
      <>
        Show deprecated status, replacement, key dates, impact and migration path —{" "}
        <span className="font-bold text-slate-900">
          never hide behind release notes only
        </span>
      </>
    ),
  },
  {
    topic: "Sunset state",
    behavior:
      "After retirement, preserve an explanatory landing page; do not leave dead links from old documentation",
  },
  {
    topic: "Schema evolution",
    behavior:
      "Added optional fields, enum expansion, ordering and response changes require explicit compatibility guidance",
  },
  {
    topic: "Change history",
    behavior: (
      <>
        Reference the canonical changelog only if that destination exists —{" "}
        <span className="font-bold text-slate-900">
          do not invent a parallel changelog here
        </span>
      </>
    ),
  },
];

export default function VersioningDeprecationSection() {
  return (
    <section className="w-full bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100" id="versioning">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          VERSIONING, COMPATIBILITY &amp; DEPRECATION
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          A deprecation never hides in release notes.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Six requirements governing how change is communicated, and where the changelog
          actually lives.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    TOPIC
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIRED BEHAVIOR
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {versioningRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.topic}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.behavior}
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
