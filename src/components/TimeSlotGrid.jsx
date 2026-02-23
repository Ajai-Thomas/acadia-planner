import Card from './Card';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const TimeSlotGrid = ({ availability, onChange }) => (
  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
    {days.map((day) => (
      <Card key={day} className="bg-white">
        <h3 className="mb-3 text-lg font-semibold">{day}</h3>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="rounded-lg border border-sky px-3 py-2"
            type="time"
            value={availability[day]?.[0] || ''}
            onChange={(e) => onChange(day, 0, e.target.value)}
          />
          <input
            className="rounded-lg border border-sky px-3 py-2"
            type="time"
            value={availability[day]?.[1] || ''}
            onChange={(e) => onChange(day, 1, e.target.value)}
          />
        </div>
      </Card>
    ))}
  </div>
);

export default TimeSlotGrid;
