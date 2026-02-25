import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import PageShell from '../components/PageShell';
import ProgressBar from '../components/ProgressBar';
import { usePlanner } from '../context/PlannerContext';

const DashboardPage = () => {
  const { tasks, subjects } = usePlanner();
  const todayTasks = tasks.slice(0, 3);
  const doneTasks = tasks.filter((task) => task.status === 'Done').length;
  const progress = tasks.length ? Math.round((doneTasks / tasks.length) * 100) : 0;

  return (
    <PageShell title="Dashboard Overview">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Changed to bg-white for visibility of black text */}
        <Card className="bg-white border-none shadow-xl">
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Today's Tasks</p>
          <h2 className="mt-2 text-4xl font-black text-black">{todayTasks.length}</h2>
        </Card>
        <Card className="bg-white border-none shadow-xl">
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Upcoming Deadlines</p>
          <h2 className="mt-2 text-4xl font-black text-black">{tasks.length}</h2>
        </Card>
        <Card className="bg-white border-none shadow-xl">
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Study Time</p>
          <h2 className="mt-2 text-4xl font-black text-black">{tasks.reduce((a, b) => a + b.duration, 0)} min</h2>
        </Card>
        <Card className="bg-white border-none shadow-xl">
          <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Subjects</p>
          <h2 className="mt-2 text-4xl font-black text-black">{subjects.length}</h2>
        </Card>
      </div>

      <Card className="mt-6 bg-white border-none shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-black">Study Progress</h3>
            <p className="text-sm text-gray-500">Overall completion across all tasks</p>
          </div>
          <Link to="/tasks">
            <Button variant="primary">Quick Add Task</Button>
          </Link>
        </div>
        <ProgressBar value={progress} />
        <p className="mt-4 text-sm text-black font-black tracking-widest uppercase">{progress}% complete</p>
      </Card>
    </PageShell>
  );
};

export default DashboardPage;