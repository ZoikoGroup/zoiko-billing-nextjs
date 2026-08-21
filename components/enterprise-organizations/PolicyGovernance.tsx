import Image from "next/image";

const governanceItems = [
  {
    title: "Policy",
    description:
      "— id, owner, version, effective date, scope, state and evidence.",
  },
  {
    title: "Workflow",
    description:
      "— trigger, prerequisites, actions, human decision points, failure behavior and owner.",
  },
  {
    title: "Approval rule",
    description:
      "— scope and required roles; thresholds only where authoritative.",
  },
  {
    title: "Change request",
    description:
      "— proposed change, impact, approver, effective date and state.",
  },
  {
    title: "Emergency override",
    description:
      "— only where a governed override exists, with reason, authority, expiry and history.",
  },
  {
    title: "Retirement",
    description:
      "— a superseded policy stays historic and the current version is unambiguous.",
  },
];

export default function PolicyGovernance() {
  return (
    <section className="w-full bg-[#F7F8FA] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 lg:gap-11">
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-14">
          {/* Left Content */}
          <div className="flex w-full flex-1 flex-col items-start gap-3.5 pt-2">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-blue-600 opacity-75" />

              <span className="text-xs font-bold uppercase leading-4 tracking-[0.18em] text-blue-600">
                Policy, workflow &amp; change governance
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-2xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-3xl sm:leading-9">
              Green does not survive a material change.
            </h2>

            {/* Description */}
            <p className="w-full max-w-[687px] text-sm font-normal leading-6 text-slate-600 sm:text-base sm:leading-7">
              Previously current evidence becomes Changed since verification
              when a material dependency changes. No enterprise control stays
              green because revalidation is inconvenient.
            </p>

            {/* List */}
            <div className="flex w-full flex-col pt-1.5">
              {governanceItems.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full items-start gap-3 py-2 sm:py-2.5"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-blue-600" />

                  <div className="flex w-full flex-col gap-0.5 sm:flex-row sm:items-start">
                    <span className="shrink-0 text-sm font-bold leading-6 text-slate-600 sm:mr-2">
                      {item.title}
                    </span>

                    <span className="text-sm font-normal leading-6 text-slate-600">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex-1 rounded-3xl bg-[#EEF0F3] p-3 sm:p-4">
            <div className="relative w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/enterprise-organizations/policy-governance.png"
                alt="Policy, workflow and change governance"
                width={548}
                height={536}
                className="h-auto min-h-[320px] w-full rounded-2xl object-cover sm:min-h-[420px] lg:min-h-[536px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}