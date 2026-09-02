import React from "react";

import {
  CandidateDataBoundary,
  CandidateTrust,
  CareersFAQ,
  CareersHero,
  OpenRoles,
  RoleDetailTemplate,
  RoleLifecycle,
  WorkContext,
} from "@/components/careers";

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <OpenRoles />
      <RoleDetailTemplate />
      <RoleLifecycle />
      <WorkContext />
      <CandidateTrust />
      <CandidateDataBoundary />
      <CareersFAQ />
    </main>
  );
}