import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import {
  ProductTourHeroSection,
  ProductTourScenesSection,
  ProductTourFieldsSection,
  RoleBasedTourVariantsSection,
  TourProgressVocabularySection,
  ProductTourRecapSection,
  ProductTourFaqSection,
  ProductTourFinalCtaSection,
  MobileProductTourDashboard,
} from "@/components/product-tour";

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
  title: "Product Tour | Zoiko Billing",
  description:
    "Seven chapters, each labelled with what it isn't. An interactive walkthrough of Zoiko Billing governed operating concepts.",
};

export default function ProductTourPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-[#f8faff] text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      {/* MOBILE-ONLY DASHBOARD (block lg:hidden) - Zero impact on desktop */}
      <MobileProductTourDashboard />

      {/* DESKTOP-ONLY HERO & SCENES (hidden lg:block) */}
      <ProductTourHeroSection />
      <ProductTourScenesSection />

      {/* SHARED RESPONSIVE SECTIONS (Untouched desktop styling) */}
      <ProductTourFieldsSection />
      <RoleBasedTourVariantsSection />
      <TourProgressVocabularySection />
      <ProductTourRecapSection />
      <ProductTourFaqSection />

      {/* FINAL BLUE CTA SECTION */}
      <ProductTourFinalCtaSection />
    </main>
  );
}
