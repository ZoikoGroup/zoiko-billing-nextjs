import {
  DemoLibrary,
  DemoLibraryBrowse,
  DemoLibraryFAQ,
  DemoLifecycleContentGovernance,
  MediaTranscriptCaptions,
  RelatedZoikoBillingNavigation,
  TruthScopeCurrentnessPanel,
} from "@/components/demo-library";

export default function Page() {
  return (
    <main>
      <DemoLibrary />
      <DemoLibraryBrowse />
      <TruthScopeCurrentnessPanel />
      <DemoLifecycleContentGovernance />
      <MediaTranscriptCaptions />
      <RelatedZoikoBillingNavigation />
      <DemoLibraryFAQ />
    </main>
  );
}