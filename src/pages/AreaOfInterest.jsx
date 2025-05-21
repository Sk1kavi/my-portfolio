import  { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AreaOfInterest = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const interests = [
    {
      title: "Data Science",
      variant: "slideUp"
    },
    {
      title: "Artificial Intelligence",
      variant: "slideRight"
    },
    {
      title: "Machine Learning",
      variant: "rotate"
    },
    {
      title: "Cloud Computing",
      variant: "scale"
    }
  ];

  const animations = {
    slideUp: {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    slideRight: {
      hidden: { x: -100, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    rotate: {
      hidden: { rotate: -180, opacity: 0, scale: 0 },
      visible: { rotate: 0, opacity: 1, scale: 1 }
    },
    scale: {
      hidden: { scale: 0, opacity: 0 },
      visible: { scale: 1, opacity: 1 }
    }
  };

  const getRandomTransition = () => {
    const transitions = [
      { type: "spring", stiffness: 100, damping: 10 },
      { type: "spring", stiffness: 400, damping: 15 },
      { type: "tween", duration: 0.8, ease: "easeOut" },
      { type: "tween", duration: 0.6, ease: "backOut" }
    ];
    return transitions[Math.floor(Math.random() * transitions.length)];
  };

  return (
    <section 
      ref={ref}
      id="area-of-interest" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-200 py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12 text-purple-950"
        >
          Area of Interest
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animations[interest.variant]}
              transition={getRandomTransition()}
              className="
                relative overflow-hidden
                bg-white
                p-6 rounded-lg shadow-lg text-center
                transform-gpu
              "
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: {
                  rotate: {
                    repeat: Infinity,
                    duration: 0.5
                  }
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="text-xl font-semibold text-purple-800"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {interest.title}
              </motion.span>
              
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-white opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaOfInterest;
