import {
  CoverageTruthModel,
  CurrentnessEvidenceSupersession,
  MarketCoverageDirectory,
  NoRecordUnknownDegradedBehavior,
  RecommendedCapabilityTaxonomy,
  RelatedGlobalBillingBoundaries,
  StatusVocabularyGovernance,
  SupportedCountries,
  SupportedCountriesFaq,
} from "@/components/supported-countries";

export default function Page() {
  return (
    <main>
      <SupportedCountries />
      <CoverageTruthModel />
      <RecommendedCapabilityTaxonomy />
      <MarketCoverageDirectory />
      <StatusVocabularyGovernance />
      <NoRecordUnknownDegradedBehavior />
      <CurrentnessEvidenceSupersession />
      <RelatedGlobalBillingBoundaries />
      <SupportedCountriesFaq />
    </main>
  );
}