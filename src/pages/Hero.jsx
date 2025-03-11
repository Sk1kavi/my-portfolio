import React from "react";
import pic from "../assets/profilepic.jpg";
import { motion } from "framer-motion";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gfg from "../assets/gfg.jpeg";
import codechef from "../assets/codechef.jpeg";
import leetcode from "../assets/leetcode.png";
import hackerrank from "../assets/hackerrank.png";

const Hero = () => {
  const handleViewResume = () => {
    const resumeUrl = "https://www.canva.com/design/DAGhNBYbv-s/gD33U1XdTBnM_g7K2NkeAw/view?utm_content=DAGhNBYbv-s&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h37d2ee2081";
    window.open(resumeUrl, "_blank");
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/kavi-priya-s-397b11285/",
    },
    {
      name: "GitHub",
      icon: github,
      url: "https://github.com/Sk1kavi",
    },
    {
      name: "GeeksforGeeks",
      icon: gfg,
      url: "https://www.geeksforgeeks.org/user/sk1kavi/",
    },
    {
      name: "CodeChef",
      icon: codechef,
      url: "https://www.codechef.com/users/sk1kavi",
    },
    {
      name: "LeetCode",
      icon: leetcode,
      url: "https://leetcode.com/u/sk1kavi/",
    },
    {
      name: "HackerRank",
      icon: hackerrank,
      url: "https://www.hackerrank.com/profile/sk1kavi",
    },
  ];

  // Typing animation text
  const text = "Software Developer | Full-Stack Developer";
  const characters = Array.from(text);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-200 text-white relative overflow-hidden px-8">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {typeof window !== "undefined" && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random(),
            }}
            animate={{
              y: [null, -Math.random() * 500],
              opacity: [null, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div 
        className="text-left relative z-10 flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-6 text-purple-950"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Kavi Priya S
        </motion.h1>

        <motion.div className="mb-8">
          {characters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.05,
              }}
              className="text-2xl font-bold font-serif inline-block text-purple-900"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="max-w-2xl text-lg font-serif  mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Passionate Software Developer with expertise in C, C++, Java, Python, and full-stack development. Experienced in Machine Learning, Web Development, and Database Management. Strong problem-solving skills with a consistent coding streak on platforms like LeetCode and CodeChef. Eager to learn and innovate in AI, Data Science, and Software Development.
        </motion.p>

        <motion.div
          className="space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.a
            href="#projects"
            className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.button
            onClick={handleViewResume}
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.button>
          <motion.a
            href="#contact"
            className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold text-lg inline-block"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative z-10 flex flex-col items-center space-y-8 flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative inline-block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {/* Profile picture with pulsing effect */}
          <motion.div
            className="w-40 h-40 rounded-full border-4 border-white p-1 mb-8 relative"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={pic}
              alt="Kavi Priya S"
              className="w-full h-full rounded-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-8"
        >
          <div className="flex flex-row items-center space-x-10">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: 2.0 + (index * 0.1)
                  }
                }}
                className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
