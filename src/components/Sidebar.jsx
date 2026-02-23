import { NavLink } from 'react-router-dom';

const links = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/subjects', label: 'Subjects' },
  { path: '/tasks', label: 'Tasks' },
  { path: '/availability', label: 'Availability' },
  { path: '/plan', label: 'Study Plan' },
];

const Sidebar = () => (
  <>
    <aside className="glass-panel hidden w-56 rounded-3xl p-4 shadow-soft lg:block">
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-planetary">Navigate</p>
      {links.map((link) => (
        <NavLink key={link.path} to={link.path} className={({ isActive }) => `mb-1 block rounded-xl px-3 py-2 text-sm font-medium ${isActive ? 'bg-galaxy text-white' : 'text-galaxy/80 hover:bg-white/90'}`}>
          {link.label}
        </NavLink>
      ))}
    </aside>
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-universe/35 bg-sky/95 p-2 backdrop-blur lg:hidden">
      <div className="grid grid-cols-5 gap-1">
        {links.map((link) => (
          <NavLink key={link.path} to={link.path} className={({ isActive }) => `rounded-lg px-2 py-2 text-center text-xs ${isActive ? 'bg-galaxy text-white' : 'text-galaxy'}`}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  </>
);

export default Sidebar;
