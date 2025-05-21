import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Workshops = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const workshops = [
    "Generative AI and Prompt Engineering",
    "Machine Learning and Data Visualization using Python",
    "Artificial Intelligence",
    "React",
    "Flutter"
  ];

  // Array of different animation variants
  const animationVariants = [
    {
      hidden: { x: -100, opacity: 0, rotate: -10 },
      visible: { x: 0, opacity: 1, rotate: 0 }
    },
    {
      hidden: { x: 100, opacity: 0, scale: 0.8 },
      visible: { x: 0, opacity: 1, scale: 1 }
    },
    {
      hidden: { y: 100, opacity: 0, skewX: 10 },
      visible: { y: 0, opacity: 1, skewX: 0 }
    },
    {
      hidden: { y: -100, opacity: 0, scale: 1.2 },
      visible: { y: 0, opacity: 1, scale: 1 }
    },
    {
      hidden: { opacity: 0, scale: 0, rotate: 180 },
      visible: { opacity: 1, scale: 1, rotate: 0 }
    }
  ];

  // Different hover effects
  const hoverEffects = [
    {
      scale: 1.05,
      rotate: 5,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"
    },
    {
      scale: 1.1,
      y: -10,
      boxShadow: "0px 15px 25px rgba(0,0,0,0.15)"
    },
    {
      scale: 1.05,
      x: 10,
      boxShadow: "5px 5px 15px rgba(0,0,0,0.2)"
    },
    {
      scale: 1.08,
      rotate: -5,
      boxShadow: "-5px 5px 15px rgba(0,0,0,0.2)"
    },
    {
      scale: 1.05,
      y: -5,
      x: 5,
      boxShadow: "0px 8px 15px rgba(0,0,0,0.2)"
    }
  ];

  return (
    <section 
      ref={ref}
      id="workshops" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-200 py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12 text-purple-950"
        >
          Workshops
        </motion.h2>
        <div className="grid grid-cols-1 gap-6">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animationVariants[index % animationVariants.length]}
              whileHover={hoverEffects[index % hoverEffects.length]}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer backdrop-blur-sm bg-opacity-90"
            >
              <motion.span 
                className="text-xl font-semibold text-purple-800 block"
                whileHover={{ scale: 1.02 }}
              >
                {workshop}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
