import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Developers Authentication | Zoiko Billing",
  description:
    "Set up verified access, keep credentials protected, separate authentication from permissions, and understand how access changes are reviewed across Zoiko Billing.",
};

export default function DevelopersAuthenticationPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
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
