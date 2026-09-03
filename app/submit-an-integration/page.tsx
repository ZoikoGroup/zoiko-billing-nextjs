import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  AfterSubmitting,
  DecisionLadder,
  ReadinessStates,
  SubmissionFAQ,
  SubmissionForm,
  SubmissionHero,
  SubmissionStates,
  WhatAReviewNeeds,
  WrongRoute,
} from "@/components/submit-an-integration";

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
  title: "Submit an Integration | Zoiko Billing",
  description:
    "Propose an integration for technical review with redacted evidence only — a route deliberately separate from partnership, publication and support.",
};

export default function SubmitAnIntegrationPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <SubmissionHero />
      <DecisionLadder />
      <ReadinessStates />
      <WhatAReviewNeeds />
      <SubmissionForm />
      <SubmissionStates />
      <AfterSubmitting />
      <WrongRoute />
      <SubmissionFAQ />
    </main>
  );
}
