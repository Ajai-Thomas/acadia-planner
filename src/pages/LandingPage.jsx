import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const features = [
  { title: 'AI Planning', copy: 'Generate focused sessions from deadlines, workload, and weekly availability.', tag: 'Smart' },
  { title: 'Task Tracking', copy: 'Capture study tasks quickly and monitor completion momentum day by day.', tag: 'Flow' },
  { title: 'Weekly Scheduling', copy: 'Map availability into realistic learning blocks without overloading your week.', tag: 'Calm' },
];

const LandingPage = () => (
  <div className="pt-24 bg-dark min-h-screen text-white">
    <Navbar />
    <section className="mx-auto max-w-7xl px-6 py-20 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter md:text-[120px]">
          Plan <span className="text-neon italic">Smarter</span><br />Study Better
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted">
          A minimalist command center for elite students. Focus on what matters, automate the rest.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link to="/dashboard">
            <button className="bg-neon text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(204,255,0,0.3)]">
              Open Dashboard
            </button>
          </Link>
        </div>
      </motion.div>
    </section>

    <section className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pb-32">
      {features.map((feature) => (
        <div key={feature.title} className="glass-panel p-10 flex flex-col items-center text-center border-white/5 bg-white/5 backdrop-blur-lg rounded-[2rem]">
          <div className="mb-6 h-12 w-12 rounded-full border border-neon flex items-center justify-center text-neon">
            ★
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{feature.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{feature.copy}</p>
        </div>
      ))}
    </section>
  </div>
);

export default LandingPage; // This line fixes the error in App.jsx