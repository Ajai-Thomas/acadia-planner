import Card from '../components/Card';
import PageShell from '../components/PageShell';
import { usePlanner } from '../context/PlannerContext';

const StudyPlanPage = () => {
  const { subjects, availability } = usePlanner();
  const days = Object.keys(availability);

  return (
    <PageShell title="AI-Generated Study Plan (Ready)">
      <div className="grid gap-4 md:grid-cols-2">
        {days.map((day, index) => {
          const subject = subjects[index % subjects.length];
          const window = availability[day] || [];

          return (
            <Card key={day} className="bg-white">
              <p className="text-sm font-semibold uppercase tracking-wide text-planetary">{day}</p>
              <h3 className="mt-2 text-xl font-bold">{subject?.name || 'General Review'}</h3>
              <p className="mt-1 text-sm text-galaxy/70">{window[0]} - {window[1]}</p>
              <div className="mt-4 rounded-lg bg-sky p-3 text-sm text-galaxy">Suggested focus: concept recap + practice questions + active recall.</div>
            </Card>
          );
        })}
      </div>
    </PageShell>
  );
};

export default StudyPlanPage;
