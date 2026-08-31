import {
  MonitoringAdvisories,
  PublicInformation,
  SecurityDomains,
  SecurityFAQ,
  SecurityOverview,
  SecurityStateVocabulary,
  SharedResponsibility,
  ThirdPartySecurity,
  TrustAndSecurityDestinations,
} from "@/components/security-overview";

export default function Page() {
  return (
    <main>
      <SecurityOverview />
      <TrustAndSecurityDestinations />
      <SecurityDomains />
      <PublicInformation />
      <SecurityStateVocabulary />
      <ThirdPartySecurity />
      <MonitoringAdvisories />
      <SharedResponsibility />
      <SecurityFAQ />
    </main>
  );
}