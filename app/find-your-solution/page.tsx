import {
  AnalyticsPrivacyConversion,
  ComparePaths,
  FindYourSolutionFaq,
  FindYourSolutionHero,
  GuidedPathFinder,
  RecommendationLogicContract,
  UIStatesRecovery,
} from "@/components/find-your-solution";

export default function Page() {
  return (
    <main>
      <FindYourSolutionHero />
      <GuidedPathFinder />
      <ComparePaths />
      <RecommendationLogicContract />
      <UIStatesRecovery />
      <AnalyticsPrivacyConversion />
      <FindYourSolutionFaq />
    </main>
  );
}