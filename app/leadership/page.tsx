import React from "react";

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

export default function Page() {
  return (
    <main>
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