export const defaultSubjects = [
  { id: 'sub-1', name: 'Calculus', difficulty: 'High', examDate: '2026-03-20', progress: 42, color: 'bg-planetary' },
  { id: 'sub-2', name: 'Biology', difficulty: 'Medium', examDate: '2026-03-12', progress: 65, color: 'bg-universe' },
  { id: 'sub-3', name: 'World History', difficulty: 'Low', examDate: '2026-03-30', progress: 30, color: 'bg-venus' },
];

export const defaultTasks = [
  { id: 'task-1', title: 'Derivatives worksheet', subjectId: 'sub-1', deadline: '2026-02-26', duration: 90, priority: 'High', status: 'Pending' },
  { id: 'task-2', title: 'Cell structure notes', subjectId: 'sub-2', deadline: '2026-02-27', duration: 60, priority: 'Medium', status: 'Pending' },
  { id: 'task-3', title: 'WWII timeline review', subjectId: 'sub-3', deadline: '2026-03-01', duration: 45, priority: 'Done', status: 'Done' },
];

export const defaultAvailability = {
  Monday: ['09:00', '18:00'],
  Tuesday: ['14:00', '20:00'],
  Wednesday: ['10:00', '16:00'],
  Thursday: ['08:00', '12:00'],
  Friday: ['15:00', '19:00'],
  Saturday: ['10:00', '13:00'],
  Sunday: ['17:00', '20:00'],
};
