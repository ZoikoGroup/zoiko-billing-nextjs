import {
  AccessibilityDelivery,
  DocumentFieldAuthority,
  DocumentSurface,
  IntegrationAuthority,
  IssuerEntityContext,
  IssueTimeIntegrity,
  LocaleFormat,
  LocalizationGovernance,
  LocalizationModel,
  LocalizedDocs,
  LocalizedDocumentsFAQ,
  LocalizeRecord,
  SecurityQuality,
  TemplateVersion,
  TranslationSourceReview,
} from "@/components/localized-documents";

export default function Page() {
  return (
    <main className="w-full">
      <LocalizedDocs />
      <LocalizationModel />
      <DocumentSurface />
      <LocaleFormat />
      <TemplateVersion />
      <IssuerEntityContext />
      <TranslationSourceReview />
      <DocumentFieldAuthority />
      <IssueTimeIntegrity />
      <AccessibilityDelivery />
      <LocalizationGovernance />
      <IntegrationAuthority />
      <SecurityQuality />
      <LocalizedDocumentsFAQ />
      <LocalizeRecord />
    </main>
  );
}
