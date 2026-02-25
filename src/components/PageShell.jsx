import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { usePlanner } from '../context/PlannerContext';

const PageShell = ({ title, children }) => {
  const { toast } = usePlanner();

  return (
    <div className="min-h-screen bg-dark pt-32">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-12 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-neon mb-2">Workspace</p>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-white">{title}</h1>
        </header>
        <motion.main 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="pb-20"
        >
          {children}
        </motion.main>
      </div>
      {toast && (
        <div className="fixed right-6 bottom-6 z-50 rounded-full bg-neon px-6 py-3 text-sm font-bold text-black shadow-2xl">
          {toast}
        </div>
      )}
    </div>
  );
};

export default PageShell; // Critical: Ensure this line exists