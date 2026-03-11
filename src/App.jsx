import foodielandImg from "./assets/foodieland.png";
import sneakerImg from "./assets/sneaker-store.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  FaArrowLeft,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useTranslation } from "react-i18next";

import Experience from "./components/Experience";
import Contact from "./components/Contact";

/* ================= ANIMATIONS ================= */

const pageIntro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* ================= HELPERS ================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/* ================= LANGUAGE SWITCH ================= */

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language || "ru";

  const langs = [
    { code: "ru", label: "RU" },
    { code: "ky", label: "KG" },
    { code: "en", label: "EN" },
  ];

  return (
    <div className="fixed top-5 right-5 z-[60] hidden lg:block">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/40 backdrop-blur border border-white/10">
        {langs.map((l) => {
          const active = current?.startsWith(l.code);

          return (
            <button
              key={l.code}
              onClick={() => i18n.changeLanguage(l.code)}
              className={[
                "px-3 py-1 rounded-full text-xs tracking-widest transition",
                active
                  ? "text-white bg-white/10 border border-white/15"
                  : "text-gray-400 hover:text-white",
              ].join(" ")}
            >
              {l.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ================= HOME ================= */

function Home() {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <motion.div
        variants={pageIntro}
        initial="hidden"
        animate="visible"
        className="relative text-white min-h-screen flex overflow-hidden"
      >
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            variants={fadeUp}
            className="text-sm sm:text-lg tracking-[0.3em] text-gray-500 mb-4"
          >
            MAMATOV ERBOL
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            {t("home.titleMain")}{" "}
            <span className="text-gray-500">{t("home.titleAccent")}</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed mb-10"
          >
            {t("home.description")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <Link
              to="/experience"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition tracking-widest text-xs sm:text-sm"
            >
              EXPERIENCE
            </Link>

            <Link
              to="/projects"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition tracking-widest text-xs sm:text-sm"
            >
              VIEW PROJECT
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white text-black hover:opacity-90 transition tracking-widest text-xs sm:text-sm"
            >
              CONTACT
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex gap-5 text-3xl sm:text-4xl text-gray-300"
          >
            <SiHtml5 />
            <SiCss3 />
            <SiReact />
            <SiNodedotjs />
            <SiPython />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 text-xs sm:text-sm text-gray-500 tracking-widest"
          >
            React · React Router · Redux Toolkit · TailwindCSS · REST API · Axios
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ================= PROJECTS ================= */

function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation();

 const projects = [
  {
    title: t("projects.items.restaurant.title"),
    desc: t("projects.items.restaurant.desc"),
    tech: "React · React Router · Axios · REST API · TailwindCSS",
    link: "https://project1-pink-kappa.vercel.app/",
    image: foodielandImg,
  },
  {
    title: "Sneaker Store",
    desc: "React ecommerce-style frontend with beautiful visual design and clean UI. Desktop-focused version without responsive layout.",
    tech: "React · JavaScript · CSS · UI Design",
    link: "https://sneaker-store-neon.vercel.app/",
    image: sneakerImg,
  },
];

  return (
    <div className="min-h-screen text-white px-6 sm:px-10 py-24 bg-[#0B0F19]">
      <motion.button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 text-gray-400 hover:text-white"
      >
        <FaArrowLeft /> {t("common.back")}
      </motion.button>

      <h1 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
        {t("projects.titleMain")}{" "}
        <span className="text-gray-500">{t("projects.titleAccent")}</span>
      </h1>

      <div className="grid sm:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(project.link, "_blank")}
            className="bg-[#0F1424] rounded-2xl p-6 border border-white/10 cursor-pointer w-full"
          >
            <div className="h-36 mb-6 overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>

            <span className="text-xs tracking-widest text-gray-500">
              {project.tech}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-40 border-t border-white/10 py-16 text-center text-gray-500 text-sm">
      © 2026 · {t("footer.description")}
    </footer>
  );
}

/* ================= APP ================= */

export default function App() {
  return (
    <Router>
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #0a1430 0%, transparent 45%),
            radial-gradient(circle at 80% 70%, #050b1e 0%, transparent 50%),
            linear-gradient(180deg, #05070F, #05070F)
          `,
          backgroundSize: "220% 220%",
        }}
      />

      <ScrollToTop />
      <LanguageSwitch />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}