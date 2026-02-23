import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const features = [
  { title: 'AI Planning', copy: 'Generate focused sessions from deadlines, workload, and weekly availability.', tag: 'Smart' },
  { title: 'Task Tracking', copy: 'Capture study tasks quickly and monitor completion momentum day by day.', tag: 'Flow' },
  { title: 'Weekly Scheduling', copy: 'Map availability into realistic learning blocks without overloading your week.', tag: 'Calm' },
];

const metrics = [
  ['Subjects', '12+'],
  ['Weekly Slots', '35'],
  ['Completion Lift', '42%'],
];

const LandingPage = () => (
  <div>
    <Navbar />
    <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-10 pt-12 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:pt-16">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] bg-gradient-to-br from-galaxy via-planetary to-universe p-8 text-white shadow-soft md:p-12">
        <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.17em]">Acadia 2.0</p>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">Plan smarter.<br />Study better.</h1>
        <p className="mb-7 max-w-2xl text-white/85">A calm command center for students who want a cleaner way to manage tasks, subjects, availability, and AI-ready study plans.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/dashboard"><Button className="bg-white text-galaxy hover:bg-meteor">Open Dashboard</Button></Link>
          <Link to="/plan"><Button variant="ghost" className="border border-white/40 bg-white/10 text-white hover:bg-white/20">View Study Plan</Button></Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel rounded-[2rem] p-6 shadow-soft">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.17em] text-planetary">Live Snapshot</p>
        <div className="space-y-3">
          {metrics.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3">
              <span className="text-sm text-galaxy/70">{label}</span>
              <span className="text-xl font-bold text-galaxy">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-planetary">Features</p>
          <h2 className="text-2xl font-bold text-galaxy md:text-3xl">Everything needed for deep study work</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-meteor/80">
            <p className="mb-3 inline-flex rounded-full bg-sky px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-planetary">{feature.tag}</p>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-sm text-galaxy/70">{feature.copy}</p>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

export default LandingPage;
