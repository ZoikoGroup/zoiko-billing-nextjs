import {
  DevelopersAuthHeroSection,
  FourLayerAccessModelSection,
  ChooseAccessPathSection,
  AccessSetupJourneySection,
  CredentialLifecycleSection,
  PermissionsLeastPrivilegeSection,
  EnvironmentBoundariesAuthSection,
  SecretHandlingDeveloperSafetySection,
  CredentialManagementUiContractSection,
  RequestAuthPresentationSection,
  MachineServiceIdentitySection,
  HighRiskReauthenticationSection,
  ErrorsRecoveryAuthSection,
  AuditEvidenceAccessReviewSection,
  EnterpriseSecurityProcurementSection,
  FiveDestinationsNextStepsSection,
  AuthenticationFaqSection,
  DeveloperAuthFinalCtaSection,
} from "@/components/developers-authentication";

export const metadata = {
  title: "Developers Authentication | Zoiko Billing",
  description:
    "Set up verified access, keep credentials protected, separate authentication from permissions, and understand how access changes are reviewed across Zoiko Billing.",
};

export default function DevelopersAuthenticationPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
      <DevelopersAuthHeroSection />
      <FourLayerAccessModelSection />
      <ChooseAccessPathSection />
      <AccessSetupJourneySection />
      <CredentialLifecycleSection />
      <PermissionsLeastPrivilegeSection />
      <EnvironmentBoundariesAuthSection />
      <SecretHandlingDeveloperSafetySection />
      <CredentialManagementUiContractSection />
      <RequestAuthPresentationSection />
      <MachineServiceIdentitySection />
      <HighRiskReauthenticationSection />
      <ErrorsRecoveryAuthSection />
      <AuditEvidenceAccessReviewSection />
      <EnterpriseSecurityProcurementSection />
      <FiveDestinationsNextStepsSection />
      <AuthenticationFaqSection />
      <DeveloperAuthFinalCtaSection />
    </main>
  );
}
