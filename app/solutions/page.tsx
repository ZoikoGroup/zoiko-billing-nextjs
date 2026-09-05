import {
  AfterFit,
  CardComponentContract,
  DiscoveryLenses,
  EvidenceProofValidation,
  GuidedFindYourSolution,
  NeedToAuthorityHandoff,
  PublicationBlockers,
  RouteLifecyclePublication,
  Solutions,
  SolutionsFAQ,
} from "@/components/solutions";

export default function Page() {
  return (
    <main>
      <Solutions />
      <DiscoveryLenses />
      <CardComponentContract />
      <NeedToAuthorityHandoff />
      <GuidedFindYourSolution />
      <EvidenceProofValidation />
      <RouteLifecyclePublication />
      <PublicationBlockers />
      <AfterFit />
      <SolutionsFAQ />
    </main>
  );
}