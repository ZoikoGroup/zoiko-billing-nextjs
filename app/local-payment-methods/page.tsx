import {
  IllustrativeMethodRegistry,
  LifecycleCurrentnessSupersession,
  LocalPaymentMethodModel,
  LocalPaymentMethods,
  LocalPaymentMethodsFaq,
  MethodFamilyOrientation,
  RelatedGlobalBillingNavigation,
  SystemsDataDependencyBoundary,
} from "@/components/local-payment-methods";

export default function Page() {
  return (
    <main>
      <LocalPaymentMethods />
      <LocalPaymentMethodModel />
      <IllustrativeMethodRegistry />
      <MethodFamilyOrientation />
      <LifecycleCurrentnessSupersession />
      <SystemsDataDependencyBoundary />
      <RelatedGlobalBillingNavigation />
      <LocalPaymentMethodsFaq />
    </main>
  );
}