import React from "react";

export default function IntegrationAuthority() {
  return (
    <section className="w-full bg-color-grey-97-4 px-6 py-12 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-5">
        {/* Header */}
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-3 pt-2">
          {/* Eyebrow */}
          <div className="flex w-full items-center justify-center gap-3">
            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />

            <span className="text-center text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Integrations, ERP, tax, Zoiko One &amp; source authority
            </span>

            <div className="h-px w-4 shrink-0 bg-color-azure-60 opacity-40" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl font-[1000] leading-9 text-color-azure-11-2 sm:text-4xl sm:leading-10">
            Imported does not mean approved.
          </h2>

          {/* Description */}
          <p className="max-w-[687px] text-center text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            Every connected domain has an allowed role and a localization
            authority rule that it cannot exceed.
          </p>
        </div>

        {/* Image */}
        <div className="w-full pt-1">
          <img
            src="/images/localized-documents/integration-authority.png"
            alt="Integrations, ERP, tax, Zoiko One and source authority"
            className="h-auto w-full rounded-2xl border border-color-grey-92-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)] shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04)]"
          />
        </div>
      </div>
    </section>
  );
}