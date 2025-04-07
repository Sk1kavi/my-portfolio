import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "To-Do-App",
      description: "A simple To-Do List application built using Java and Spring Boot. It allows users to add, complete, and delete tasks efficiently. The project is version-controlled with GitHub and designed for future enhancements."
    },
    {
      title: "Event Hall Booking System",
      description: "A full-stack event hall booking application where customers can book halls, hall owners can manage listings, and admins oversee transactions and approvals.",
    },
    {
      title: "Daily Journal",
      description: "A modern Android journaling app to securely record, update, and delete daily thoughts and memories. Features include search, reminders, customizable themes, offline storage with SQLite, and planned multimedia support for future enhancements"
    },
    {
      title: "CT Image Denoising",
      description: "Developed a web-based tool to enhance CT scan clarity without increasing radiation exposure."
    },
    {
      title: "Telegram Chat Bot",
      description: "A smart Telegram bot that automates responses and assists users with quick, AI-powered interactions. Built using OpenAI's API for handling user queries directly in Telegram, offering instant and contextual replies."
    },
    {
        title: "Image Generator",
        description: "A web-based image generator that takes user prompts and sends them to DALL·E via OpenAI API to create unique images. The generated image is displayed to the user, making AI-powered visual creativity accessible and easy."
    },
    {
        title: "Custom Recipe Generator",
        description: "An application that sends user-provided ingredients as prompts to OpenAI's API to generate creative, personalized recipes. The output is displayed with an easy copy option, helping users explore new cooking ideas effortlessly."
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Developed a Machine Learning Model to detect credit card frauds with an accuracy of 99%.",
    },
    {
      title: "Customer Churn Prediction",
      description: "Utilized Machine Learning Algorithms to predict customer churns.",
    },
    {
      title: "Spam SMS Detection",
      description: "Developed a Machine Learning Model to detect spam SMS with an accuracy of 96%.",
    }  
    
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-purple-600 to-purple-200 py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100 
          }}
          className="text-4xl font-bold text-center mb-12 text-purple-950"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-gray-50 p-8 rounded-xl transform transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-violet-600 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-lg text-gray-700"
                >
                  {project.description}
                </motion.p>

                {/* <motion.div
                  className="mt-4 flex space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-violet-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-violet-700 transition-colors"
                  >
                    View Project
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-violet-600 text-violet-600 px-4 py-2 rounded-lg font-medium hover:bg-violet-50 transition-colors"
                  >
                    Source Code
                  </motion.button>
                </motion.div> */}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
