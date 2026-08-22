import {
  ARHandoff,
  BillingReadiness,
  BillingSchedules,
  ChangeControl,
  ContextHandoff,
  DeployBoundaries,
  InvoiceDelivery,
  OpReporting,
  RevenueCta,
  RevenueCycleOperatingModel,
  RevenueOpsHero,
  RevOpsFaq,
  RoleHandoff,
  WorkQueue,
} from "@/components/revenue-operations";

export default function Page() {
  return (
    <main>
      <RevenueOpsHero />
      <RevenueCycleOperatingModel />
      <ContextHandoff />
      <BillingReadiness />
      <BillingSchedules />
      <InvoiceDelivery />
      <ChangeControl />
      <ARHandoff />
      <WorkQueue />
      <RoleHandoff />
      <OpReporting />
      <DeployBoundaries />
      <RevOpsFaq />
      <RevenueCta />
    </main>
  );
}