import { motion } from "framer-motion";
import icon from "../assets/icon.svg";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center md:text-left px-6 sm:px-12 max-w-4xl">
        <img src={icon} alt="" className="w-[60px] h-[60px] mb-4 mx-auto md:mx-0" />

        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-snug"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Hi there! I&apos;m{" "}
          <span className="font-extrabold text-blue-600 dark:text-blue-400">
            Salvator Ahishakiye
          </span>
          , a Full Stack Developer holding a Bachelor of Science in Computer
          Science, focused on building production-ready web applications for
          the Rwandan market.
        </motion.p>

        <motion.p
          className="mt-6 text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          I build with the{" "}
          <span className="font-semibold">MERN stack</span> — MongoDB,
          Express, React, and Node.js — paired with{" "}
          <span className="font-semibold">Firebase</span> for authentication
          and push notifications. I deploy frontends on{" "}
          <span className="font-semibold">Vercel</span> and backends on{" "}
          <span className="font-semibold">Render</span>, with{" "}
          <span className="font-semibold">MongoDB Atlas</span> powering data
          across projects.
        </motion.p>

        <motion.p
          className="mt-6 text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
          My recent work includes a suite of GIGO-branded applications — a
          pharmacy platform, an inventory/business management dashboard, a
          delivery and ride-hailing system, and a grocery delivery app built
          with EZER Supermarket — alongside Amakuru, a Next.js content
          platform with role-based access control. See the details on the{" "}
          <a
            href="/projects"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
          >
            Projects page
          </a>
          .
        </motion.p>

        <motion.p
          className="mt-8 text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
          I&apos;m always excited to work on challenging projects and connect
          with like-minded people.{" "}
          <a
            href="/contact"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800"
          >
            Let&apos;s connect!
          </a>
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
