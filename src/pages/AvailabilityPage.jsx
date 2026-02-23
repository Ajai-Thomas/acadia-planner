import PageShell from '../components/PageShell';
import TimeSlotGrid from '../components/TimeSlotGrid';
import { usePlanner } from '../context/PlannerContext';

const AvailabilityPage = () => {
  const { availability, setAvailability, notify } = usePlanner();

  const handleChange = (day, index, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: index === 0 ? [value, prev[day]?.[1] || ''] : [prev[day]?.[0] || '', value],
    }));
    notify('Availability updated');
  };

  return (
    <PageShell title="Weekly Availability Scheduler">
      <TimeSlotGrid availability={availability} onChange={handleChange} />
    </PageShell>
  );
};

export default AvailabilityPage;
