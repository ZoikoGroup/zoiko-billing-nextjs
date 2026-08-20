import {
  Contacts,
  Context,
  Cta,
  CustomerRecordAnatomy,
  CustomerRecords,
  Duplicates,
  Faq,
  Hierarchy,
  History,
  Integrations,
  Lifecycle,
  Privacy,
  Profile,
  Roles,
} from "@/components/customer-records";

export default function Page() {
  return (
    <main>
      <CustomerRecords />
      <CustomerRecordAnatomy />
      <Contacts />
      <Context />
      <Profile />
      <Hierarchy />
      <Lifecycle />
      <History />
      <Duplicates />
      <Integrations />
      <Roles />
      <Privacy />
      <Faq />
      <Cta />
    </main>
  );
}
