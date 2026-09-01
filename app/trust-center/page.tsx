import {
  TrustCenter,
  TrustSecurityDestinations,
  EvidenceAccess,
  EvidenceCatalog,
  FrameworkMappingSemantics,
  EvidenceLifecycle,
  ScopeResolver,
  ControlledEvidenceAccess,
  SpecialistHandoffs,
  TrustFAQ,
} from "@/components/trust-center";

export default function Page() {
  return (
    <main>
      <TrustCenter />
      <TrustSecurityDestinations />
      <EvidenceAccess />
      <EvidenceCatalog />
      <FrameworkMappingSemantics />
      <EvidenceLifecycle />
      <ScopeResolver />
      <ControlledEvidenceAccess />
      <SpecialistHandoffs />
      <TrustFAQ />
    </main>
  );
}