import { createContext, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { defaultAvailability, defaultSubjects, defaultTasks } from '../utils/defaultData';

const PlannerContext = createContext(null);

export const PlannerProvider = ({ children }) => {
  const [subjects, setSubjects] = useLocalStorage('acadia-subjects', defaultSubjects);
  const [tasks, setTasks] = useLocalStorage('acadia-tasks', defaultTasks);
  const [availability, setAvailability] = useLocalStorage('acadia-availability', defaultAvailability);
  const [toast, setToast] = useState('');

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 2200);
  };

  const addSubject = (subject) => {
    setSubjects((prev) => [{ id: crypto.randomUUID(), progress: 0, ...subject }, ...prev]);
    notify('Subject added');
  };

  const editSubject = (subjectId, patch) => {
    setSubjects((prev) => prev.map((item) => (item.id === subjectId ? { ...item, ...patch } : item)));
    notify('Subject updated');
  };

  const addTask = (task) => {
    setTasks((prev) => [{ id: crypto.randomUUID(), status: 'Pending', ...task }, ...prev]);
    notify('Task created');
  };

  const toggleTask = (taskId) => {
    setTasks((prev) => prev.map((item) => (item.id === taskId ? { ...item, status: item.status === 'Done' ? 'Pending' : 'Done' } : item)));
  };

  const value = useMemo(
    () => ({
      subjects,
      tasks,
      availability,
      toast,
      setAvailability,
      addSubject,
      editSubject,
      addTask,
      toggleTask,
      notify,
    }),
    [subjects, tasks, availability, toast],
  );

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>;
};

export const usePlanner = () => {
  const context = useContext(PlannerContext);
  if (!context) throw new Error('usePlanner must be used inside PlannerProvider');
  return context;
};
