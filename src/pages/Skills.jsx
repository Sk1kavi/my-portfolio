import React from "react";
import { motion } from "framer-motion";
import c from "../assets/c.png";
import cpp from "../assets/c++.jpeg";
import git from "../assets/git.jpeg";
import github from "../assets/github.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import js from "../assets/js.jpeg";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import css from "../assets/css.jpeg";
import react from "../assets/react.png";
import node from "../assets/node.png";
import vscode from "../assets/vscode.jpg";
import android from "../assets/android.png"

const Skills = () => {
  const skills = [
    { name: "C", logo: c },
    { name: "C++", logo: cpp },
    { name: "Java", logo: java },
    { name: "Python", logo: python },
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: js },
    { name: "PHP", logo: php },
    { name: "React", logo: react },
    { name: "Node.js", logo: node },
    { name: "MongoDB", logo: mongodb },
    { name: "MySQL", logo: mysql },
    { name: "VSCode", logo: vscode },
    { name: "Android", logo: android },
    { name: "Git", logo: git },
    { name: "GitHub", logo: github },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-purple-600 to-purple-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-purple-950"
        >
          Technical Skills
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mb-4 overflow-hidden"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-semibold text-gray-700"
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
