import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiRender,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Advanced", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "JavaScript", level: "Advanced", icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
  { name: "Node.js", level: "Advanced", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express", level: "Advanced", icon: <SiExpress className="text-gray-700 dark:text-gray-300 text-4xl" /> },
  { name: "MongoDB", level: "Advanced", icon: <SiMongodb className="text-green-600 text-4xl" /> },
  { name: "Firebase", level: "Advanced", icon: <SiFirebase className="text-amber-500 text-4xl" /> },
  { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
  { name: "HTML5", level: "Advanced", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", level: "Advanced", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs className="text-gray-800 dark:text-white text-4xl" /> },
  { name: "TypeScript", level: "Intermediate", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
  { name: "Git & GitHub", level: "Advanced", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
  { name: "Vercel", level: "Advanced", icon: <SiVercel className="text-gray-900 dark:text-white text-4xl" /> },
  { name: "Render", level: "Advanced", icon: <SiRender className="text-teal-500 text-4xl" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          The MERN stack and tools I use daily to build and ship full-stack
          applications, from database to deployment.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition duration-300 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <motion.div
                className="mb-4"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                {skill.name}
              </h3>
              <span
                className={`px-4 py-2 rounded-full text-white text-sm font-medium ${
                  skill.level === "Advanced"
                    ? "bg-green-500"
                    : "bg-blue-500"
                }`}
              >
                {skill.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
