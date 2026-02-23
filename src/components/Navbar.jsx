import { Link } from 'react-router-dom';

const Navbar = () => (
<<<<<<< HEAD
  <header className="sticky top-0 z-40 border-b border-white/40 bg-milkyway/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
      <Link to="/" className="text-xl font-bold text-planetary">Acadia</Link>
      <nav className="hidden gap-6 text-sm font-medium md:flex">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/subjects">Subjects</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/availability">Availability</Link>
        <Link to="/plan">Study Plan</Link>
=======
  <header className="sticky top-0 z-40 border-b border-universe/25 bg-sky/80 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-galaxy">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-planetary text-sm text-white">A</span>
        Acadia
      </Link>
      <nav className="hidden items-center gap-2 text-sm md:flex">
        {[
          ['Dashboard', '/dashboard'],
          ['Subjects', '/subjects'],
          ['Tasks', '/tasks'],
          ['Availability', '/availability'],
          ['Study Plan', '/plan'],
        ].map(([label, href]) => (
          <Link key={href} to={href} className="rounded-xl px-3 py-2 font-medium text-galaxy/80 transition hover:bg-white/80 hover:text-galaxy">
            {label}
          </Link>
        ))}
>>>>>>> 2479a425990af9512bf80c70986c3391839992b2
      </nav>
    </div>
  </header>
);

export default Navbar;
