import { Section, SectionHeading, SectionImage } from "./shared";

export default function EnquiryForm() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Sales enquiry"
        title="Ten fields, four required, attachments off."
        intro="A commercial form is where qualification questions accumulate. Each field here has to be justified by the routing process, not by what a CRM would like to store."
      />
      <SectionImage
        src="/images/sales-enquiries/enquiry-form.png"
        alt="A trimmed enquiry form with most qualification fields rejected before they reach the record"
        width={1186}
        height={595}
      />
    </Section>
  );
}
