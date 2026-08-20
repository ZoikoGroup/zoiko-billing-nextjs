import Image from "next/image";

export default function ReminderChecks() {
  return (
    <section className="w-full bg-[#f7f7f7] px-4 py-12 sm:px-6 sm:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8">
        {/* Heading */}
        <div className="w-full max-w-[680px] pt-2 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-4 bg-blue-600/40" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Balances, reminders, payments &amp; reconciliation
            </span>

            <span className="h-px w-4 bg-blue-600/40" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.14]">
            Eight checks run before a reminder
            <br className="hidden sm:block" />
            goes out.
          </h2>

          <p className="mx-auto mt-5 max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
            Configured reminders are a billing workflow. They are not a
            dunning engine, collections orchestration or subscription-recovery
            automation.
          </p>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/saas-and-digital-services/reminder-checks.png"
            alt="Eight billing checks before a reminder is sent"
            width={1184}
            height={592}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1240px) 100vw, 1184px"
          />
        </div>
      </div>
    </section>
  );
}