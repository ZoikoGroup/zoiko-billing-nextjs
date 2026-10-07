import {
  ChangeDeprecationMigration,
  IntegrationLifecycleGateModel,
  IntegrationReadinessChecklist,
  IntegrationStandards,
  IntegrationStandardsFAQ,
  IntegrationStandardsModel,
  RelatedZoikoBillingNavigation,
  SourceBoundary,
} from "@/components/integrations-standards";

export default function Page() {
  return (
    <main>
      <IntegrationStandards />
      <IntegrationStandardsModel />
      <IntegrationLifecycleGateModel />
      <IntegrationReadinessChecklist />
      <ChangeDeprecationMigration />
      <SourceBoundary />
      <RelatedZoikoBillingNavigation />
      <IntegrationStandardsFAQ />
    </main>
  );
}