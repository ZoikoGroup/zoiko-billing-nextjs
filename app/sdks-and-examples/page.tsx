import {
  AuthSafety,
  ChooseYourPath,
  ConfigGuide,
  DeveloperSDKs,
  DevJourneys,
  ErrorGuide,
  ExampleBlueprint,
  ExamplesCatalog,
  ImplFlow,
  InstallGuide,
  PatternIndex,
  ReadyGate,
  SandboxGuide,
  SDKCatalog,
  SdkCta,
  SdkFaq,
  SDKQuickStart,
  SDKRegistry,
  SupplyTrust,
  TrustPillars,
  VersionGuide,
  WebhookGuide,
} from "@/components/sdks-and-examples";

export default function Page() {
  return (
    <main className="w-full">
      <DeveloperSDKs />
      <ChooseYourPath />
      <SDKRegistry />
      <SDKCatalog />
      <SDKQuickStart />
      <ExamplesCatalog />
      <ExampleBlueprint />
      <InstallGuide />
      <AuthSafety />
      <ConfigGuide />
      <PatternIndex />
      <WebhookGuide />
      <ErrorGuide />
      <SandboxGuide />
      <VersionGuide />
      <SupplyTrust />
      <ReadyGate />
      <TrustPillars />
      <DevJourneys />
      <ImplFlow />
      <SdkFaq />
      <SdkCta />
    </main>
  );
}