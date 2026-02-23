import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { usePlanner } from '../context/PlannerContext';

const PageShell = ({ title, children }) => {
  const { toast } = usePlanner();

  return (
<<<<<<< HEAD
    <div>
=======
    <div className="min-h-screen">
>>>>>>> 2479a425990af9512bf80c70986c3391839992b2
      <Navbar />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-6 lg:grid-cols-[auto_1fr] lg:px-8">
        <Sidebar />
        <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pb-20 lg:pb-0">
<<<<<<< HEAD
          <h1 className="mb-5 text-3xl font-bold text-galaxy">{title}</h1>
=======
          <div className="mb-6 rounded-3xl bg-gradient-to-r from-galaxy to-planetary p-6 text-white shadow-soft">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-venus">Acadia Workspace</p>
            <h1 className="text-3xl font-bold">{title}</h1>
          </div>
>>>>>>> 2479a425990af9512bf80c70986c3391839992b2
          {children}
        </motion.main>
      </div>
      {toast && <div className="fixed right-4 top-20 rounded-xl bg-planetary px-4 py-2 text-sm text-white shadow-soft">{toast}</div>}
    </div>
  );
};

export default PageShell;
