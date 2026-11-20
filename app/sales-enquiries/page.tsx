import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  AfterSubmitting,
  DataHandling,
  EnquiriesFAQ,
  EnquiriesHero,
  EnquiryForm,
  EnquiryStates,
  ProofBeforeForm,
  SalesScope,
} from "@/components/sales-enquiries";

export const metadata = {
  title: "Sales Enquiries | Zoiko Billing",
  description:
    "Pricing, capability and assurance evidence are published and ungated. This page routes you there first, then takes a commercial enquiry with the minimum a conversation needs.",
};

export default function SalesEnquiriesPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <EnquiriesHero />
      <ProofBeforeForm />
      <SalesScope />
      <EnquiryForm />
      <EnquiryStates />
      <AfterSubmitting />
      <DataHandling />
      <EnquiriesFAQ />
    </main>
  );
}
