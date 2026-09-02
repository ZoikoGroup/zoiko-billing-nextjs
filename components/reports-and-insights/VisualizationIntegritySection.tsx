interface VisualizationRuleRow {
  area: string;
  requirement: React.ReactNode;
}

const visualizationRuleRows: VisualizationRuleRow[] = [
  {
    area: "Chart choice",
    requirement: (
      <>
        Match the data and task — trend is line, category comparison is bar.{" "}
        <span className="font-bold text-slate-900">Avoid decorative donuts and 3D</span>
      </>
    ),
  },
  {
    area: "Axes",
    requirement: (
      <>
        <span className="font-bold text-slate-900">
          No truncated baselines that materially exaggerate differences
        </span>{" "}
        unless explicitly justified and clearly signaled; units always visible
      </>
    ),
  },
  {
    area: "Denominator",
    requirement: "Rate and percentage denominators clear in the chart or adjacent text",
  },
  {
    area: "Missing data",
    requirement: (
      <>
        <span className="font-bold text-slate-900">
          Do not silently interpolate or hide missingness
        </span>{" "}
        — disclose the baseline
      </>
    ),
  },
  {
    area: "Smoothing & modeling",
    requirement: "Label rolling averages, modeled values and forecasts, with confidence or uncertainty",
  },
  {
    area: "Color",
    requirement: "Accessible contrast, never color-only, consistent semantic use, no red-green dependence",
  },
  {
    area: "Interaction",
    requirement: (
      <>
        Hover is enhancement only —{" "}
        <span className="font-bold text-slate-900">
          no information available solely in a tooltip
        </span>
      </>
    ),
  },
  {
    area: "Accessibility",
    requirement: "Text summary plus an accessible data table, with title, caption, source and period programmatically associated",
  },
  {
    area: "Mobile",
    requirement: "Simplify labels without removing data meaning; no clipped legends",
  },
];

export default function VisualizationIntegritySection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-slate-100" id="visualization-integrity">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <span className="h-px w-5 bg-slate-300" />
          VISUALIZATION INTEGRITY
          <span className="h-px w-5 bg-slate-300" />
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[42px] tracking-tight max-w-3xl">
          Nine rules between data and a chart.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 max-w-2xl text-xs sm:text-base font-normal leading-relaxed text-slate-600">
          A chart is an argument. These constraints keep it an honest one.
        </p>

        {/* Table Container Card */}
        <div className="mt-10 lg:mt-14 w-full max-w-[1240px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80">
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    AREA
                  </th>
                  <th scope="col" className="py-3.5 px-6 sm:px-8 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-3/4">
                    REQUIREMENT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {visualizationRuleRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/40 transition">
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold text-slate-900 align-top">
                      {row.area}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed align-top">
                      {row.requirement}
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
