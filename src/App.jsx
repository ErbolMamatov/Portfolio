import foodielandImg from "./assets/foodieland.png";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaPlus,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

/* ================= HOME ================= */

function Home() {
  return (
    <AnimatePresence>
      <motion.div
        variants={pageIntro}
        initial="hidden"
        animate="visible"
        className="relative text-white min-h-screen flex overflow-hidden"
      >
        {/* MOBILE SOCIALS */}
        <div className="lg:hidden fixed top-5 right-5 z-50 flex gap-5 text-xl text-gray-400">
          <a href="https://t.me/El_mmv" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.instagram.com/mmv__el"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ErbolMamatov"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {/* INTRO PANELS */}
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="origin-left fixed inset-0 bg-black z-40 pointer-events-none"
        />
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.15 }}
          className="origin-right fixed inset-0 bg-[#05070F] z-30 pointer-events-none"
        />

        {/* LEFT SIDEBAR (DESKTOP) */}
        <motion.div
          variants={fadeUp}
          className="hidden lg:flex w-24 flex-col items-center justify-center gap-24 text-gray-400 text-sm"
        >
          <Link
            to="/experience"
            className="rotate-90 hover:text-white tracking-widest transition"
          >
            EXPERIENCE
          </Link>
          <Link
            to="/projects"
            className="rotate-90 hover:text-white tracking-widest transition"
          >
            PROJECTS
          </Link>
          <Link
            to="/contact"
            className="rotate-90 hover:text-white tracking-widest transition"
          >
            CONTACT
          </Link>
        </motion.div>

        {/* MAIN */}
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
            Software <span className="text-gray-500">Engineer.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed mb-12"
          >
            Aspiring frontend developer focused on clean UI, motion design and
            modern web experiences.
          </motion.p>

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
            className="mt-16 text-gray-500 animate-bounce"
          >
            ⌄
          </motion.div>
        </div>

        {/* RIGHT SIDEBAR (DESKTOP) */}
        <motion.div
          variants={fadeUp}
          className="hidden lg:flex w-24 flex-col items-center justify-center gap-8 text-gray-400 text-2xl"
        >
          <a href="https://t.me/El_mmv" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.instagram.com/mmv__el"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ErbolMamatov"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* MOBILE NAV */}
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex gap-10 px-8 py-4 rounded-full bg-black/40 backdrop-blur border border-white/10 text-gray-400 text-xs tracking-widest">
            <Link to="/experience" className="hover:text-white">
              EXP
            </Link>
            <Link to="/projects" className="hover:text-white">
              PROJ
            </Link>
            <Link to="/contact" className="hover:text-white">
              CONT
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ================= PROJECTS ================= */

function Projects() {
  const navigate = useNavigate();

  const [projects] = useState([
    {
      title: "Project 1",
      desc: "Deployed frontend project with modern UI and clean layout.",
      tech: "HTML · CSS · JavaScript",
      github: "#",
      link: "https://project1-pink-kappa.vercel.app/",
    },
  ]);

  return (
    <div className="min-h-screen text-white px-6 sm:px-10 py-24 bg-[#0B0F19]">
      <motion.button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 text-gray-400 hover:text-white"
      >
        <FaArrowLeft /> Back
      </motion.button>

      <h1 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
        My <span className="text-gray-500">Projects</span>
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0F1424] rounded-2xl p-6 border border-white/10"
          >
            <div className="h-36 mb-6 overflow-hidden rounded-xl">
              <img
                src={foodielandImg}
                alt="Project preview"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{p.desc}</p>

            <span className="text-xs tracking-widest text-gray-500">
              {p.tech}
            </span>

            <div className="flex gap-4 mt-6 text-lg">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ================= FOOTER (НЕ ТРОНУТ) ================= */

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="relative mt-40 border-t border-white/10 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(90,120,255,0.15), transparent 60%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-8 py-20 text-white grid md:grid-cols-3 gap-16">
        <div>
          <h3 className="text-xl font-semibold tracking-widest mb-4">
            MAMATOV ERBOL
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Frontend developer crafting clean interfaces, smooth animations and
            modern web experiences.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-gray-400 tracking-widest text-sm">
          <a href="/" className="hover:text-white transition">
            HOME
          </a>
          <a href="/experience" className="hover:text-white transition">
            EXPERIENCE
          </a>
          <a href="/projects" className="hover:text-white transition">
            PROJECTS
          </a>
          <a href="/contact" className="hover:text-white transition">
            CONTACT
          </a>
        </div>

        <div className="flex gap-6 text-2xl">
          <a href="https://t.me/El_mmv" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.instagram.com/mmv__el"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ErbolMamatov"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs tracking-widest pb-10">
        © 2026 · BUILT WITH PASSION & MOTION
      </div>
    </motion.footer>
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
