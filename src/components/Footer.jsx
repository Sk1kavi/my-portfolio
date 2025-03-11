import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-violet-800 to-purple-700 text-purple-200 py-8 relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-purple-200 rounded-full"
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h3 
            className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-200"
            whileHover={{ scale: 1.05 }}
          >
            The Journey of Sk1kavi
          </motion.h3>
          
          <div className="border-t border-purple-200/20 pt-4 mt-4">
            <p className="text-sm text-purple-200/80">
              &copy; {currentYear} The Journey of Sk1kavi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
