import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence to the import
import Navbar from './Navbar';
import { usePlanner } from '../context/PlannerContext';

// Define a consistent transition preset for a "fluid" feel
const pageVariants = {
  initial: { opacity: 0, y: 10, filter: 'blur(10px)' },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    filter: 'blur(10px)',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  }
};

const PageShell = ({ title, children }) => {
  const { toast } = usePlanner();

  return (
    <div className="min-h-screen bg-dark pt-32 text-black">
      <Navbar />
      <motion.div 
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mx-auto max-w-7xl px-6"
      >
        <header className="mb-12 border-b border-white/10 pb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-neon mb-2">Workspace</p>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-white">{title}</h1>
        </header>
        <main className="pb-20">
          {children}
        </main>
      </motion.div>
      
      {/* Toast Notification with smooth slide-in */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed right-6 bottom-6 z-50 rounded-full bg-neon px-6 py-3 text-sm font-bold text-black shadow-2xl"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageShell;