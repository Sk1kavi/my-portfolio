import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    "Academic Excellence Award, Kongu Engineering College"
    // Add more achievements here as needed
  ];

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-200 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-950">
          Achievements
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
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
