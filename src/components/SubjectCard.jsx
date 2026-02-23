import Card from './Card';
import ProgressBar from './ProgressBar';

const SubjectCard = ({ subject }) => (
  <Card className="bg-white">
    <div className="mb-3 flex items-center justify-between">
      <h3 className="text-lg font-semibold">{subject.name}</h3>
      <span className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-planetary">{subject.difficulty}</span>
    </div>
    <p className="mb-3 text-sm text-galaxy/70">Exam: {subject.examDate}</p>
    <ProgressBar value={subject.progress} />
    <p className="mt-2 text-sm">{subject.progress}% completed</p>
  </Card>
);

export default SubjectCard;
