// src/pages/Education.jsx
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    { degree: "B.Sc", institute: "Kongu Engineering College", score: "9.74 CGPA", year: "2023-2026" },
    { degree: "HSC", institute: "Sri Vidhya Nikethan", score: "98%", year: "2022-2023" },
    { degree: "SSLC", institute: "Aanoor Vidyalaya", score: "Pass", year: "2020-2021" },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-purple-600 to-purple-200 py-16">
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-950">Education</h2>
        <div className="relative">
          <div className="border-l-4 border-gray-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 flex justify-between items-center w-full"
            >
              {/* Left Side (Year) */}
              <div className="w-5/12 text-right pr-8">
                <p className="text-lg text-gray-50 font-bold">{edu.year}</p>
              </div>

              {/* Center (Bullet Point) */}
              <div className="w-2/12 flex justify-center">
                <div className="bg-gray-400 border-4 border-white rounded-full h-4 w-4"></div>
              </div>

              {/* Right Side (Education Details) */}
              <div className="w-5/12 text-left pl-8">
                <h4 className="mb-1 text-xl font-bold text-emerald-900 ">{edu.degree}</h4>
                <p className="mb-1 text-lg text-emerald-900 whitespace-nowrap font-bold">{edu.institute}</p>
                <p className="text-lg text-emerald-900 font-bold">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;