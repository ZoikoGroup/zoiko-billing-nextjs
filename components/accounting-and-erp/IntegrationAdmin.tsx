import Image from "next/image";

const items = [
  {
    title: "Authentication",
    description:
      '— the exact registered method, not a generic "secure connection" label.',
  },
  {
    title: "Credential owner",
    description:
      "— customer, target, Zoiko or partner responsibility stated explicitly.",
  },
  {
    title: "Scopes",
    description:
      "— least-necessary target permissions for the registered objects and actions.",
  },
  {
    title: "Technical admin",
    description:
      "— may configure connections and mappings per role, without approving accounting entries.",
  },
  {
    title: "Financial approver",
    description:
      "— a separate authority where target or customer policy requires it.",
  },
  {
    title: "Secret handling",
    description:
      "— an approved secret service; never in URLs, analytics, logs, screenshots or support notes.",
  },
  {
    title: "Mapping changes",
    description:
      "— versioned, impact-previewed and audited.",
  },
  {
    title: "Connection test",
    description:
      "— read-only or safe test where supported; no production write unless explicit.",
  },
];

export default function IntegrationAdmin() {
  return (
    <section className="w-full bg-[#f7f8fa]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-8 sm:gap-10 md:gap-11">
          {/* INTRO */}
          <div className="flex w-full max-w-[662px] flex-col items-center gap-3 pt-2 text-center">
            {/* EYEBROW */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />

              <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em] text-[#7890b2] sm:text-xs sm:tracking-[0.18em]">
                Authentication, permissions, setup &amp; security
              </span>

              <span className="h-px w-4 shrink-0 bg-[#7890b2] opacity-40" />
            </div>

            {/* HEADING */}
            <h2 className="!m-0 w-full max-w-[1000px] !text-[30px] !font-extrabold !leading-[1.2] !tracking-[-0.035em] !text-[#091127] sm:!text-[34px] md:!text-[36px] lg:!text-[40px]">
              An integration admin is not an accounting approver.
            </h2>

            {/* DESCRIPTION */}
            <p className="!m-0 w-full max-w-[687px] text-[15px] font-normal leading-7 text-[#5d7192] sm:text-base">
              A technically privileged administrator is not automatically the
              period-close owner, financial controller, or the authority to
              change accounting treatment.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,589px)] lg:items-start lg:gap-12">
            {/* RESPONSIBILITIES */}
            <div className="w-full overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="flex flex-col">
                {/* HEADER */}
                <div className="border-b border-[#dfe5ee] bg-[#fafbfc] px-5 py-3.5">
                  <span className="text-xs font-bold uppercase leading-4 tracking-wide text-[#7890b2]">
                    Administrative responsibilities
                  </span>
                </div>

                {items.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex w-full items-start gap-3 px-5 py-3.5 sm:gap-4 ${
                      index !== items.length - 1
                        ? "border-b border-[#edf0f4]"
                        : ""
                    }`}
                  >
                    {/* BULLET */}
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-blue-600" />

                    {/* TEXT */}
                    <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-start">
                      <span className="shrink-0 text-sm font-semibold leading-5 text-[#091127] sm:mr-1">
                        {item.title}
                      </span>

                      <span className="text-sm font-normal leading-5 text-[#5d7192]">
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative w-full">
              <div className="relative mx-auto w-full max-w-[589px] overflow-hidden rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
                <div className="relative aspect-[589/580] w-full">
                  <Image
                    src="/images/accounting-and-erp/admin.png"
                    alt="Integration administration and security controls"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 589px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE RESPONSIBILITY CARDS */}
          <div className="flex w-full flex-col gap-3 lg:hidden">
            {/* Intentionally empty: desktop responsibility card above remains responsive */}
          </div>
        </div>
      </div>
    </section>
  );
}