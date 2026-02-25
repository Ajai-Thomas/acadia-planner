import { motion } from 'framer-motion';

const Card = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`rounded-[2rem] p-8 shadow-xl transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;