import {
  ConnectionLifecycle,
  Connections,
  ContextMapping,
  DataPurpose,
  DeploymentModes,
  Ecosystem,
  EcosystemCta,
  EcosystemFaq,
  EcosystemModel,
  EvidenceDisconnect,
  HandoffTypes,
  IdentityPermissions,
  SourceAuthority,
  TruthDimensions,
  WorkflowDecisions,
} from "@/components/ecosystem";

export default function Page() {
  return (
    <main>
      <Ecosystem />
      <EcosystemModel />
      <Connections />
      <HandoffTypes />
      <ContextMapping />
      <IdentityPermissions />
      <SourceAuthority />
      <WorkflowDecisions />
      <DeploymentModes />
      <DataPurpose />
      <TruthDimensions />
      <ConnectionLifecycle />
      <EvidenceDisconnect />
      <EcosystemFaq />
      <EcosystemCta />
    </main>
  );
}
