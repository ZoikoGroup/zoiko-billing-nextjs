import BillingBasis from '@/components/saas-and-digital-services/BillingBasis'
import BillingLifecycle from '@/components/saas-and-digital-services/BillingLifecycle'
import BillingReadiness from '@/components/saas-and-digital-services/BillingReadiness'
import BoundaryModel from '@/components/saas-and-digital-services/BoundaryModel'
import CustomerServiceContext from '@/components/saas-and-digital-services/CustomerServiceContext'
import DigitalServicePortfolio from '@/components/saas-and-digital-services/DigitalServicePortfolio'
import FeeAdjustments from '@/components/saas-and-digital-services/FeeAdjustments'
import InvoiceDelivery from '@/components/saas-and-digital-services/InvoiceDelivery'
import ReminderChecks from '@/components/saas-and-digital-services/ReminderChecks'
import RoleMatrix from '@/components/saas-and-digital-services/RoleMatrix'
import SaasHero from '@/components/saas-and-digital-services/SaasHero'
import WorkQueue from '@/components/saas-and-digital-services/WorkQueue'
import React from 'react'

export default function page() {
  return (
    <main>
    <SaasHero />
    <DigitalServicePortfolio />
    <BillingBasis />
    <CustomerServiceContext />
    <BillingReadiness />
    <BillingLifecycle />
    <FeeAdjustments />
    <BoundaryModel />
    <InvoiceDelivery />
    <ReminderChecks />
    <WorkQueue />
    <RoleMatrix />
    </main>
  )
}
