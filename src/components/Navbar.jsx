import { motion } from "framer-motion"; 

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-purple-200 p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-6 flex items-center">
          {[{href:"#hero", label:"Home"},
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#education", label: "Education" },
            { href: "#internship", label: "Internship" },
            { href: "#training", label: "Trainings" },
            { href: "#certifications", label: "Certifications" },
            { href: "#workshops", label: "Workshops" },
            { href: "#achievements", label: "Achievements" },
            { href: "#area-of-interest", label: "AreaOfInterest" },
          ].map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-purple-900 font-medium transition-all duration-300 ease-in-out group"
              whileHover={{ scale: 1.05 }}
            >
              {/* Hover background effect */}
              <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white rounded-lg transition-all duration-300 ease-in-out -z-10"></span>
              
              {/* Text that changes color on hover */}
              <span className="relative z-10 group-hover:text-purple-800">
                {item.label}
              </span>

              {/* Underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
