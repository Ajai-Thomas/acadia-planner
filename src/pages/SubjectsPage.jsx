import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import PageShell from '../components/PageShell';
import SubjectCard from '../components/SubjectCard';
import { usePlanner } from '../context/PlannerContext';

const SubjectsPage = () => {
  const { subjects, addSubject } = usePlanner();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', difficulty: 'Medium', examDate: '' });

  const submit = (e) => {
    e.preventDefault();
    addSubject(form);
    setOpen(false);
    setForm({ name: '', difficulty: 'Medium', examDate: '' });
  };

  return (
    <PageShell title="Subjects Management">
      <div className="mb-4 flex justify-end">
        <Button onClick={() => setOpen(true)}>Add Subject</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => <SubjectCard key={subject.id} subject={subject} />)}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Add subject">
        <form onSubmit={submit} className="space-y-3">
          <input required placeholder="Subject name" className="w-full rounded-lg border border-sky px-3 py-2" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
          <select className="w-full rounded-lg border border-sky px-3 py-2" value={form.difficulty} onChange={(e) => setForm((p) => ({ ...p, difficulty: e.target.value }))}>
            <option>Low</option><option>Medium</option><option>High</option>
          </select>
          <input type="date" className="w-full rounded-lg border border-sky px-3 py-2" value={form.examDate} onChange={(e) => setForm((p) => ({ ...p, examDate: e.target.value }))} />
          <Button className="w-full" type="submit">Save</Button>
        </form>
      </Modal>
    </PageShell>
  );
};

export default SubjectsPage;
