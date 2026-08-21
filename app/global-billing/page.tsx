import BillingCta from '@/components/global-billing/BillingCta'
import BillingFaq from '@/components/global-billing/BillingFaq'
import BillingLayers from '@/components/global-billing/BillingLayers'
import Boundaries from '@/components/global-billing/Boundaries'
import ChangeEvidence from '@/components/global-billing/ChangeEvidence'
import CrossBorder from '@/components/global-billing/CrossBorder'
import CurrencyContexts from '@/components/global-billing/CurrencyContexts'
import EntityControls from '@/components/global-billing/EntityControls'
import GlobalBilling from '@/components/global-billing/GlobalBilling'
import Implementation from '@/components/global-billing/Implementation'
import LanguageSupport from '@/components/global-billing/LanguageSupport'
import LocalizedDocs from '@/components/global-billing/LocalizedDocs'
import MarketCheck from '@/components/global-billing/MarketCheck'
import MultiEntity from '@/components/global-billing/MultiEntity'
import SourceAuthority from '@/components/global-billing/SourceAuthority'
import React from 'react'

export default function page() {
  return (
    <main>
        <GlobalBilling />
        <BillingLayers />
        <MarketCheck />
        <CurrencyContexts />
        <MultiEntity />
        <LocalizedDocs />
        <EntityControls />
        <CrossBorder />
        <Boundaries />
        <SourceAuthority />
        <ChangeEvidence />
        <LanguageSupport />
        <Implementation />
        <BillingFaq />
        <BillingCta />
    </main>
  )
}
