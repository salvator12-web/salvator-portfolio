import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "GIGO Pharmacy",
    description:
      "A full-stack MERN pharmacy platform for browsing and ordering medicine online, with secure JWT authentication and a product/order management backend.",
    tech: ["React", "Vite", "Express", "MongoDB", "JWT", "Vercel", "Render"],
    live: "https://gigo-pharmacy.vercel.app/shop",
    code: "https://github.com/QUIRKE12/gigo-pharmacy",
    highlight:
      "First app in the suite to reach production — deployed on Vercel (frontend) and Render (backend).",
  },
  {
    name: "GIGO Business Company",
    description:
      "An inventory and business management dashboard built for GIGO Business Company, with Firebase authentication and role-based access on top of a MongoDB backend.",
    tech: ["React 19", "Firebase Auth", "Express 5", "MongoDB", "Flowbite", "Vercel"],
    live: "https://gigo-business-company.vercel.app/",
    code: "https://github.com/QUIRKE12/GIGO-BUSINESS-COMPANY",
    highlight:
      "Syncs approved orders to the GIGO Delivery system via API for end-to-end order fulfillment.",
  },
  {
    name: "GIGO Delivery",
    description:
      "A delivery and ride-hailing system that receives synced orders from GIGO Business Company and manages dispatch and delivery tracking.",
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Vercel", "Render"],
    live: "https://gigo-delivery.vercel.app/",
    code: "https://github.com/QUIRKE12/gigo-delivery",
    highlight:
      "Integrates with GIGO Business Company to complete the order-to-delivery pipeline.",
  },
  {
    name: "EZER Supermarket",
    description:
      "A grocery delivery platform for EZER Supermarket with a full shop, cart, and checkout flow, live order tracking, and MTN MoMo payment integration alongside cash on delivery.",
    tech: ["React", "Firebase", "Express", "MongoDB", "MTN MoMo API", "Vercel"],
    live: "https://ezer-supermarket.vercel.app/",
    code: "https://github.com/QUIRKE12/ezer-supermarket",
    highlight:
      "Firebase Cloud Messaging push notifications and Google Maps-based delivery fee calculation.",
  },
  {
    name: "Amakuru",
    description:
      "A Next.js content/news platform with Firebase Authentication synced to a MongoDB user profile, plus role-based access control (RBAC) middleware for protecting API routes.",
    tech: ["Next.js 15", "TypeScript", "Firebase Admin", "MongoDB", "Tailwind CSS"],
    live: "https://amakuru-aj75-one.vercel.app/",
    code: "https://github.com/QUIRKE12/AMAKURU/tree/main/amakuru",
    highlight:
      "Server-verified auth flow: Firebase UID → ID token → MongoDB profile creation/sync.",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 px-6 sm:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A suite of full-stack MERN applications built for real businesses
          in the Rwandan market, sharing a common MongoDB Atlas cluster and
          Firebase for authentication and notifications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400 italic mb-4">
                {project.highlight}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm font-medium"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm font-medium"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
