const variants = {
  primary: 'bg-planetary text-white hover:bg-galaxy',
  secondary: 'bg-universe text-white hover:opacity-90',
  ghost: 'bg-white text-galaxy hover:bg-sky',
};

const Button = ({ children, className = '', variant = 'primary', ...props }) => (
  <button
    className={`rounded-xl px-4 py-2 text-sm font-semibold shadow-soft transition duration-200 ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
