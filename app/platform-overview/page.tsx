import {
  CapabilityBlocksSection,
  DarkBannerSection,
  DeploymentOptionsSection,
  DeploymentBoundarySection,
  IntegrationsSection,
  HowItWorksSection,
  HeroSection,
  FaqSection,
  OperatingModelSection,
  PlatformDestinationsSection,
  TrustAndControlSection,
} from '@/components/platform-overview';

export default function PlatformOverviewPage() {
  return (
    <>
      <HeroSection />
      <DeploymentOptionsSection />
      <PlatformDestinationsSection />
      <DarkBannerSection />
      <CapabilityBlocksSection />
      <DeploymentBoundarySection />
      <IntegrationsSection />
      <TrustAndControlSection />
      <HowItWorksSection />
      <FaqSection />
      <OperatingModelSection />
    </>
  );
}
