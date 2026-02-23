const Card = ({ children, className = '' }) => (
  <div className={`glass-panel rounded-3xl p-5 shadow-soft ${className}`}>{children}</div>
);

export default Card;
