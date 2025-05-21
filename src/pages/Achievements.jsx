import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 

const Achievements = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: false, amount: 0.3 }); 

  const achievements = [
    "Academic Excellence Award, Kongu Engineering College",
    "Exceptional Performance in C programming Contest,Kongu Engineering College & CodeTantra"
  ];

  const achievementVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const achievementVariants2 = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const achievementVariants3 = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const allVariants = [achievementVariants, achievementVariants2, achievementVariants3];

  const achievementTransitions = [
    { duration: 0.5, ease: "easeOut" },
    { type: "spring", stiffness: 120, damping: 10 },
    { duration: 0.7, ease: "backOut" }
  ];

  return (
    <section
      ref={ref} 
      id="achievements"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-200 py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-purple-950"
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden" 
              animate={isInView ? "visible" : "hidden"} 
              variants={allVariants[index % allVariants.length]} 
              transition={achievementTransitions[index % achievementTransitions.length]} 
            >
              <span className="text-xl font-semibold text-purple-800">
                {achievement}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
