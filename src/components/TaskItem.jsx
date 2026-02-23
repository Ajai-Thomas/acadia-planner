import Button from './Button';

const TaskItem = ({ task, subjectName, onToggle }) => (
  <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-4">
    <div>
      <h4 className="font-semibold">{task.title}</h4>
      <p className="text-sm text-galaxy/70">{subjectName} • {task.deadline} • {task.duration} min • {task.priority}</p>
    </div>
    <Button variant={task.status === 'Done' ? 'secondary' : 'primary'} onClick={() => onToggle(task.id)}>
      {task.status}
    </Button>
  </div>
);

export default TaskItem;
