import SectionHeader from "@/components/global-capabilities/SectionHeader";

const canProduce = [
  { label: "A planning decision", detail: "your program owns and can revisit." },
  {
    label: "A documented question",
    detail: "with the authority that owns its answer.",
  },
  { label: "An owner assignment", detail: "for an unresolved item." },
  {
    label: "A source-verification task",
    detail: "routed to the specialist destination.",
  },
];

export default function PhaseOutputRuleSection() {
  return (
    <section className="w-full bg-white py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Phase output rule"
          title={
            <>
              Four things a phase can produce, six it{" "}
              <br className="hidden lg:inline" />
              cannot.
            </>
          }
          subtitle="The distinction is between a program decision and a governed fact."
        />

        <div className="mt-8 grid w-full max-w-[1184px] grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2">
          {/* CAN PRODUCE */}
          <div className="flex flex-col gap-2 rounded-2xl border border-[#cfe0f7] bg-[#eaf2fe] px-6 pb-9 pt-6">
            <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-lg font-bold !leading-7 text-[#091127]">
              A phase can produce
            </h3>
            {canProduce.map((item) => (
              <p
                key={item.label}
                className="!m-0 pt-1 text-sm !leading-5 !text-[#5d7192]"
              >
                <strong className="font-bold">{item.label}</strong>{" "}
                {item.detail}
              </p>
            ))}
          </div>

          {/* CANNOT PRODUCE */}
          <div className="flex flex-col gap-2 rounded-2xl border border-[#dfe5ee] bg-white px-6 pb-9 pt-6 shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]">
            <h3 className="!font-[family-name:var(--font-jakarta)] !m-0 text-lg font-bold !leading-7 text-[#091127]">
              A phase cannot produce
            </h3>
            <p className="!m-0 text-sm !leading-5 !text-[#5d7192]">
              A tax or legal conclusion · a capability entitlement · an
              availability declaration · an FX rate · payment enablement · an
              implementation guarantee.
            </p>
            <p className="!m-0 pt-1 text-sm !leading-5 !text-[#5d7192]">
              <strong className="font-bold">
                Each belongs to a governed source, and completing a phase does
                not confer any of them.
              </strong>{" "}
              A finished checklist is a record of what your team decided and
              asked — not a record of what is true.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
