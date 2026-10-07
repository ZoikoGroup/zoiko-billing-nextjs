import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className="flex w-full max-w-[820px] flex-col items-center text-center">
      {/* EYEBROW */}
      <div className="mb-4 flex items-center justify-center gap-3">
        <span
          className={`h-px w-4 ${dark ? "bg-white/40" : "bg-[#7890b2]/40"}`}
        />
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs ${
            dark ? "text-white/60" : "text-[#7890b2]"
          }`}
        >
          {eyebrow}
        </span>
        <span
          className={`h-px w-4 ${dark ? "bg-white/40" : "bg-[#7890b2]/40"}`}
        />
      </div>

      {/* HEADING */}
      <h2
        className={`!font-[family-name:var(--font-jakarta)] !m-0 text-center !text-[26px] font-extrabold !leading-[1.18] !tracking-[-0.035em] sm:!text-[32px] lg:!text-[36px] ${
          dark ? "!text-white" : "text-[#091127]"
        }`}
      >
        {title}
      </h2>

      {/* SUBTITLE */}
      <p
        className={`!m-0 !mt-3 max-w-[690px] text-center !text-sm !leading-7 sm:!text-base ${
          dark ? "!text-white/70" : "!text-[#5d7192]"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}
