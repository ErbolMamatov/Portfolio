import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Project 1",
    desc: "Deployed frontend project with modern UI and smooth interactions.",
    tech: "HTML · CSS · JavaScript",
    link: "https://project1-pink-kappa.vercel.app/",
    github: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-10 py-20 relative">
      
      {/* FIXED BACK BUTTON */}
      <motion.button
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        whileHover={{ x: -6 }}
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50
                   flex items-center gap-3
                   text-gray-400 hover:text-white
                   transition"
      >
        <FaArrowLeft />
        <span className="text-sm tracking-wide">Back</span>
      </motion.button>

      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center"
        >
          My <span className="text-gray-400">Projects</span>
        </motion.h1>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 justify-center">
          <AnimatePresence>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.03,
                }}
                className="group relative bg-[#0F1424] rounded-2xl overflow-hidden
                           border border-white/10 hover:border-white/30
                           transition-all duration-500
                           shadow-[0_0_0_rgba(255,255,255,0)]
                           hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
              >
                {/* IMAGE */}
                <div
                  className="h-48 bg-[#0B0F19] flex items-center justify-center
                             text-gray-500 text-sm tracking-widest
                             group-hover:scale-105 transition duration-500"
                >
                  LIVE PROJECT
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {p.desc}
                  </p>

                  <span className="text-xs tracking-widest text-gray-500">
                    {p.tech}
                  </span>

                  {/* ACTIONS */}
                  <div className="flex gap-4 mt-6">
                    <a
                      href={p.github}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition text-lg"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={p.link}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition text-lg"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* GLOW */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100
                             transition duration-500
                             bg-gradient-to-br from-white/5 via-transparent to-transparent"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
