import {
  CrmPlatformsHeroSection,
  CrmBillingOperatingModelSection,
  FindCrmConnectionsSection,
  SupportedObjectsActionsDirectionSection,
  FieldLevelSourceAuthorityMappingSection,
  CustomerAccountContactMatchingSection,
  CommercialSalesContextIntoBillingSection,
  BillingStatusBackToCrmSection,
  LifecycleCreateUpdateCloseMergeSection,
  EventsWebhooksConflictResolutionSection,
  PrivacyConsentMarketingProfilingSection,
  CrmAuthenticationPermissionsSetupSection,
  MigrationChangeOperationalStatusSection,
  CrmDecisionGuideFaqSection,
  CrmPlatformsFinalCtaSection,
} from "@/components/crm-platforms";

export const metadata = {
  title: "CRM Platforms Integration | Zoiko Billing",
  description:
    "Connect customer and sales systems to Zoiko Billing without losing source authority. Evaluate approved CRM integrations by supported objects, actions, direction, field authority, authentication, and customer matching.",
};

export default function CrmPlatformsPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900 font-sans antialiased">
      <CrmPlatformsHeroSection />
      <CrmBillingOperatingModelSection />
      <FindCrmConnectionsSection />
      <SupportedObjectsActionsDirectionSection />
      <FieldLevelSourceAuthorityMappingSection />
      <CustomerAccountContactMatchingSection />
      <CommercialSalesContextIntoBillingSection />
      <BillingStatusBackToCrmSection />
      <LifecycleCreateUpdateCloseMergeSection />
      <EventsWebhooksConflictResolutionSection />
      <PrivacyConsentMarketingProfilingSection />
      <CrmAuthenticationPermissionsSetupSection />
      <MigrationChangeOperationalStatusSection />
      <CrmDecisionGuideFaqSection />
      <CrmPlatformsFinalCtaSection />
    </main>
  );
}
