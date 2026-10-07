import {
  FiveOwnerLenses,
  FoundersAndOwnersFaq,
  FoundersAndOwnersHero,
  GrowthComplexitySignals,
  GrowthReadinessFramework,
  OwnerBillingSnapshot,
  OwnershipEscalationMap,
  RecommendedOwnerReviewCadence,
  RiskExceptionLens,
  WhereEachAnswerLives,
} from "@/components/founders-and-owners";

export default function FoundersAndOwnersPage() {
  return (
    <main>
      <FoundersAndOwnersHero />
      <FiveOwnerLenses />
      <OwnerBillingSnapshot />
      <OwnershipEscalationMap />
      <GrowthComplexitySignals />
      <RecommendedOwnerReviewCadence />
      <RiskExceptionLens />
      <GrowthReadinessFramework />
      <WhereEachAnswerLives />
      <FoundersAndOwnersFaq />
    </main>
  );
}