import {
  AuthorityHandoffs,
  BrowseByAudience,
  BrowseByTemplateType,
  DocumentPdfIntegrityContract,
  ExampleAdviceBoundaries,
  FeaturedCurrentTemplates,
  HowToUseTemplateSafely,
  PreviewDownloadContract,
  StartByTask,
  TemplateCTA,
  TemplateDetailPage,
  TemplateFinderContract,
  TemplateLifecyclePublicStates,
  TemplatesFAQ,
  TemplatesHero,
} from "@/components/templates";

export default function TemplatesPage() {
  return (
    <main>
      <TemplatesHero />
      <TemplateFinderContract />
      <StartByTask />
      <BrowseByTemplateType />
      <BrowseByAudience />
      <FeaturedCurrentTemplates />
      <TemplateDetailPage />
      <PreviewDownloadContract />
      <DocumentPdfIntegrityContract />
      <HowToUseTemplateSafely />
      <ExampleAdviceBoundaries />
      <TemplateLifecyclePublicStates />
      <AuthorityHandoffs />
      <TemplatesFAQ />
      <TemplateCTA />
    </main>
  );
}