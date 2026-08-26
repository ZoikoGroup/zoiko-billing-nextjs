import {
  AuthoritativeHandoffs,
  BillingGlossary,
  BrowseBillingTopics,
  BrowseByAudience,
  BrowseResourceTypes,
  CustomerStories,
  FeaturedResources,
  ProductUpdatesBoundary,
  ReportsInsights,
  ResourceCenterCTA,
  ResourceCenterFAQ,
  ResourceCenterHero,
  ResourceFinderContract,
  StartByGoal,
  TemplatesIntegrity,
  WebinarEventsState,
} from "@/components/resource-center";

export default function ResourceCenterPage() {
  return (
    <main className="w-full">
      <ResourceCenterHero />

      <ResourceFinderContract />

      <StartByGoal />

      <BrowseResourceTypes />

      <BrowseBillingTopics />

      <BrowseByAudience />

      <FeaturedResources />

      <TemplatesIntegrity />

      <BillingGlossary />

      <ReportsInsights />

      <CustomerStories />

      <WebinarEventsState />

      <ProductUpdatesBoundary />

      <AuthoritativeHandoffs />

      <ResourceCenterFAQ />

      <ResourceCenterCTA />
    </main>
  );
}