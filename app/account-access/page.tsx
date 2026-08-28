import {
  AbuseControl,
  AccountAccess,
  DataRules,
  FormInput,
  IdentityStages,
  IndexPolicy,
  MethodRender,
  SupportHandoff,
} from "@/components/account-access";

export default function AccountAccessPage() {
  return (
    <main>
      <AccountAccess />
      <IdentityStages />
      <MethodRender />
      <FormInput />
      <AbuseControl />
      <DataRules />
      <SupportHandoff />
      <IndexPolicy />
    </main>
  );
}