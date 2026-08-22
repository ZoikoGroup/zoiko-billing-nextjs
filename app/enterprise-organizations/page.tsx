import AuditQuestions from '@/components/enterprise-organizations/AuditQuestions'
import BillingControl from '@/components/enterprise-organizations/BillingControl'
import BillingControlCta from '@/components/enterprise-organizations/BillingControlCta'
import BillingScale from '@/components/enterprise-organizations/BillingScale'
import EnterpriseHero from '@/components/enterprise-organizations/EnterpriseHero'
import EntityBoundaries from '@/components/enterprise-organizations/EntityBoundaries'
import GlobalAvailability from '@/components/enterprise-organizations/GlobalAvailability'
import IdentityStack from '@/components/enterprise-organizations/IdentityStack'
import ImplementationStages from '@/components/enterprise-organizations/ImplementationStages'
import IntegrationRoutes from '@/components/enterprise-organizations/IntegrationRoutes'
import OpModel from '@/components/enterprise-organizations/OpModel'
import PolicyGovernance from '@/components/enterprise-organizations/PolicyGovernance'
import ProcurementFaq from '@/components/enterprise-organizations/ProcurementFaq'
import SecurityGovernance from '@/components/enterprise-organizations/SecurityGovernance'
import WorkQueues from '@/components/enterprise-organizations/WorkQueues'
import React from 'react'

export default function page() {
  return (
    <main>
        <EnterpriseHero />
        <BillingControl />
        <OpModel />
        <EntityBoundaries />
        <IdentityStack />
        <PolicyGovernance />
        <IntegrationRoutes />
        <GlobalAvailability />
        <BillingScale />
        <WorkQueues />
        <AuditQuestions />
        <SecurityGovernance />
        <ImplementationStages />
        <ProcurementFaq />
        <BillingControlCta />
    </main>
  )
}
