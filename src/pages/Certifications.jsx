import React from "react";
import { motion } from "framer-motion";
import nptelLogo from "../assets/nptel.png";
import mongodbLogo from "../assets/mongodb.png";


const Certifications = () => {
  const certifications = [
    {
      name: "MongoDB certified Associate Developer",
      issuer: "MongoDB",
      logo: mongodbLogo,
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/2d155a8a-2c2e-473e-9b9b-6f07022c8559-kavi-priya-s-23bcr024-9d0de2ae-4eaa-4bf3-b1c4-a3780b1fda98-certificate.pdf"
    },
    {
      name: "Programming in Modern C++",
      issuer: "NPTEL",
      logo: nptelLogo,
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs44/Course/NPTEL24CS44S115540102930733199.pdf",
    },
    {
      name: "Getting Started with Competitive Programming",
      issuer: "NPTEL",
      logo: nptelLogo,
      link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs103/Course/NPTEL24CS103S65100147904316716.pdf",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-purple-600 to-purple-200 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8 text-purple-950"
        >
          Certifications
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // Remove viewport={{ once: true }} to make it animate every time
          className="space-y-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-6 rounded-lg flex items-center transform transition-all duration-300"
            >
              <motion.img
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                src={cert.logo}
                alt={cert.issuer}
                className="w-16 h-16 mr-6"
              />
              <div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-violet-600"
                >
                  {cert.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-700"
                >
                  {cert.issuer}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.4 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-500 hover:text-blue-600 font-medium"
                >
                  View Certificate →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
