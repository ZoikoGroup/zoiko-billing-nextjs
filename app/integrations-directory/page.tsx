import {
  CapabilityFlow,
  CompareFit,
  DetailProfile,
  DirectoryFaq,
  DirectoryTrustStandard,
  DiscoveryFilters,
  DiscoveryPaths,
  EvaluateCta,
  IntegrationsDirectory,
  ListingCards,
  RequestPaths,
  SecurityProfile,
  StatusAxes,
} from "@/components/integrations-directory";

export default function Page() {
  return (
    <main>
      <IntegrationsDirectory />
      <DirectoryTrustStandard />
      <DiscoveryFilters />
      <DiscoveryPaths />
      <ListingCards />
      <DetailProfile />
      <CapabilityFlow />
      <SecurityProfile />
      <StatusAxes />
      <CompareFit />
      <RequestPaths />
      <DirectoryFaq />
      <EvaluateCta />
    </main>
  );
}