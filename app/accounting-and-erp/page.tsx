import {
  AccountingErp,
  AccountingFaq,
  CorrectionRecovery,
  DiscoveryControls,
  EntityBoundaries,
  HandoffStateCta,
  IntegrationAdmin,
  InvoiceHandoff,
  MappingContracts,
  ObjectActions,
  OperatingModel,
  OperationalStatus,
  PaymentSettlement,
  PostingStates,
  TransportFlow,
} from "@/components/accounting-and-erp";

export default function Page() {
  return (
    <main>
      <AccountingErp />
      <OperatingModel />
      <DiscoveryControls />
      <ObjectActions />
      <MappingContracts />
      <InvoiceHandoff />
      <PaymentSettlement />
      <PostingStates />
      <CorrectionRecovery />
      <TransportFlow />
      <EntityBoundaries />
      <IntegrationAdmin />
      <OperationalStatus />
      <AccountingFaq />
      <HandoffStateCta />
    </main>
  );
}