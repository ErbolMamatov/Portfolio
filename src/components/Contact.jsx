import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const contactCards = [
    {
      icon: <FaTelegramPlane />,
      title: t("contact.cards.telegram.title"),
      value: "@El_mmv",
      href: "https://t.me/El_mmv",
    },
    {
      icon: <FaInstagram />,
      title: t("contact.cards.instagram.title"),
      value: "@mmv__el",
      href: "https://www.instagram.com/mmv__el",
    },
    {
      icon: <FaGithub />,
      title: t("contact.cards.github.title"),
      value: "github.com/ErbolMamatov",
      href: "https://github.com/ErbolMamatov",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative min-h-screen bg-[#0B0F19] text-white px-6 py-20 sm:py-24"
    >
      {/* MOBILE SOCIALS */}
      <div className="lg:hidden fixed top-5 right-5 z-50 flex gap-5 text-xl text-gray-400">
        <a
          href="https://t.me/El_mmv"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.instagram.com/mmv__el"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/ErbolMamatov"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* BACK BUTTON */}
      <motion.button
        variants={fadeUp}
        whileHover={{ x: -6 }}
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 text-gray-400 hover:text-white transition"
      >
        <FaArrowLeft />
        <span className="text-sm tracking-wide">{t("common.back")}</span>
      </motion.button>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            {t("contact.titleMain")}{" "}
            <span className="text-gray-400">{t("contact.titleAccent")}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-400 max-w-2xl mb-12 sm:mb-14 text-base sm:text-lg leading-relaxed"
          >
            {t("contact.description")}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://t.me/El_mmv"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white text-black hover:opacity-90 transition tracking-widest text-xs sm:text-sm"
            >
              {t("contact.cta.primary")}
            </a>

            <a
              href="https://github.com/ErbolMamatov"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/10 hover:bg-white/15 transition tracking-widest text-xs sm:text-sm"
            >
              {t("contact.cta.secondary")}
            </a>
          </motion.div>
        </div>

        {/* CONTACT CARDS */}
        <motion.div
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-6 mb-14"
        >
          {contactCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0F1424] rounded-2xl p-6 border border-white/10 hover:border-white/25 transition group"
            >
              <div className="text-3xl text-gray-300 mb-5 group-hover:text-white transition">
                {card.icon}
              </div>

              <div className="text-xs tracking-widest text-gray-500 mb-2">
                {card.title}
              </div>

              <div className="text-sm sm:text-base text-gray-300 break-all">
                {card.value}
              </div>
            </a>
          ))}
        </motion.div>

        {/* SMALL INFO BLOCK */}
        <motion.div
          variants={fadeUp}
          className="bg-[#0F1424] rounded-2xl p-6 sm:p-8 border border-white/10 max-w-3xl mx-auto text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            {t("contact.availability.title")}
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            {t("contact.availability.text")}
          </p>
        </motion.div>

        {/* QUICK NAV */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-6 sm:gap-8 mt-14 text-xs sm:text-sm tracking-widest text-gray-500"
        >
          <Link to="/" className="hover:text-white transition">
            {t("footer.home")}
          </Link>
          <Link to="/projects" className="hover:text-white transition">
            {t("footer.projects")}
          </Link>
          <Link to="/experience" className="hover:text-white transition">
            {t("footer.experience")}
          </Link>
        </motion.div>

        <motion.span
          variants={fadeUp}
          className="block text-center mt-14 sm:mt-16 text-gray-500 text-xs sm:text-sm tracking-widest"
        >
          © 2026 · {t("contact.footerLine")}
        </motion.span>
      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-10 px-8 py-4 rounded-full bg-black/40 backdrop-blur border border-white/10 text-gray-400 text-xs tracking-widest">
          <span className="text-white">{t("nav.cont")}</span>
        </div>
      </div>
    </motion.div>
  );
}