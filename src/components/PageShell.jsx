import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { usePlanner } from '../context/PlannerContext';

const PageShell = ({ title, children }) => {
  const { toast } = usePlanner();

  return (
    <div>
      <Navbar />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-6 lg:grid-cols-[auto_1fr] lg:px-8">
        <Sidebar />
        <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pb-20 lg:pb-0">
          <h1 className="mb-5 text-3xl font-bold text-galaxy">{title}</h1>
          {children}
        </motion.main>
      </div>
      {toast && <div className="fixed right-4 top-20 rounded-xl bg-planetary px-4 py-2 text-sm text-white shadow-soft">{toast}</div>}
    </div>
  );
};

export default PageShell;
