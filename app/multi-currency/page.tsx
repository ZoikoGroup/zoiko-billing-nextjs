import AuditEvidence from '@/components/multi-currency/AuditEvidence'
import ConversionRules from '@/components/multi-currency/ConversionRules'
import CorrectionRules from '@/components/multi-currency/CorrectionRules'
import CurrencyContext from '@/components/multi-currency/CurrencyContext'
import CurrencyCta from '@/components/multi-currency/CurrencyCta'
import CurrencyFaq from '@/components/multi-currency/CurrencyFaq'
import CurrencyOps from '@/components/multi-currency/CurrencyOps'
import CurrencyRules from '@/components/multi-currency/CurrencyRules'
import CustomerPrefs from '@/components/multi-currency/CustomerPrefs'
import EntityCurrency from '@/components/multi-currency/EntityCurrency'
import FxRate from '@/components/multi-currency/FxRate'
import IntegrationTrust from '@/components/multi-currency/IntegrationTrust'
import InvoiceIntegrity from '@/components/multi-currency/InvoiceIntegrity'
import MultiCurrency from '@/components/multi-currency/MultiCurrency'
import PaymentFlow from '@/components/multi-currency/PaymentFlow'
import React from 'react'

export default function page() {
  return (
    <main>
        <MultiCurrency />
        <CurrencyContext />
        <CurrencyOps />
        <CurrencyRules />
        <InvoiceIntegrity />
        <FxRate />
        <ConversionRules />
        <PaymentFlow />
        <CorrectionRules />
        <EntityCurrency />
        <CustomerPrefs />
        <AuditEvidence />
        <IntegrationTrust />
        <CurrencyFaq />
        <CurrencyCta />
    </main>
  )
}
