const ProgressBar = ({ value }) => (
  <div className="h-3 w-full rounded-full bg-sky">
    <div className="h-3 rounded-full bg-planetary transition-all" style={{ width: `${value}%` }} />
  </div>
);

export default ProgressBar;
