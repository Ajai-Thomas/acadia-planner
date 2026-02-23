import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="sticky top-0 z-40 border-b border-white/40 bg-milkyway/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
      <Link to="/" className="text-xl font-bold text-planetary">Acadia</Link>
      <nav className="hidden gap-6 text-sm font-medium md:flex">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/subjects">Subjects</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/availability">Availability</Link>
        <Link to="/plan">Study Plan</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
