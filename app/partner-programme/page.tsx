import {
  ParticipationBoundaries,
  ParticipationElements,
  PartnerProgram,
  PartnerProgramFAQ,
  ProgramLifecycle,
  SecurityExpectations,
  WhatMakesPartner,
  WhereToGoNext,
  WhoMayBeAFit,
} from "@/components/partner-programme";

export default function Page() {
  return (
    <main>
      <PartnerProgram />
      <WhatMakesPartner />
      <WhoMayBeAFit />
      <ParticipationElements />
      <ParticipationBoundaries />
      <ProgramLifecycle />
      <SecurityExpectations />
      <WhereToGoNext />
      <PartnerProgramFAQ />
    </main>
  );
}