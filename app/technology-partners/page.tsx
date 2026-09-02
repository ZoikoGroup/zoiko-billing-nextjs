import { Inter, Plus_Jakarta_Sans } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
});

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
