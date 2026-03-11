import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const highlights = [
    {
      title: t("experience.highlights.items.frontend.title"),
      text: t("experience.highlights.items.frontend.text"),
    },
    {
      title: t("experience.highlights.items.api.title"),
      text: t("experience.highlights.items.api.text"),
    },
    {
      title: t("experience.highlights.items.team.title"),
      text: t("experience.highlights.items.team.text"),
    },
  ];

  const timeline = [
    {
      title: t("experience.timeline.foundation.title"),
      text: t("experience.timeline.foundation.text"),
    },
    {
      title: t("experience.timeline.javascript.title"),
      text: t("experience.timeline.javascript.text"),
    },
    {
      title: t("experience.timeline.react.title"),
      text: t("experience.timeline.react.text"),
    },
    {
      title: t("experience.timeline.team.title"),
      text: t("experience.timeline.team.text"),
    },
  ];

  const skills = [
    { icon: <SiHtml5 />, label: t("experience.skills.items.html") },
    { icon: <SiCss3 />, label: t("experience.skills.items.css") },
    { icon: <SiJavascript />, label: t("experience.skills.items.js") },
    { icon: <SiReact />, label: t("experience.skills.items.react") },
    { icon: <SiTailwindcss />, label: t("experience.skills.items.tailwind") },
    { icon: <SiGithub />, label: t("experience.skills.items.github") },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white px-6 md:px-16 py-24 overflow-hidden">
      {/* BACK BUTTON */}
      <motion.button
        variants={item}
        initial="hidden"
        animate="visible"
        whileHover={{ x: -6 }}
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 text-gray-400 hover:text-white transition"
      >
        <FaArrowLeft />
        <span className="text-sm tracking-wide">{t("common.back")}</span>
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
          {t("experience.titleMain")}{" "}
          <span className="text-gray-400">{t("experience.titleAccent")}</span>
        </motion.h1>

        {/* INTRO */}
        <motion.p
          variants={item}
          className="text-gray-400 max-w-2xl leading-relaxed mb-16"
        >
          {t("experience.intro.beforeReact")}{" "}
          <span className="text-white">React</span>{" "}
          {t("experience.intro.afterReactBeforeApi")}{" "}
          <span className="text-white">REST API</span>{" "}
          {t("experience.intro.afterApiBeforeAxios")}{" "}
          <span className="text-white">Axios</span>
          {t("experience.intro.afterAxiosBeforeGit")}{" "}
          <span className="text-white">Git Flow</span>
          {t("experience.intro.afterGit")}
        </motion.p>

        {/* HIGHLIGHTS */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-[#0F1424] rounded-2xl p-6 border border-white/10"
            >
              <div className="text-xs tracking-widest text-gray-500 mb-2">
                {t("experience.highlights.label")}
              </div>
              <div className="text-lg font-semibold mb-2">{h.title}</div>
              <div className="text-sm text-gray-400 leading-relaxed">
                {h.text}
              </div>
            </div>
          ))}
        </motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 pl-10 space-y-20">
          {timeline.map((step, i) => (
            <motion.div key={i} variants={item} className="relative">
              <span className="absolute -left-[18px] top-1 w-3 h-3 rounded-full bg-white" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SKILLS */}
        <motion.div variants={item} className="mt-28">
          <h2 className="text-2xl font-semibold mb-8">
            {t("experience.skills.title")}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-5 bg-[#0F1424] rounded-2xl border border-white/10 hover:border-white/30 transition"
              >
                <span className="text-2xl text-gray-300">{skill.icon}</span>
                <span className="text-sm text-gray-400 tracking-wide">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* EXTRA STACK LINE */}
          <motion.div
            variants={item}
            className="mt-10 text-xs sm:text-sm text-gray-500 tracking-widest"
          >
            React Router · Redux Toolkit · REST API · Axios · Git Flow · Figma ·
            Responsive Design
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}