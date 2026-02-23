import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const features = [
  { title: 'AI Planning', copy: 'Generate focused sessions based on your goals and availability.' },
  { title: 'Task Tracking', copy: 'Break down big goals into daily study actions with priorities.' },
  { title: 'Smart Scheduling', copy: 'Map your weekly availability into realistic study blocks.' },
];

const LandingPage = () => (
  <div>
    <Navbar />
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-gradient-to-br from-sky to-meteor p-10 shadow-soft">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-planetary">Acadia 2.0</p>
        <h1 className="mb-4 text-4xl font-extrabold text-galaxy md:text-6xl">Plan smarter. Study better.</h1>
        <p className="mb-7 max-w-2xl text-galaxy/80">Acadia helps you turn your syllabus into a calm, strategic weekly routine with tasks, subjects, and AI-ready study plans.</p>
        <Link to="/dashboard"><Button>Go to Dashboard</Button></Link>
      </motion.div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-24 md:grid-cols-3 md:px-8">
      {features.map((feature) => (
        <Card key={feature.title} className="bg-white">
          <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
          <p className="text-sm text-galaxy/70">{feature.copy}</p>
        </Card>
      ))}
    </section>
  </div>
);

export default LandingPage;
