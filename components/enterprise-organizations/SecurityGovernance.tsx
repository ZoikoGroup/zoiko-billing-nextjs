const securityRows = [
  {
    area: "Security architecture",
    statement:
      'Approved controls and evidence only. "Enterprise-grade" is not used as shorthand for a control set.',
  },
  {
    area: "Privacy",
    statement:
      "Purpose limitation, access, minimization, retention and rights routes.",
  },
  {
    area: "Data governance",
    statement:
      "Source and authority, mapping, permissions, export and disposition, and currentness.",
  },
  {
    area: "Encryption",
    statement:
      "Only evidence-backed methods and scope. No blanket marketing wording.",
  },
  {
    area: "Audit logs",
    statement:
      "Only the actual product and audit coverage that exists.",
  },
  {
    area: "Availability & resilience",
    statement:
      "System Status and approved reliability evidence. No invented service level, disaster-recovery target, recovery-time or recovery-point objective.",
  },
  {
    area: "Business continuity",
    statement: "Only current public continuity evidence.",
  },
  {
    area: "Data residency & localization",
    statement: "Only approved options and markets.",
  },
  {
    area: "Responsible disclosure",
    statement: "A dedicated route, not Sales.",
  },
];

export default function SecurityGovernance() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-12 xl:px-16 xl:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-1 sm:pt-2">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40 sm:w-5" />

            <span className="text-center text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-blue-600 sm:text-xs sm:tracking-[0.18em]">
              Security, privacy, data governance &amp; resilience
            </span>

            <span className="h-px w-4 shrink-0 bg-blue-600 opacity-40 sm:w-5" />
          </div>

          {/* Heading */}
          <h2 className="w-full px-2 text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:px-0 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Diligence before sales, and no shorthand.
          </h2>

          {/* Description */}
          <p className="w-full max-w-[687px] px-2 text-center text-sm font-normal leading-6 text-slate-600 sm:px-0 sm:text-base sm:leading-7">
            Trust, Security, Privacy, Accessibility, System Status, responsible
            disclosure and public legal evidence stay accessible without an
            enterprise lead form.
          </p>
        </div>

        {/* Desktop / Tablet Table */}
        <div className="hidden w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-[#FBFCFD]">
                  <th className="w-[22%] border-b border-slate-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    Area
                  </th>

                  <th className="w-[78%] border-b border-slate-200 px-4 py-3 text-left text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                    How it is stated publicly
                  </th>
                </tr>
              </thead>

              <tbody>
                {securityRows.map((row, index) => (
                  <tr key={row.area}>
                    <td
                      className={`px-4 py-3.5 align-top text-sm font-semibold leading-5 text-slate-900 ${
                        index !== securityRows.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      {row.area}
                    </td>

                    <td
                      className={`px-4 py-3.5 align-top text-sm font-normal leading-5 text-slate-600 ${
                        index !== securityRows.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      {row.statement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05),0px_1px_2px_0px_rgba(15,23,42,0.04)] md:hidden">
          {securityRows.map((row, index) => (
            <div
              key={row.area}
              className={`flex flex-col gap-2.5 p-5 ${
                index !== securityRows.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <span className="text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                Area
              </span>

              <h3 className="text-sm font-semibold leading-5 text-slate-900">
                {row.area}
              </h3>

              <span className="pt-1 text-xs font-bold uppercase leading-4 tracking-wide text-blue-600">
                How it is stated publicly
              </span>

              <p className="text-sm font-normal leading-6 text-slate-600">
                {row.statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}