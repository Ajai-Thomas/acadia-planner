const variants = {
  primary: 'bg-planetary text-white hover:bg-galaxy',
  secondary: 'bg-universe text-white hover:brightness-95',
  ghost: 'bg-white/80 text-galaxy hover:bg-white',
};

const Button = ({ children, className = '', variant = 'primary', ...props }) => (
  <button
    className={`rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-soft transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
