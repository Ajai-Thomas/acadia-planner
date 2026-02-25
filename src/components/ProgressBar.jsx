const ProgressBar = ({ value }) => (
  <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
    <div 
      className="h-full bg-neon transition-all duration-700 ease-out" 
      style={{ width: `${value}%` }} 
    />
  </div>
);

export default ProgressBar;