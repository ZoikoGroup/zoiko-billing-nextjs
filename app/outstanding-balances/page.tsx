import React from "react";

import {
  ClosingBalance,
  NextStep,
  OutstandingBalances,
  OutstandingPosition,
  ReceivablesOperations,
} from "@/components/outstanding-balances";

export default function Page() {
  return (
    <main className="w-full">
      <OutstandingBalances />

      <OutstandingPosition />

      <NextStep />

      <ReceivablesOperations />

      <ClosingBalance />
    </main>
  );
}
