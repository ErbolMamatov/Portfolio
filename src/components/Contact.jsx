import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Contact() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative min-h-screen bg-[#0B0F19] text-white px-6 py-20 sm:py-24"
    >
      {/* MOBILE SOCIALS */}
      <div className="lg:hidden fixed top-5 right-5 z-50 flex gap-5 text-xl text-gray-400">
        <a href="https://t.me/El_mmv" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </a>
        <a href="https://www.instagram.com/mmv__el" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/ErbolMamatov" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      {/* BACK BUTTON */}
      <motion.button
        variants={fadeUp}
        whileHover={{ x: -6 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-3
                   text-gray-400 hover:text-white
                   transition mb-16 sm:mb-20"
      >
        <FaArrowLeft />
        <span className="text-sm tracking-wide">Back</span>
      </motion.button>

      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Let’s <span className="text-gray-400">connect</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 max-w-xl mb-12 sm:mb-14 text-base sm:text-lg"
        >
          I’m always open to new ideas, collaborations and cool frontend projects.
          Feel free to reach out — I reply fast 🙂
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex gap-8 sm:gap-10 text-3xl sm:text-4xl text-gray-300"
        >
          <a
            href="https://t.me/El_mmv"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://www.instagram.com/mmv__el"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/ErbolMamatov"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
        </motion.div>

        <motion.span
          variants={fadeUp}
          className="mt-14 sm:mt-16 text-gray-500 text-xs sm:text-sm tracking-widest"
        >
          © 2026 · Frontend Developer
        </motion.span>
      </div>

      {/* MOBILE BOTTOM NAV (как в Home) */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-10 px-8 py-4 rounded-full bg-black/40 backdrop-blur border border-white/10 text-gray-400 text-xs tracking-widest">
          <span className="text-white">CONT</span>
        </div>
      </div>
    </motion.div>
  );
}
