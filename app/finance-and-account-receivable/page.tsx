import React from "react";

import {
  BalanceContext,
  EntityCurrency,
  FinanceAR,
  FinanceArCta,
  FinanceFAQ,
  FinanceModel,
  InvoiceControl,
  RemindersExceptions,
  ReportingAudit,
  RolesMatrix,
  SecurityBaseline,
} from "@/components/finance-and-account-receivable";

export default function Page() {
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
  );
}