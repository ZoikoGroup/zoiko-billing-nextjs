import { inter, plusJakartaSans } from "@/styles/fonts";

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
