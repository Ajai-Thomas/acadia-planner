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
        <Card className="bg-white/5 border-white/10">
          <p className="text-sm text-muted font-medium uppercase tracking-wider">Today's Tasks</p>
          <h2 className="mt-2 text-4xl font-black text-white">{todayTasks.length}</h2>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <p className="text-sm text-muted font-medium uppercase tracking-wider">Upcoming Deadlines</p>
          <h2 className="mt-2 text-4xl font-black text-white">{tasks.length}</h2>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <p className="text-sm text-muted font-medium uppercase tracking-wider">Study Time</p>
          <h2 className="mt-2 text-4xl font-black text-white">{tasks.reduce((a, b) => a + b.duration, 0)} min</h2>
        </Card>
        <Card className="bg-white/5 border-white/10">
          <p className="text-sm text-muted font-medium uppercase tracking-wider">Subjects</p>
          <h2 className="mt-2 text-4xl font-black text-white">{subjects.length}</h2>
        </Card>
      </div>

      <Card className="mt-6 bg-white/5 border-white/10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-white">Study Progress</h3>
            <p className="text-sm text-muted">Overall completion across all tasks</p>
          </div>
          <Link to="/tasks">
            <Button variant="primary">Quick Add Task</Button>
          </Link>
        </div>
        <ProgressBar value={progress} />
        <p className="mt-4 text-sm text-neon font-bold tracking-widest uppercase">{progress}% complete</p>
      </Card>
    </PageShell>
  );
};

export default DashboardPage;