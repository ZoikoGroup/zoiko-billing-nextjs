import {
  AuthorityBoundary,
  BeforeYouContactSupport,
  Channel,
  ContactSupport,
  ContactSupportFAQ,
  RequestLifecycle,
  SensitiveData,
  Wizard,
} from "@/components/contact-support";

export default function Page() {
  return (
    <main>
      <ContactSupport />
      <AuthorityBoundary />
      <Wizard />
      <SensitiveData />
      <Channel />
      <RequestLifecycle />
      <BeforeYouContactSupport />
      <ContactSupportFAQ />
    </main>
  );
}
