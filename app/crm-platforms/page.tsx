import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  CrmPlatformsHeroSection,
  CrmBillingOperatingModelSection,
  FindCrmConnectionsSection,
  SupportedObjectsActionsDirectionSection,
  FieldLevelSourceAuthorityMappingSection,
  CustomerAccountContactMatchingSection,
  BillingStatusBackToCrmSection,
  LifecycleCreateUpdateCloseMergeSection,
  EventsWebhooksConflictResolutionSection,
  PrivacyConsentMarketingProfilingSection,
  CrmAuthenticationPermissionsSetupSection,
  MigrationChangeOperationalStatusSection,
  CrmDecisionGuideFaqSection,
  CrmPlatformsFinalCtaSection,
} from "@/components/crm-platforms";

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
  title: "CRM Platforms Integration | Zoiko Billing",
  description:
    "Connect customer and sales systems to Zoiko Billing without losing source authority. Evaluate approved CRM integrations by supported objects, actions, direction, field authority, authentication, and customer matching.",
};

export default function CrmPlatformsPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <CrmPlatformsHeroSection />
      <CrmBillingOperatingModelSection />
      <FindCrmConnectionsSection />
      <SupportedObjectsActionsDirectionSection />
      <FieldLevelSourceAuthorityMappingSection />
      <CustomerAccountContactMatchingSection />
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
