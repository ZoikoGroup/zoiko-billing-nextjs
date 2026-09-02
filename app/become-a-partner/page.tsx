import {
  AfterApplying,
  ApplicantStateContract,
  BecomeAPartner,
  BecomePartnerFAQ,
  BeforeYouApply,
  DataHandling,
  PartnerApplication,
  ProgramPathsFit,
} from "@/components/become-a-partner";

export default function Page() {
  return (
    <main>
      <BecomeAPartner />
      <ProgramPathsFit />
      <BeforeYouApply />
      <PartnerApplication />
      <ApplicantStateContract />
      <AfterApplying />
      <DataHandling />
      <BecomePartnerFAQ />
    </main>
  );
}