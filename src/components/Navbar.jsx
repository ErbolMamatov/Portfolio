import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full flex flex-col justify-center items-center gap-8 p-4 text-gray-400">
      <a href="#contact" className="hover:text-white">CONTACT</a>
      <a href="#experience" className="hover:text-white">EXPERIENCE</a>
      <a href="#projects" className="hover:text-white">PROJECTS</a>
    </nav>
  );
};

export default Navbar;
