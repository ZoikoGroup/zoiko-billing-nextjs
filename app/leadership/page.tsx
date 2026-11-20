import React from "react";
import { inter, plusJakartaSans } from "@/styles/fonts";

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