import {
  BillingAuthority,
  BillingOne,
  CommercialFaq,
  ConnectCategories,
  ConnectChangeDisconnectLifecycle,
  DataAuthority,
  HealthExceptionsRecovery,
  IdentityTenant,
  MappingFlow,
  ModelChoice,
  OperatingModel,
  Permissions,
  Security,
  Workflow,
} from "@/components/zoiko-billing-plus-zoiko-one";

export default function Page() {
  return (
    <main className="w-full">
      <BillingOne />
      <ModelChoice />
      <BillingAuthority />
      <ConnectCategories />
      <IdentityTenant />
      <DataAuthority />
      <MappingFlow />
      <Workflow />
      <Permissions />
      <HealthExceptionsRecovery />
      <ConnectChangeDisconnectLifecycle />
      <Security />
      <CommercialFaq />
      <OperatingModel />
    </main>
  );
}