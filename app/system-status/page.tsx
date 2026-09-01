import {
  ComponentHealth,
  FailureStates,
  IncidentCommunication,
  OverallStatusAggregation,
  PlannedMaintenance,
  StateVocabulary,
  StatusAggregation,
  StatusFAQ,
  StatusFreshness,
} from "@/components/system-status";

export default function SystemStatusPage() {
  return (
    <main className="w-full">
      <OverallStatusAggregation />
      <StatusAggregation />
      <StatusFreshness />
      <StateVocabulary />
      <ComponentHealth />
      <IncidentCommunication />
      <PlannedMaintenance />
      <FailureStates />
      <StatusFAQ />
    </main>
  );
}