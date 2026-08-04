import { AccessLifecycleSection, AccessPrinciplesSection, ApprovalLifecycleSection, AuditAndEvidenceSection, BuildingBlocksSection, DelegationSection, FAQSection, MeaningfulReviewSection, NextStepSection, ResponsibilitiesSection, RolesAndApprovalsHero, ServiceIdentitiesSection } from "@/components/roles-and-approvals";

export default function page(){
    return(
        <main>
            <RolesAndApprovalsHero/>
            <AccessPrinciplesSection/>
            <BuildingBlocksSection/>
            <ResponsibilitiesSection/>
            <ApprovalLifecycleSection/>
            <MeaningfulReviewSection/>
            <DelegationSection/>
            <AccessLifecycleSection/>
            <ServiceIdentitiesSection/>
            <AuditAndEvidenceSection/>
            <FAQSection/>
            <NextStepSection/>
        </main>
    )
}