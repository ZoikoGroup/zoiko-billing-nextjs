import React from "react";

export default function IssueTimeIntegrity() {
  return (
    <section className="w-full bg-color-grey-97-4 px-6 py-12 sm:px-8 md:px-12 lg:px-20 xl:px-32 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-14">
        {/* Image */}
        <div className="w-full flex-1">
          <img
            src="/images/localized-documents/issue-time-integrity.png"
            alt="Issue-time integrity"
            className="h-auto w-full rounded-2xl border border-color-grey-92-4 shadow-[0px_8px_24px_0px_rgba(15,23,42,0.05)]"
          />
        </div>

        {/* Content */}
        <div className="w-full flex-1 pt-2">
          {/* Label */}
          <div className="mb-3 flex items-center gap-3.5">
            <div className="h-px w-6 bg-color-azure-52 opacity-75" />

            <span className="text-xs font-bold uppercase leading-4 tracking-widest text-color-azure-60">
              Issue-time integrity, corrections &amp; reproduction
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-2xl font-[1000] leading-8 text-color-azure-11-2 sm:text-3xl sm:leading-9">
            The snapshot is what makes it defensible.
          </h2>

          {/* Description */}
          <p className="mb-6 text-sm font-normal leading-6 text-color-azure-44-3 sm:text-base sm:leading-7">
            At issue, the system stores the template version, language, locale,
            resource-bundle version, controlled-text versions, render profile,
            issuer entity, currency and relevant rule references.
          </p>

          {/* Points */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-color-azure-52" />
              <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                <span className="font-bold">Issued output</span> — the rendered
                artifact, hash or reference is preserved per the document
                evidence architecture.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-color-azure-52" />
              <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                <span className="font-bold">Later template change</span> —
                affects eligible future documents only.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-color-azure-52" />
              <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                <span className="font-bold">Later translation change</span> —
                does not rewrite issued document evidence.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-color-azure-52" />
              <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                <span className="font-bold">Customer language change</span> —
                affects future eligible documents from the effective date,
                with history preserved.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-color-azure-52" />
              <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                <span className="font-bold">Correction</span> — a credit,
                reissue or corrected document follows the controlled workflow;
                there is no silent edit of an issued artifact.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-color-azure-52" />
              <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                <span className="font-bold">Reproduction</span> — historical
                documents are re-rendered only from the exact historical
                snapshot, or the stored issued artifact is served.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-xs bg-color-azure-52" />
              <p className="text-sm font-normal leading-6 text-color-azure-44-3">
                <span className="font-bold">Audit</span> — every
                localization-affecting change records source, actor, version,
                effective date, approval and affected surfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
