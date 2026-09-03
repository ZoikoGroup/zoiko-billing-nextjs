import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});

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
