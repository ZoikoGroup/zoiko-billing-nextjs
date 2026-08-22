
import {
  BillingCta,
  BillingModel,
  Corrections,
  CreateIssue,
  CustRecords,
  DeliveryStates,
  FaqPricing,
  GrowthReady,
  Integrations,
  PaymentsBalance,
  Reporting,
  RoleControls,
  Schedules,
  SmallBiz,
} from "@/components/small-businesses";

export default function Page() {
  return (
    <main>
      <SmallBiz />
      <BillingModel />
      <CustRecords />
      <CreateIssue />
      <Schedules />
      <DeliveryStates />
      <PaymentsBalance />
      <Corrections />
      <RoleControls />
      <Reporting />
      <Integrations />
      <GrowthReady />
      <FaqPricing />
      <BillingCta />
    </main>
  );
}