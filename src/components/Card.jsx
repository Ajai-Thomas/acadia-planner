const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl bg-meteor p-5 shadow-soft ${className}`}>{children}</div>
);

export default Card;
