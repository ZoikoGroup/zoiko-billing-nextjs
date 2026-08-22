import BalanceContext from '@/components/finance-and-account-receivable/BalanceContext'
import EntityCurrency from '@/components/finance-and-account-receivable/EntityCurrency'
import FinanceAR from '@/components/finance-and-account-receivable/FinanceAR'
import FinanceArCta from '@/components/finance-and-account-receivable/FinanceArCta'
import FinanceFAQ from '@/components/finance-and-account-receivable/FinanceFAQ'
import FinanceModel from '@/components/finance-and-account-receivable/FinanceModel'
import InvoiceControl from '@/components/finance-and-account-receivable/InvoiceControl'
import RemindersExceptions from '@/components/finance-and-account-receivable/RemindersExceptions'
import ReportingAudit from '@/components/finance-and-account-receivable/ReportingAudit'
import RolesMatrix from '@/components/finance-and-account-receivable/RolesMatrix'
import SecurityBaseline from '@/components/finance-and-account-receivable/SecurityBaseline'
import React from 'react'

export default function page() {
  return (
    <main>
        <FinanceAR />
        <FinanceModel />
        <BalanceContext />
        <InvoiceControl />
        <RemindersExceptions />
        <RolesMatrix />
        <ReportingAudit />
        <EntityCurrency />
        <SecurityBaseline />
        <FinanceFAQ />
        <FinanceArCta />
    </main>
  )
}
