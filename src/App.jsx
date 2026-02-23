import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import AvailabilityPage from './pages/AvailabilityPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import StudyPlanPage from './pages/StudyPlanPage';
import SubjectsPage from './pages/SubjectsPage';
import TasksPage from './pages/TasksPage';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/availability" element={<AvailabilityPage />} />
        <Route path="/plan" element={<StudyPlanPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
