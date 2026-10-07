import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import {
  AccountabilityByDomain,
  AuthorityBoundaries,
  CurrentLeadership,
  LeaderProfileTemplate,
  Leadership,
  LeadershipFAQ,
  ProfileLifecycle,
  RoleAuthorityClasses,
} from "@/components/leadership";

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
  title: "Leadership | Zoiko Billing",
  description:
    "Who is accountable, and for exactly what. Zoiko Billing leadership roster, roles, accountability domains and authority scopes.",
};

export default function Page() {
  return (
    <main
      className={`${inter.variable} ${plusJakartaSans.variable} min-h-screen w-full bg-white text-slate-900 font-[family-name:var(--font-inter)] antialiased`}
    >
      <Leadership />
      <CurrentLeadership />
      <RoleAuthorityClasses />
      <LeaderProfileTemplate />
      <AccountabilityByDomain />
      <ProfileLifecycle />
      <AuthorityBoundaries />
      <LeadershipFAQ />
    </main>
  );
}