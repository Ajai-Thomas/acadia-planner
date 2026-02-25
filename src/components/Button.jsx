const variants = {
  primary: 'bg-neon text-black hover:brightness-110 shadow-[0_0_20px_rgba(204,255,0,0.2)]',
  secondary: 'bg-white text-black hover:bg-gray-200',
  ghost: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
};

const Button = ({ children, className = '', variant = 'primary', ...props }) => (
  <button
    className={`rounded-full px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;