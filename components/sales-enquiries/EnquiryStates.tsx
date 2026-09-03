import { Section, SectionHeading, SectionImage } from "./shared";

export default function EnquiryStates() {
  return (
    <Section tone="dark">
      <SectionHeading
        dark
        eyebrow="Enquiry state contract"
        title={<>Eight states, and &ldquo;received&rdquo; is as far as this page goes.</>}
        intro="Nothing here discloses account, opportunity or CRM information, and no state promises a reply."
      />
      <SectionImage
        src="/images/sales-enquiries/enquiry-states.png"
        alt="An enquiry reaching a received state while account, opportunity and CRM records stay locked behind it"
        width={1186}
        height={595}
        framed={false}
      />
    </Section>
  );
}
