
import BillingReadiness from '@/components/revenue-operations/BillingReadiness'
import BillingSchedules from '@/components/revenue-operations/BillingSchedules'
import ContextHandoff from '@/components/revenue-operations/ContextHandoff'
import InvoiceDelivery from '@/components/revenue-operations/InvoiceDelivery'
import RevenueCycleOperatingModel from '@/components/revenue-operations/RevenueCycleOperatingModel'
import RevenueOpsHero from '@/components/revenue-operations/RevenueOpsHero'
import React from 'react'

export default function page() {
  return (
    <main>
        <RevenueOpsHero />
        <RevenueCycleOperatingModel />
         <ContextHandoff />
         <BillingReadiness />
         <BillingSchedules />
         <InvoiceDelivery />
    </main>
  )
}
