import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


    

const AnimatedSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4, // Adjust as needed
      });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection