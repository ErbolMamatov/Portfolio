import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiTypescript, SiPython, SiPostgresql } from "react-icons/si";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex">

      {/* Sidebar */}
      <div className="w-20 flex flex-col items-center justify-center gap-8 text-gray-400">
        <a href="#" className="rotate-90 hover:text-white">CONTACT</a>
        <a href="#" className="rotate-90 hover:text-white">EXPERIENCE</a>
        <a href="#" className="rotate-90 hover:text-white">PROJECTS</a>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-10">

        <h1 className="text-xl tracking-widest mb-2">KENNETH SUNJAYA</h1>

        <h2 className="text-5xl font-bold mb-4">
          Software <span className="text-gray-400">Engineer.</span>
        </h2>

        <p className="max-w-xl text-gray-400 mb-8">
          I build full-stack web and mobile applications with a focus on performance, scalability, and user experience.
        </p>

        {/* Tech Icons */}
        <div className="flex gap-6 text-3xl mb-8">
          <SiReact />
          <SiNodedotjs />
          <SiTypescript />
          <SiPython />
          <SiPostgresql />
        </div>

        {/* Social */}
        <div className="flex gap-6 text-2xl text-gray-400">
          <FaLinkedin className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaGithub className="hover:text-white cursor-pointer" />
        </div>

        {/* CV Button */}
        <button className="mt-10 border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
          Download CV
        </button>

      </div>
    </div>
  );
}

export default App;
