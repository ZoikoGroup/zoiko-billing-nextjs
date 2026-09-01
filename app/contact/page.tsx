import {
  Contact,
  ContactFAQ,
  CorporateDetails,
  MinimumData,
  RoutingPrecedence,
  SubmissionStateMachine,
  WhatThisPageIsNot,
} from "@/components/contact";

export default function Page() {
  return (
    <main>
      <Contact />
      <RoutingPrecedence />
      <MinimumData />
      <SubmissionStateMachine />
      <WhatThisPageIsNot />
      <CorporateDetails />
      <ContactFAQ />
    </main>
  );
}