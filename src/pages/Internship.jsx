import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Internship = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.3 
  });

  return (
    <section 
      ref={ref}
      id="internship" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-200 py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 text-purple-950"
        >
          Internship
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }}
          className="bg-gray-100 p-6 rounded-lg cursor-pointer"
        >
          
          <motion.div
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-bold text-violet-600 mb-2"
            >
             Machine Learning Intern
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-700"
            >
              CodSoft
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-700"
            >
              August 2024 - August 2024
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;
