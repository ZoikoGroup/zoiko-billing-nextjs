import {
  BillingSchedulePatterns,
  BillingSchedulePrinciples,
  BillingSchedules,
  BillingSchedulesFAQ,
  BillingSchedulesNextStep,
  ChangeAndPause,
  DownstreamHandoff,
  DueRunLifecycle,
  MissedRuns,
  ScheduleModel,
  SourcesAndHandoffs,
  TimezoneAndCalendar,
  TrustPrivacySecurity,
} from "@/components/billing-schedules";

export default function Page() {
  return (
    <main>
      <BillingSchedules />
      <BillingSchedulePrinciples />
      <ScheduleModel />
      <BillingSchedulePatterns />
      <DueRunLifecycle />
      <MissedRuns />
      <ChangeAndPause />
      <DownstreamHandoff />
      <TimezoneAndCalendar />
      <SourcesAndHandoffs />
      <TrustPrivacySecurity />
      <BillingSchedulesFAQ />
      <BillingSchedulesNextStep />
    </main>
  );
}