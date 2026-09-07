import {
  DataProcessingAddendum,
  DataProcessingAddendumHero,
} from '@/components/data-processing-addendum';

export default function DataProcessingAddendumPage() {
  return (
    <main>
      <DataProcessingAddendumHero />
      <DataProcessingAddendum />
    </main>
  );
}