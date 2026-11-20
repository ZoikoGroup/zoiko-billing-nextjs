import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  WebinarEventsHeroSection,
  EventStateMachineSection,
  DateTimeZoneContractSection,
  BrowseByTopicAudienceSection,
  EventDetailTemplateSection,
  RegistrationAccessAuthoritySection,
  SpeakerSessionGovernanceSection,
  RescheduleCancellationWithdrawalSection,
  PostEventContentReviewSection,
  WebinarAuthoritativeHandoffsSection,
  WebinarEventsFaqSection,
  WebinarEventsFinalCtaSection,
} from "@/components/webinar-and-events";

export const metadata = {
  title: "Webinar & Events | Zoiko Billing",
  description:
    "Learn billing operations live, or on your own schedule. Explore approved Zoiko Billing webinars and events with current schedule, authoritative time zone, confirmed speakers, and on-demand availability.",
};

export default function WebinarEventsPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <WebinarEventsHeroSection />
      <EventStateMachineSection />
      <DateTimeZoneContractSection />
      <BrowseByTopicAudienceSection />
      <EventDetailTemplateSection />
      <RegistrationAccessAuthoritySection />
      <SpeakerSessionGovernanceSection />
      <RescheduleCancellationWithdrawalSection />
      <PostEventContentReviewSection />
      <WebinarAuthoritativeHandoffsSection />
      <WebinarEventsFaqSection />
      <WebinarEventsFinalCtaSection />
    </main>
  );
}
