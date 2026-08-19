import React from "react";

import {
  AnalyticsModel,
  Definitions,
  Evidence,
  GlobalContext,
  OperationalViews,
  ReportingAnalyticsPrinciples,
  ReportingAndAnalyticsHero,
  ReportingFAQ,
  ReportingNextStep,
  ReportsExports,
  SourcesHandoffs,
  TrustSecurity,
} from "@/components/reporting-and-analytics";

export default function Page() {
  return (
    <main>
      <ReportingAndAnalyticsHero />
      <ReportingAnalyticsPrinciples />
      <AnalyticsModel />
      <OperationalViews />
      <Definitions />
      <Evidence />
      <ReportsExports />
      <GlobalContext />
      <SourcesHandoffs />
      <TrustSecurity />
      <ReportingFAQ />
      <ReportingNextStep />
    </main>
  );
}