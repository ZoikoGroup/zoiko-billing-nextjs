import AuditabilityPrinciples from '@/components/strengthen-auditability/AuditabilityPrinciples'
import CorrectionSupersessionHistory from '@/components/strengthen-auditability/CorrectionSupersessionHistory'
import EvidenceMapArchitecture from '@/components/strengthen-auditability/EvidenceMapArchitecture'
import IllustrativeReviewTimeline from '@/components/strengthen-auditability/IllustrativeReviewTimeline'
import ReviewStates from '@/components/strengthen-auditability/ReviewStates'
import ReviewWorkflow from '@/components/strengthen-auditability/ReviewWorkflow'
import RolesResponsibilities from '@/components/strengthen-auditability/RolesResponsibilities'
import StrengthenAuditability from '@/components/strengthen-auditability/StrengthenAuditability'
import StrengthenAuditabilityFAQ from '@/components/strengthen-auditability/StrengthenAuditabilityFAQ'
import WhatThisPageCannotTellYou from '@/components/strengthen-auditability/WhatThisPageCannotTellYou'
import React from 'react'

export default function page() {
  return (
    <main>
        <StrengthenAuditability />
        <AuditabilityPrinciples />
        <EvidenceMapArchitecture />
        <IllustrativeReviewTimeline />
        <ReviewWorkflow />
        <CorrectionSupersessionHistory />
        <ReviewStates />
        <RolesResponsibilities />
        <WhatThisPageCannotTellYou />
        <StrengthenAuditabilityFAQ />
    </main>
  )
}
