import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  DependencyChain,
  LocalPaymentFAQ,
  LocalPaymentHero,
  OperatingContext,
  OperatingModel,
  PathWorkspace,
  ReadinessStates,
  RelatedNavigation,
  ResponsibilityZones,
  SensitiveDataBoundary,
  UncertaintyHandling,
} from "@/components/local-payment";

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
  title: "Local Payment | Zoiko Billing",
  description:
    "Govern local payment paths by their dependencies — market coverage, method availability, currency context, compliance review and technical readiness, each with its own owner.",
};

export default function LocalPaymentPage() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} font-[family-name:var(--font-inter)]`}
    >
      <LocalPaymentHero />
      <OperatingContext />
      <OperatingModel />
      <PathWorkspace />
      <DependencyChain />
      <ReadinessStates />
      <ResponsibilityZones />
      <SensitiveDataBoundary />
      <UncertaintyHandling />
      <RelatedNavigation />
      <LocalPaymentFAQ />
    </main>
  );
}
