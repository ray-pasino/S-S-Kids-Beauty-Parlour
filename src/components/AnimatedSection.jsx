// import React, { useMemo } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const AnimatedSection = ({ children }) => {
//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.3, // Slightly lower threshold to trigger earlier
//     });

//     const animationSettings = useMemo(() => ({
//         initial: { opacity: 0, y: 20 }, // Reduced movement
//         animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 },
//         transition: { duration: 0.6, ease: "easeOut" }, // Shorter duration for smoother effect
//     }), [inView]);

//     return (
//         <motion.div
//             ref={ref}
//             {...animationSettings}
//             style={{ willChange: 'transform, opacity' }} // Hint browser for better performance
//         >
//             {children}
//         </motion.div>
//     );
// }

// export default React.memo(AnimatedSection); // Use memoization to avoid unnecessary re-renders
