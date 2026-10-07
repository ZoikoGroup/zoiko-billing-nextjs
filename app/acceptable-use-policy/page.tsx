import {
  AcceptableUsePolicy,
  AppealReconsideration,
  ApplicabilityDefinitionsInterpretation,
  InvestigationEnforcementRemediation,
  PolicyChangesVersioning,
  ProhibitedRestrictedUseTaxonomy,
  QuestionsAboutPolicy,
  RelatedLegalCorporateDocuments,
  ReportingSuspectedMisuse,
  SectionNavigatorFindability,
} from "@/components/acceptable-use-policy";

export default function Page() {
  return (
    <main>
      <AcceptableUsePolicy />
      <SectionNavigatorFindability />
      <ApplicabilityDefinitionsInterpretation />
      <ProhibitedRestrictedUseTaxonomy />
      <ReportingSuspectedMisuse />
      <InvestigationEnforcementRemediation />
      <AppealReconsideration />
      <PolicyChangesVersioning />
      <RelatedLegalCorporateDocuments />
      <QuestionsAboutPolicy />
    </main>
  );
}