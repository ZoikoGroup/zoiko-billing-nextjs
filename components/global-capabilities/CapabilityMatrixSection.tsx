import SectionHeader from "./SectionHeader";

interface CapabilityRow {
  capability: string;
  purpose: string;
  doNotInfer: string;
  availabilityTruth: string;
  // Emphasised cells carry the claims most often over-read.
  emphasisePurpose?: boolean;
  emphasiseInference?: boolean;
}

const capabilities: CapabilityRow[] = [
  {
    capability: "FX Management",
    purpose: "Govern rate, source and timing context when FX is relevant.",
    doNotInfer: "Live FX execution, rate, spread, banking or treasury.",
    availabilityTruth:
      "Governed FX/product source + Supported Countries where applicable",
  },
  {
    capability: "Currency Control",
    purpose: "Govern billing currency policy and configuration context.",
    doNotInfer:
      "That a price, payment or market exists just because a currency is configured.",
    availabilityTruth: "Currency-specific product source + coverage truth",
    emphasiseInference: true,
  },
  {
    capability: "Inter-Entity Billing",
    purpose: "Govern cross-entity billing relationship and charge context.",
    doNotInfer: "Transfer-pricing, tax, legal or settlement rules.",
    availabilityTruth: "Governed entity/billing source",
  },
  {
    capability: "Local Payment Methods",
    purpose: "Orient method-family availability and configuration.",
    doNotInfer: "Provider, rail or payment acceptance.",
    availabilityTruth: "Governed payment-method source + coverage truth",
  },
  {
    capability: "Local Payment",
    purpose: "Orient operating context for an approved local payment path.",
    doNotInfer: "Processing, acquiring, settlement or banking role.",
    availabilityTruth: "Governed payment product/source + coverage",
  },
  {
    capability: "Local Compliance",
    purpose: "Orient local requirement, evidence and currentness.",
    doNotInfer: "Automatic compliance or legal advice.",
    availabilityTruth: "Governed compliance sources",
  },
  {
    capability: "Tax Configuration",
    purpose: "Govern tax-related billing configuration and change control.",
    doNotInfer: "Tax determination, rates or filing.",
    availabilityTruth: "Governed tax/product sources",
  },
  {
    capability: "Indirect Tax",
    purpose: "Orient tax-domain context and decision inputs.",
    doNotInfer: "Taxability, rates or nexus result.",
    availabilityTruth: "Governed tax sources",
  },
  {
    capability: "Tax and Compliance",
    purpose: "Broad cross-domain tax and compliance routing.",
    doNotInfer: "Specialist truth duplicated here.",
    availabilityTruth: "Specialist source pages",
    emphasiseInference: true,
  },
  {
    capability: "Multi-Currency Pricing",
    purpose: "Govern price presentation across currencies.",
    doNotInfer: "Payment acceptance, FX, tax or market support.",
    availabilityTruth: "Commercial source + specialist availability",
  },
  {
    capability: "Supported Countries",
    purpose: "Owns capability-scoped market availability truth.",
    doNotInfer: "That everything is supported in a listed country.",
    availabilityTruth: "The coverage registry itself",
    emphasisePurpose: true,
    emphasiseInference: true,
  },
];

export default function CapabilityMatrixSection() {
  return (
    <section className="w-full bg-[#f5f7fb] py-14 font-[family-name:var(--font-inter)] sm:py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 sm:px-8 md:px-10 lg:px-14 xl:px-[100px]">
        <SectionHeader
          eyebrow="Capability matrix"
          title={
            <>
              Eleven capabilities, and the middle{" "}
              <br className="hidden lg:inline" />
              column is the useful one.
            </>
          }
          subtitle={
            <>
              Purpose tells you what a capability governs.{" "}
              <strong className="font-bold">
                &quot;Do not infer&quot; tells you what a reader concludes
                anyway
              </strong>
              , and availability truth names who actually owns the answer.
            </>
          }
        />

        {/* MOBILE & TABLET: one card per capability */}
        <div className="mt-8 grid w-full grid-cols-1 gap-3 sm:mt-10 md:grid-cols-2 lg:hidden">
          {capabilities.map((row) => (
            <div
              key={row.capability}
              className="overflow-hidden rounded-xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <h3 className="!m-0 bg-[#0b1b3c] px-4 py-2.5 text-sm font-bold !leading-5 !text-white">
                {row.capability}
              </h3>
              <dl className="!m-0 divide-y divide-[#edf0f4] text-xs leading-5">
                <div className="px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-wide text-[#7890b2]">
                    Purpose
                  </dt>
                  <dd
                    className={`!m-0 mt-0.5 text-[#5d7192] ${
                      row.emphasisePurpose ? "font-bold" : ""
                    }`}
                  >
                    {row.purpose}
                  </dd>
                </div>
                <div className="bg-[#fff8f6] px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-wide text-[#991b1b]/70">
                    Do not infer
                  </dt>
                  <dd
                    className={`!m-0 mt-0.5 text-[#991b1b] ${
                      row.emphasiseInference ? "font-bold" : ""
                    }`}
                  >
                    {row.doNotInfer}
                  </dd>
                </div>
                <div className="px-4 py-3">
                  <dt className="text-[10px] font-bold uppercase tracking-wide text-[#7890b2]">
                    Availability truth
                  </dt>
                  <dd className="!m-0 mt-0.5 text-[#5d7192]">
                    {row.availabilityTruth}
                  </dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {/* DESKTOP: full table */}
        <div className="mt-8 hidden w-full max-w-[1184px] overflow-x-auto rounded-2xl border border-[#dfe5ee] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.04)] sm:mt-10 lg:block">
          <table className="w-full min-w-[820px] border-collapse text-left">
            <thead>
              <tr className="bg-[#0b1b3c]">
                {["Capability", "Purpose", "Do not infer", "Availability truth"].map(
                  (heading, index, all) => (
                    <th
                      key={heading}
                      className={`px-3 py-2.5 text-[10px] font-bold uppercase leading-4 tracking-wide text-white ${
                        index < all.length - 1 ? "border-r border-white/15" : ""
                      } ${index === 0 || index === all.length - 1 ? "w-44" : ""}`}
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {capabilities.map((row) => (
                <tr
                  key={row.capability}
                  className="border-t border-[#edf0f4] align-top"
                >
                  <th
                    scope="row"
                    className="border-r border-[#edf0f4] bg-[#fafbfd] px-3 py-3 text-xs font-bold leading-5 text-[#091127]"
                  >
                    {row.capability}
                  </th>
                  <td
                    className={`border-r border-[#edf0f4] px-3 py-3 text-xs leading-5 text-[#5d7192] ${
                      row.emphasisePurpose ? "font-bold" : ""
                    }`}
                  >
                    {row.purpose}
                  </td>
                  <td
                    className={`border-r border-[#edf0f4] bg-[#fff8f6] px-3 py-3 text-xs leading-5 text-[#991b1b] ${
                      row.emphasiseInference ? "font-bold" : ""
                    }`}
                  >
                    {row.doNotInfer}
                  </td>
                  <td className="px-3 py-3 text-xs leading-5 text-[#5d7192]">
                    {row.availabilityTruth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
