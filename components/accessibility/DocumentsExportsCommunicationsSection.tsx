import Link from "next/link";

interface ArtifactRow {
  artifact: string;
  consideration: string;
  authority: React.ReactNode;
}

const artifactRows: ArtifactRow[] = [
  {
    artifact: "Generated billing documents",
    consideration: "Structure, reading order, tagging and whether an accessible alternative exists.",
    authority: (
      <>
        Product ·{" "}
        <Link href="/documentation" className="text-blue-600 font-bold hover:underline">
          Documentation
        </Link>
      </>
    ),
  },
  {
    artifact: "Data exports",
    consideration: "Whether exported structure is usable with assistive technology, including headers.",
    authority: "Product",
  },
  {
    artifact: "Email communications",
    consideration: "Semantic structure, contrast, and meaning not carried by images alone.",
    authority: "Product",
  },
  {
    artifact: "Reports",
    consideration: "Table semantics, non-color cues, and an accessible alternative to a visualization.",
    authority: "Product",
  },
  {
    artifact: "Help & documentation content",
    consideration: "Heading structure, alt text and keyboard-navigable examples.",
    authority: (
      <>
        <Link href="/resource-center" className="text-blue-600 font-bold hover:underline">
          Help
        </Link>{" "}
        ·{" "}
        <Link href="/documentation" className="text-blue-600 font-bold hover:underline">
          Documentation
        </Link>
      </>
    ),
  },
  {
    artifact: "Templates",
    consideration: "Editable-field distinction not by color alone; accessible alternative where needed.",
    authority: <span className="text-blue-600 font-bold">Templates</span>,
  },
];

export default function DocumentsExportsCommunicationsSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="documents-exports">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          DOCUMENTS, EXPORTS &amp; COMMUNICATIONS
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Accessibility does not stop at the screen.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          Billing produces artifacts that leave the product — and each has its own accessibility question.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    ARTIFACT
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/2">
                    CONSIDERATION
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    AUTHORITY
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {artifactRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.artifact}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.consideration}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.authority}
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
