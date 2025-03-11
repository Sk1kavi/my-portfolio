// src/pages/Training.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Training = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const trainings = [
    {
      title: "Artificial Intelligence",
      institution: "Bolt Iot",
      duration: "January 2025 - January 2025",
      description: "Completed an intensive training  program on Artificial Intelligence ,gaining hands-on experience in frontend development using HTML,CSS,Javascript . Focused on python programming and Flask framework to build robust AI models . Developed multiple AI-driven projects enhancing my skills in AI models and API integration "
      },
    {
      title: "Data Science",
      institution: "Internshala",
      duration: "December 2024 - January 2025",
      description: "Completed a training program in Data Science, gaining hands-on experience in data manipulation and analysis using Microsoft Excel . Developed proficiency in writing efficient SQL queries for data management and retrieval . Explored the fundamentals of generative AI and learned how ChatGPT integrates with Excel and SQL . Enhanced my skills in data visualization techniques and implemented various machine learning algorithms to derive meaningful insights from data." 
      },
  ];

  return (
    <section id="training" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-200 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-950">Trainings</h2>
        <div className="space-y-8">
          {trainings.map((training, index) => (
            <motion.div
              key={`${key}-${index}`}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-violet-600 mb-2">{training.title}</h3>
              <p className="text-lg text-gray-700 mb-1">
                <span className="font-semibold">Institution:</span> {training.institution}
              </p>
              <p className="text-lg text-gray-700 mb-1">
                <span className="font-semibold">Duration:</span> {training.duration}
              </p>
              <p className="text-lg text-gray-700">{training.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;