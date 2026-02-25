import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-8 py-3 backdrop-blur-md">
      <Link to="/" className="text-xl font-black tracking-tighter text-white">
        ACADIA<span className="text-neon">.</span>
      </Link>
      <nav className="hidden items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] md:flex">
        {[
          ['Dashboard', '/dashboard'],
          ['Subjects', '/subjects'],
          ['Tasks', '/tasks'],
          ['Study Plan', '/plan'],
        ].map(([label, href]) => (
          <Link key={href} to={href} className="text-muted hover:text-neon transition-colors">
            {label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

export default Navbar;