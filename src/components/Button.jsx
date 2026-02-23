const variants = {
  primary: 'bg-planetary text-white hover:bg-galaxy',
<<<<<<< HEAD
  secondary: 'bg-universe text-white hover:opacity-90',
  ghost: 'bg-white text-galaxy hover:bg-sky',
=======
  secondary: 'bg-universe text-white hover:brightness-95',
  ghost: 'bg-white/80 text-galaxy hover:bg-white',
>>>>>>> 2479a425990af9512bf80c70986c3391839992b2
};

const Button = ({ children, className = '', variant = 'primary', ...props }) => (
  <button
<<<<<<< HEAD
    className={`rounded-xl px-4 py-2 text-sm font-semibold shadow-soft transition duration-200 ${variants[variant]} ${className}`}
=======
    className={`rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-soft transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
>>>>>>> 2479a425990af9512bf80c70986c3391839992b2
    {...props}
  >
    {children}
  </button>
);

export default Button;
