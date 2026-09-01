import Image from "next/image";

/*
  Shared building blocks for the Why Zoiko Billing page.

  Figma tokens resolved to hex (the project has no theme config):
    color/azure/11-2 #0F172A   color/azure/44-3 #5D7192
    color/azure/52   #1F6FEB   color/azure/60   #7890B2
    color/grey/92-4  #DFE5EE   color/grey/95-10 #EDF0F4
    color/grey/95-13 #E8F0FD   color/grey/97-4  #F7F8FA
    color/grey/99-2  #FCFDFE
*/

export const heading = "font-[family-name:var(--font-jakarta)] font-extrabold";

export const linkClass = "font-semibold !text-[#1F6FEB] hover:underline";

/** Uppercase kicker. Centred variant gets a rule on both sides. */
export function Eyebrow({
  children,
  centered = false,
  dark = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
  dark?: boolean;
}) {
  const rule = dark ? "bg-[#7890B2]" : centered ? "bg-[#7890B2]" : "bg-[#1F6FEB]";
  return (
    <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
      <span
        aria-hidden
        className={`h-px shrink-0 ${rule} ${centered ? "w-4 opacity-40" : "w-6 opacity-75"}`}
      />
      <span
        className={`min-w-0 text-xs font-bold uppercase !leading-4 tracking-[0.12em] !text-[#7890B2] ${
          centered ? "text-center" : ""
        }`}
      >
        {children}
      </span>
      {centered && (
        <span aria-hidden className={`h-px w-4 shrink-0 ${rule} opacity-40`} />
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
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  intro: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex w-full max-w-[664px] flex-col items-center gap-3 pt-2">
      <Eyebrow centered dark={dark}>
        {eyebrow}
      </Eyebrow>
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
  gap = "gap-6",
  id,
}: {
  children: React.ReactNode;
  tone?: "white" | "tint" | "dark";
  gap?: string;
  id?: string;
}) {
  const bg =
    tone === "tint" ? "bg-[#F7F8FA]" : tone === "dark" ? "bg-[#0C1A33]" : "bg-white";

  return (
    <section
      id={id}
      className={`w-full ${bg} px-4 py-16 sm:px-6 lg:px-12 lg:py-20 xl:px-24`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1240px] flex-col items-center ${gap} lg:px-7`}
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
  framed = true,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  framed?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(min-width: 1280px) 1184px, 100vw"
      className={`h-auto w-full rounded-2xl ${
        framed
          ? "border border-[#DFE5EE] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)]"
          : ""
      }`}
    />
  );
}

/** The white card with a hairline border and soft lift used across the page. */
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#DFE5EE] bg-white p-5 shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}
