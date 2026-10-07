import { cardClass } from "./shared";

export type GuardrailRow = {
  label: string;
  scope: React.ReactNode;
  guardrail: string;
  /** Render the guardrail in regular weight (used where it is a note, not a prohibition). */
  soft?: boolean;
};

const th =
  "px-3.5 py-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-white";

/**
 * Three-column "what it is / what it must not claim" table with a navy header
 * and a warm red guardrail column. Below lg the rows restack as labelled blocks.
 */
export default function GuardrailTable({
  columns,
  rows,
}: {
  columns: [string, string, string];
  rows: GuardrailRow[];
}) {
  const [first, second, third] = columns;

  return (
    <div className={`${cardClass} w-full overflow-hidden`}>
      {/* Table from lg up */}
      <table className="hidden w-full table-fixed border-collapse lg:table">
        <thead className="bg-[#0B1B3C]">
          <tr>
            <th scope="col" className={`${th} w-48 border-r border-white/15`}>
              {first}
            </th>
            <th scope="col" className={`${th} border-r border-white/15`}>
              {second}
            </th>
            <th scope="col" className={th}>
              {third}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-[#EDF0F4]">
              <th
                scope="row"
                className="border-r border-[#EDF0F4] bg-[#FCFDFE] px-3.5 py-3 text-left align-top text-xs font-bold !leading-5 !text-[#0F172A]"
              >
                {row.label}
              </th>
              <td className="border-r border-[#EDF0F4] px-3.5 py-3 align-top text-xs !leading-5 !text-[#0F172A]">
                {row.scope}
              </td>
              <td
                className={`bg-[#FFF8F5] px-3.5 py-3 align-top text-xs !leading-5 !text-[#7F1D1D] ${
                  row.soft ? "" : "font-bold"
                }`}
              >
                {row.guardrail}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Stacked blocks below lg */}
      <div className="divide-y divide-[#EDF0F4] lg:hidden">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-3 px-5 py-4">
            <p className="!mb-0 text-sm font-bold !leading-5 !text-[#0F172A]">
              {row.label}
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#7890B2]">
                {second}
              </span>
              <span className="text-sm !leading-5 !text-[#5D7192]">{row.scope}</span>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-[#FFF8F5] p-3">
              <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#7890B2]">
                {third}
              </span>
              <span
                className={`text-sm !leading-5 !text-[#7F1D1D] ${row.soft ? "" : "font-bold"}`}
              >
                {row.guardrail}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
