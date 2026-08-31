import Image from "next/image";

/*
  Shared building blocks for the Entity-Level Controls page.

  Figma tokens resolved to hex (the project has no theme config):
    color/azure/11-2 #0F172A   color/azure/44-3 #5D7192
    color/azure/52   #1F6FEB   color/azure/60   #7890B2
    color/grey/92-4  #DFE5EE   color/grey/95-10 #EDF0F4
    color/grey/97-4  #F7F8FA   color/grey/99-2  #FCFDFE
*/

export const heading = "font-[family-name:var(--font-jakarta)] font-extrabold";

/** Uppercase kicker. Centred variant gets a rule on both sides. */
export function Eyebrow({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
    >
      {centered ? (
        <span aria-hidden className="h-px w-4 shrink-0 bg-[#7890B2] opacity-40" />
      ) : (
        <span aria-hidden className="h-px w-6 shrink-0 bg-[#1F6FEB] opacity-75" />
      )}
      <span
        className={`min-w-0 text-xs font-bold uppercase !leading-4 tracking-[0.12em] !text-[#7890B2] ${
          centered ? "text-center" : ""
        }`}
      >
        {children}
      </span>
      {centered && (
        <span aria-hidden className="h-px w-4 shrink-0 bg-[#7890B2] opacity-40" />
      )}
    </div>
  );
}

/** Centred eyebrow + h2 + intro, used by every full-width section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex w-full max-w-[664px] flex-col items-center gap-3 pt-2">
      <Eyebrow centered>{eyebrow}</Eyebrow>
      <h2
        className={`${heading} !mb-0 text-center !text-[28px] !leading-9 !tracking-[-0.02em] sm:!text-[32px] sm:!leading-10 lg:!text-4xl ${
          dark ? "!text-white" : "!text-[#0F172A]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`!mb-0 text-center text-base !leading-7 ${
          dark ? "!text-[#A9B4C4]" : "!text-[#5D7192]"
        }`}
      >
        {intro}
      </p>
    </div>
  );
}

/** Section shell: uniform vertical rhythm, optional tinted or dark ground. */
export function Section({
  children,
  tone = "white",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "white" | "tint" | "dark";
  className?: string;
}) {
  const bg =
    tone === "tint"
      ? "bg-[#F7F8FA]"
      : tone === "dark"
        ? "bg-[#0C1A33]"
        : "bg-white";

  return (
    <section className={`w-full ${bg} px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24`}>
      <div
        className={`mx-auto flex w-full max-w-[1240px] flex-col items-center gap-6 lg:px-7 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

/** Full-bleed illustration in the rounded, bordered frame Figma uses. */
export function SectionImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(min-width: 1280px) 1184px, 100vw"
      className="h-auto w-full rounded-2xl border border-[#DFE5EE] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]"
    />
  );
}

export type Column = { key: string; label: string; width?: string };
export type Row = Record<string, React.ReactNode>;

/**
 * Figma renders these as tables. Below `lg` the columns are restacked as
 * labelled blocks so nothing has to scroll sideways on a phone.
 */
export function DataTable({
  columns,
  rows,
  caption,
}: {
  columns: Column[];
  rows: Row[];
  caption?: string;
}) {
  const [first, ...rest] = columns;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#DFE5EE] bg-white shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]">
      {caption && (
        <div className="border-b border-[#DFE5EE] bg-[#FCFDFE] px-5 py-4">
          <p className="!mb-0 text-sm !leading-5 !text-[#5D7192]">{caption}</p>
        </div>
      )}

      {/* Table from lg up */}
      <table className="hidden w-full table-fixed border-collapse lg:table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`border-b border-[#DFE5EE] bg-[#FCFDFE] px-4 pb-3.5 pt-3 text-left text-xs font-bold uppercase !leading-4 tracking-wide !text-[#7890B2] ${col.width ?? ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col, j) => (
                <td
                  key={col.key}
                  className={`px-4 py-3.5 align-top text-sm !leading-5 ${
                    i < rows.length - 1 ? "border-b border-[#EDF0F4]" : ""
                  } ${
                    j === 0
                      ? "font-semibold !text-[#0F172A]"
                      : "!text-[#5D7192]"
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Stacked blocks below lg */}
      <div className="lg:hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col gap-3 px-5 py-4 ${
              i < rows.length - 1 ? "border-b border-[#EDF0F4]" : ""
            }`}
          >
            <p className="!mb-0 text-sm font-semibold !leading-5 !text-[#0F172A]">
              {row[first.key]}
            </p>
            {rest.map((col) => (
              <div key={col.key} className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase !leading-4 tracking-wide !text-[#7890B2]">
                  {col.label}
                </span>
                <span className="text-sm !leading-5 !text-[#5D7192]">
                  {row[col.key]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
