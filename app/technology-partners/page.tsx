import { inter, plusJakartaSans } from "@/styles/fonts";

import {
  ChangeOffboarding,
  PartnerProfileTemplate,
  PartnersFAQ,
  PartnersHero,
  RelationshipVsIntegration,
  SupportOwnership,
  TwoSurfaces,
  WhereToGoNext,
} from "@/components/technology-partners";

export const metadata = {
  title: "Technology Partners | Zoiko Billing",
  description:
    "A directory of approved technology partner relationships, published with the scope that defines each one — not an endorsement and not an integration guarantee.",
};

export default function TechnologyPartnersPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <PartnersHero />
      <RelationshipVsIntegration />
      <PartnerProfileTemplate />
      <SupportOwnership />
      <ChangeOffboarding />
      <TwoSurfaces />
      <WhereToGoNext />
      <PartnersFAQ />
    </main>
  );
}
