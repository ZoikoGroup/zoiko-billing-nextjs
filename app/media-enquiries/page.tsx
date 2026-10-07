import {
  CompleteRequestIncludes,
  MediaEnquiries,
  MediaEnquiriesFaq,
  MediaEnquiry,
  MediaVsNonMediaRouting,
  PressAssetsMediaMaterial,
  PublicSourcesFirst,
  RelatedZoikoBillingNavigation,
  ResponseDeclineFollowUp,
} from "@/components/media-enquiries";

export default function MediaEnquiriesPage() {
  return (
    <main>
      <MediaEnquiries />
      <MediaVsNonMediaRouting />
      <PublicSourcesFirst />
      <MediaEnquiry />
      <CompleteRequestIncludes />
      <ResponseDeclineFollowUp />
      <PressAssetsMediaMaterial />
      <RelatedZoikoBillingNavigation />
      <MediaEnquiriesFaq />
    </main>
  );
}