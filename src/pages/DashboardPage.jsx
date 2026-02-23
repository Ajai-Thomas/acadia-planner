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
        <Card className="bg-white"><p className="text-sm text-galaxy/70">Today's Tasks</p><h2 className="mt-2 text-3xl font-bold">{todayTasks.length}</h2></Card>
        <Card className="bg-white"><p className="text-sm text-galaxy/70">Upcoming Deadlines</p><h2 className="mt-2 text-3xl font-bold">{tasks.length}</h2></Card>
        <Card className="bg-white"><p className="text-sm text-galaxy/70">Study Time</p><h2 className="mt-2 text-3xl font-bold">{tasks.reduce((a, b) => a + b.duration, 0)} min</h2></Card>
        <Card className="bg-white"><p className="text-sm text-galaxy/70">Subjects</p><h2 className="mt-2 text-3xl font-bold">{subjects.length}</h2></Card>
      </div>

      <Card className="mt-4 bg-white">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Study Progress</h3>
          <Link to="/tasks"><Button variant="secondary">Quick Add Task</Button></Link>
        </div>
        <ProgressBar value={progress} />
        <p className="mt-2 text-sm text-galaxy/70">{progress}% complete</p>
      </Card>
    </PageShell>
  );
};

export default DashboardPage;
