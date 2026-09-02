import Link from "next/link";

import { Section, SectionHeading, heading, linkClass } from "./shared";

export default function TwoRelationships() {
  return (
    <Section tone="tint" id="two-relationships">
      <SectionHeading
        eyebrow="Zoiko Billing and Zoiko One"
        title="Two relationships, described separately."
        intro="Group membership and suite membership are different things, and neither implies the other's characteristics."
      />

      <div className="flex w-full flex-col items-stretch gap-5 pt-5 lg:flex-row">
        {/* Group relationship — white card */}
        <div className="flex flex-col gap-2 rounded-2xl border border-[#E5EAF2] bg-white px-6 pb-9 pt-6 shadow-[0px_1px_2px_0px_rgba(15,23,42,0.04),0px_8px_24px_0px_rgba(15,23,42,0.05)] lg:flex-1">
          <h3
            className={`${heading} !mb-0 !font-bold !text-lg !leading-7 !text-[#0F172A]`}
          >
            Group relationship
          </h3>

          <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">
            Zoiko Billing is a product <b className="font-bold">within</b> Zoiko
            Group. This establishes corporate context — where the product sits
            organizationally and which destination owns group-level information.
          </p>

          <p className="!mb-0 pt-1.5 text-sm !leading-5 !text-[#5B6B85]">
            It establishes nothing about capability, pricing, entitlement or
            availability, and nothing about the contracting or employing entity.{" "}
            <b className="font-bold">
              Ownership structure and control relationships are not published here
            </b>{" "}
            beyond approved language.
          </p>
        </div>

        {/* Suite relationship — tinted card */}
        <div className="flex flex-col gap-1.5 rounded-2xl border border-[#D6E6FD] bg-[#E8F1FE] px-6 pb-9 pt-6 lg:flex-1">
          <h3
            className={`${heading} !mb-0 !font-bold !text-lg !leading-7 !text-[#0F172A]`}
          >
            Suite relationship
          </h3>

          <p className="!mb-0 text-sm !leading-5 !text-[#5B6B85]">
            Zoiko Billing is available standalone and as a component of{" "}
            <b className="font-bold">Zoiko One</b>. That is a deployment
            relationship, not a corporate one.
          </p>

          <p className="!mb-0 pt-1.5 text-sm !leading-5 !text-[#5B6B85]">
            <b className="font-bold">
              Capability, entitlement, pricing and availability may all differ
              between the two modes
            </b>
            , so each is evaluated on its own terms.{" "}
            <Link href="/zoiko-billing-plus-zoiko-one" className={linkClass}>
              Compare deployment options
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
