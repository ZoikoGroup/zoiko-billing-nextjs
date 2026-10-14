import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  GlobalCapabilitiesHeroSection,
  CapabilityMapSection,
  FindByNeedSection,
  CapabilityMatrixSection,
  AvailabilityStatesSection,
  ProofEvidenceSection,
  CrossCapabilityJourneysSection,
  GlobalCapabilitiesFaqSection,
} from "@/components/global-capabilities";

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
  title: "Global Capabilities Overview | Zoiko Billing",
  description:
    "Each Global Billing capability governs one thing and is routinely read as governing several. This page states what each one covers, what must not be inferred from it, and where its availability truth actually lives.",
};

export default function GlobalCapabilitiesOverviewPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <GlobalCapabilitiesHeroSection />
      <CapabilityMapSection />
      <FindByNeedSection />
      <CapabilityMatrixSection />
      <AvailabilityStatesSection />
      <ProofEvidenceSection />
      <CrossCapabilityJourneysSection />
      <GlobalCapabilitiesFaqSection />
    </main>
  );
}
