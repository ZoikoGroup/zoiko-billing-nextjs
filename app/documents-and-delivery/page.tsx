import {
  Channels,
  DeliveryFAQ,
  DeliveryModel,
  DeliveryNextStep,
  DeliveryPrinciples,
  DocumentsDelivery,
  GlobalRegulatoryContext,
  ReceivablesHandoff,
  Recipients,
  Recovery,
  ReleaseControl,
  Rendering,
  SecureAccess,
} from "@/components/documents-and-delivery";

export default function DocumentsAndDeliveryPage() {
  return (
    <main>
      <DocumentsDelivery />
      <DeliveryPrinciples />
      <DeliveryModel />
      <Rendering />
      <Recipients />
      <ReleaseControl />
      <Channels />
      <Recovery />
      <SecureAccess />
      <ReceivablesHandoff />
      <GlobalRegulatoryContext />
      <DeliveryFAQ />
      <DeliveryNextStep />
    </main>
  );
}