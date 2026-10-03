import {
  AdjacentAnswers,
  BillingControlModel,
  BillingControlWorkspace,
  ControlMaturityDiagnostic,
  EvidenceChangeHistory,
  ExceptionManagementContract,
  RecommendedOperatingJourney,
  RolesResponsibilityArchitecture,
  StandardiseBillingControl,
  StandardiseBillingControlFAQ,
  UIStatesEdgeCases,
} from "@/components/standardise-billing-control";

export default function Page() {
  return (
    <main>
      <StandardiseBillingControl />
      <ControlMaturityDiagnostic />
      <BillingControlModel />
      <BillingControlWorkspace />
      <RecommendedOperatingJourney />
      <ExceptionManagementContract />
      <EvidenceChangeHistory />
      <UIStatesEdgeCases />
      <RolesResponsibilityArchitecture />
      <AdjacentAnswers />
      <StandardiseBillingControlFAQ />
    </main>
  );
}