import React from "react";
import { Home, User, LayoutGrid, BookOpen, Phone, Sun } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
      bg-[#0d0d0d]/80 backdrop-blur-md border border-gray-800 
      rounded-full shadow-lg px-6 py-2 flex items-center gap-6 text-gray-300 
      z-50"
    >
      <a href="#home" className="flex items-center gap-2 hover:text-white transition">
        <Home size={18} />
      </a>

      <a href="#about" className="flex items-center gap-2 hover:text-white transition">
        <User size={18} />
        <span className="text-sm">Sobre</span>
      </a>

      <a href="#education" className="flex items-center gap-2 hover:text-white transition">
        <BookOpen size={18} />
        <span className="text-sm">Educação</span>
      </a>

      <a href="#projects" className="flex items-center gap-2 hover:text-white transition">
        <LayoutGrid size={18} />
        <span className="text-sm">Projetos</span>
      </a>


      <a href="#contact" className="flex items-center gap-2 hover:text-white transition">
        <Phone size={18} />
        <span className="text-sm">Contato</span>
      </a>

      <div className="w-px h-5 bg-gray-700 mx-2" />

      <button className="hover:text-yellow-400 transition">
        <Sun size={18} />
      </button>
    </nav>
  );
}
