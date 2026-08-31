import React from 'react'

import {
  AttachmentRules,
  AuthorityBoundary,
  BillingSupportFAQ,
  FinancialData,
  HelpCenter,
  IdentityStates,
  ProgressiveIntake,
  SpecialistHandoffs,
} from '@/components/help-center'

export default function Page() {
  return (
    <main>
      <HelpCenter />
      <AuthorityBoundary />
      <ProgressiveIntake />
      <FinancialData />
      <IdentityStates />
      <AttachmentRules />
      <SpecialistHandoffs />
      <BillingSupportFAQ />
    </main>
  )
}