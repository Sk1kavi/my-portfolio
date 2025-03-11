import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setKey(prevKey => prevKey + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-200 py-16">
      <motion.div 
        key={key}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center mb-8 text-purple-950"
        >
          About Me
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-50 font-bold mb-8 leading-loose"
        >
          I am a passionate and dedicated programmer with proficiency in C, C++, Java, and Python. My problem-solving skills have been honed through consistent practice on platforms like HackerRank, LeetCode, CodeChef, and GeeksforGeeks, where I have earned several badges and maintained impressive streaks. With a strong interest in Data Science and Artificial Intelligence, I am actively pursuing training and have gained hands-on experience in Machine Learning through internships. I have independently completed projects such as Customer Churn Prediction, Spam SMS Detection, and Credit Card Fraud Detection, which have strengthened my technical expertise and analytical abilities. Driven by a continuous desire to learn, I have completed multiple certifications and internships. My goal is to leverage my skills and analytical mindset to build innovative solutions, tackle challenging problems, and collaborate with like-minded professionals to achieve excellence.

          Fun fact: I love solving puzzles and playing chess in my free time!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
