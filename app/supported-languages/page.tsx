import {
  AvailabilityFaq,
  CapabilityMatrix,
  DocumentReadiness,
  EvidenceHistory,
  FallbackRules,
  LanguageContext,
  LanguageDiscovery,
  PreferenceResolution,
  PrivacyConfig,
  RenderAccessibility,
  SupportedLanguages,
  SupportMatrix,
  SupportStatus,
  SurfaceCta,
  TranslationRules,
} from "@/components/supported-languages";

export default function Page() {
  return (
    <main>
      <SupportedLanguages />
      <SupportMatrix />
      <LanguageDiscovery />
      <SupportStatus />
      <CapabilityMatrix />
      <LanguageContext />
      <DocumentReadiness />
      <FallbackRules />
      <PreferenceResolution />
      <RenderAccessibility />
      <TranslationRules />
      <EvidenceHistory />
      <PrivacyConfig />
      <AvailabilityFaq />
      <SurfaceCta />
    </main>
  );
}