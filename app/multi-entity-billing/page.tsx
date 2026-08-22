import {
  CurrencyContext,
  CustomerOwnership,
  EntityControlCta,
  EntityRegistry,
  EvidenceChange,
  GroupBoundaries,
  ImplementationFaq,
  IntegrationMapping,
  IssuerIdentity,
  MultiEntity,
  MultiEntityOperatingModel,
  Permissions,
  Receivables,
  ReportingBoundary,
  WorkflowBoundaries,
} from "@/components/multi-entity-billing";

export default function Page() {
  return (
    <main className="w-full">
      <MultiEntity />
      <MultiEntityOperatingModel />
      <EntityRegistry />
      <CustomerOwnership />
      <IssuerIdentity />
      <CurrencyContext />
      <Permissions />
      <WorkflowBoundaries />
      <Receivables />
      <GroupBoundaries />
      <ReportingBoundary />
      <IntegrationMapping />
      <EvidenceChange />
      <ImplementationFaq />
      <EntityControlCta />
    </main>
  );
}