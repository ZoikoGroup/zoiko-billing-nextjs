import { Section, SectionHeading, SectionImage } from "./shared";

export default function AuthorityReview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Authority, review & change governance"
        title="Currency enablement as a reviewed decision, not a setting."
        intro={
          <>
            Generic responsibility categories —{" "}
            <strong className="font-bold">
              none is a verified product role or permission
            </strong>
            .
          </>
        }
      />

      <div className="w-full pt-2">
        <SectionImage
          src="/images/currency-control/authority-review.png"
          alt="Reviewers around a central approval record linking placeholder currencies to market locations"
          width={1232}
          height={640}
        />
      </div>
    </Section>
  );
}
