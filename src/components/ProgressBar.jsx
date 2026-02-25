const ProgressBar = ({ value }) => (
  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
    <div 
      className="h-full bg-neon transition-all duration-700 ease-out shadow-[0_0_10px_rgba(204,255,0,0.5)]" 
      style={{ width: `${value}%` }} 
    />
  </div>
);

export default ProgressBar;