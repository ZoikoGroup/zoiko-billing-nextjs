import Link from "next/link";

import { Card, Section, SectionHeading, heading } from "./shared";

type Proof = {
  title: string;
  body: string;
  authority: string;
  href: string;
};

// Authorities with no route in this app stay as "#" rather than pointing at a
// page that only sounds similar.
const PROOFS: Proof[] = [
  {
    title: "Pricing & plans",
    body: "Price, packaging and what a plan includes — published, not quoted on request.",
    authority: "Pricing authority",
    href: "/pricing-and-plans",
  },
  {
    title: "What the product does",
    body: "Capability truth, current and versioned. A sales conversation cannot make it different.",
    authority: "Documentation",
    href: "/documentation",
  },
  {
    title: "Assurance evidence",
    body: "What evidence exists, what it covers, and how access works — with its scope attached.",
    authority: "Trust Center",
    href: "/trust-center",
  },
  {
    title: "Jurisdiction availability",
    body: "Currencies, languages and where capabilities are available.",
    authority: "Global Billing",
    href: "/global-billing",
  },
  {
    title: "Provider & system support",
    body: "Which integrations exist, by provider and jurisdiction.",
    authority: "Integrations",
    href: "/integrations-directory",
  },
  {
    title: "Design reasoning",
    body: 'Decision criteria and fit — including a "not promised" state for requirements the product does not meet.',
    authority: "Why Zoiko Billing",
    href: "/why-zoiko-billing",
  },
];

export default function ProofBeforeForm() {
  return (
    <Section tone="tint" id="proof-before-form">
      <SectionHeading
        eyebrow="Proof before form"
        title="Six things you can check without talking to us."
        intro="A sales page that gates the basics behind a form makes the buyer pay for information with their contact details. All of this is public."
      />

      <div className="grid w-full grid-cols-1 gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROOFS.map(({ title, body, authority, href }) => (
          <Card key={title} className="flex flex-col gap-1.5 !p-4">
            <h3
              className={`${heading} !mb-0 !font-bold !text-sm !leading-6 !text-[#0F172A]`}
            >
              {title}
            </h3>
            <p className="!mb-0 text-xs !leading-5 !text-[#5B6B85]">{body}</p>
            <Link
              href={href}
              className="mt-auto pt-1.5 text-xs font-bold uppercase !leading-4 tracking-wide !text-[#8494AC] transition-colors hover:!text-[#1F6FEB]"
            >
              {authority}
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
