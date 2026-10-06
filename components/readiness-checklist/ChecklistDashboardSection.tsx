import Image from "next/image";
import MobileReadinessChecklistDashboard from "./MobileReadinessChecklistDashboard";

export default function ChecklistDashboardSection() {
  return (
    <section
      id="checklist-dashboard"
      className="w-full bg-[#f8faff] py-16 font-[family-name:var(--font-inter)] text-slate-900 sm:py-20 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* EYEBROW */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7890b2] sm:text-xs">
            Checklist Dashboard
          </span>
          <span className="h-0.5 w-6 bg-[#1D70F5]" />
        </div>

        {/* HEADING */}
        <h2 className="!font-[family-name:var(--font-jakarta)] !m-0 max-w-[800px] text-center !text-[30px] font-extrabold !leading-[1.18] !tracking-[-0.035em] text-[#091127] sm:!text-[38px] md:!text-[44px]">
          Five counts, never combined.
        </h2>

        {/* SUBTITLE */}
        <p className="!m-0 mt-3.5 max-w-[640px] text-center text-xs leading-relaxed text-[#5d7192] sm:text-sm md:text-base">
          Set any item&apos;s status below and these update.{" "}
          <strong className="font-semibold text-slate-800">
            No aggregate score is produced at any point.
          </strong>
        </p>

        {/* DESKTOP GLASSMORPHIC 3D DASHBOARD ILLUSTRATION (Unchanged for lg+) */}
        <div className="mt-10 hidden w-full max-w-[1240px] overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:mt-12 sm:rounded-[32px] md:mt-14 lg:block">
          <Image
            src="/images/readiness-checklist/rc2.png"
            alt="Checklist dashboard with five counts, never combined"
            width={1240}
            height={700}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1280px) 100vw, 1240px"
          />
        </div>

        {/* MOBILE INTERACTIVE DASHBOARD & DOMAIN 1 CHECKLIST (lg:hidden) */}
        <MobileReadinessChecklistDashboard />
      </div>
    </section>
  );
}
