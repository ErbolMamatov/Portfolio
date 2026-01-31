import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Experience() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 md:px-16 py-24 overflow-hidden">
      
      {/* BACK BUTTON */}
      <motion.button
        variants={item}
        initial="hidden"
        animate="visible"
        whileHover={{ x: -6 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-3 mb-12
                   text-gray-400 hover:text-white
                   transition"
      >
        <FaArrowLeft />
        <span className="text-sm tracking-wide">Back</span>
      </motion.button>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        {/* TITLE */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Experience <span className="text-gray-400">& Path</span>
        </motion.h1>

        {/* INTRO */}
        <motion.p
          variants={item}
          className="text-gray-400 max-w-2xl leading-relaxed mb-20"
        >
          I don’t have commercial experience yet —  
          but I actively build projects, learn modern frontend tools
          and focus on clean structure, motion and visual clarity.
        </motion.p>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 pl-10 space-y-20">
          <motion.div variants={item} className="relative">
            <span className="absolute -left-[18px] top-1 w-3 h-3 rounded-full bg-white" />
            <h3 className="text-xl font-semibold mb-2">2023 — First Steps</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Started learning web development.  
              Learned HTML structure, CSS layouts, positioning and basics
              of responsive design.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative">
            <span className="absolute -left-[18px] top-1 w-3 h-3 rounded-full bg-white" />
            <h3 className="text-xl font-semibold mb-2">2024 — JavaScript & Logic</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Learned JavaScript fundamentals, DOM manipulation,
              events, simple animations and interactive UI logic.
            </p>
          </motion.div>

          <motion.div variants={item} className="relative">
            <span className="absolute -left-[18px] top-1 w-3 h-3 rounded-full bg-white" />
            <h3 className="text-xl font-semibold mb-2">2025 — React & Modern UI</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Working with React, component-based architecture,
              Tailwind CSS, routing and Framer Motion.
              Building animated portfolio projects.
            </p>
          </motion.div>
        </div>

        {/* SKILLS */}
        <motion.div variants={item} className="mt-28">
          <h2 className="text-2xl font-semibold mb-8">
            Tools & Focus
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <SiHtml5 />, label: "HTML · semantic structure" },
              { icon: <SiCss3 />, label: "CSS · layout & visuals" },
              { icon: <SiJavascript />, label: "JavaScript · logic" },
              { icon: <SiReact />, label: "React · components" },
              { icon: <SiTailwindcss />, label: "Tailwind · fast UI" },
              { icon: <SiGithub />, label: "GitHub · version control" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-5
                           bg-[#0F1424] rounded-2xl
                           border border-white/10
                           hover:border-white/30 transition"
              >
                <span className="text-2xl text-gray-300">{skill.icon}</span>
                <span className="text-sm text-gray-400 tracking-wide">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
