import {
  AlternativePaths,
  ApplicabilityCheck,
  CategoryNavigator,
  IntegrationsFAQ,
  IntegrationsHero,
  RecordAnatomy,
  RegistryDirectory,
  SetupLifecycle,
  SharedResponsibility,
  StatesMatrix,
  StatusModel,
} from '@/components/integrations'

export default function Page() {
  return (
    <main>
      <IntegrationsHero />
      <StatusModel />
      <CategoryNavigator />
      <RegistryDirectory />
      <RecordAnatomy />
      <ApplicabilityCheck />
      <SetupLifecycle />
      <SharedResponsibility />
      <StatesMatrix />
      <AlternativePaths />
      <IntegrationsFAQ />
    </main>
  )
}