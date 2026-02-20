import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[100] bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-black text-[#002778] uppercase tracking-tighter">
          SPREADING<span className="text-[#F66C20]">LIGHT</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-widest text-[#002778]">
          <Link to="/" className="hover:text-[#F66C20]">Home</Link>
          <Link to="/about" className="hover:text-[#F66C20]">About</Link>
          <Link to="/donations" className="hover:text-[#F66C20]">Donations</Link>
          <Link to="/contact" className="hover:text-[#F66C20]">Contact</Link>
        </div>

        {/* HAMBURGER BUTTON - FIXED CLICKING */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#002778] focus:outline-none p-2"
        >
          <div className="space-y-1">
            <span className={`block w-8 h-1 bg-[#002778] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-8 h-1 bg-[#002778] ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-1 bg-[#002778] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 shadow-xl ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col p-6 space-y-4 font-black text-[#002778] uppercase text-center">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/donations" onClick={() => setIsOpen(false)}>Donations</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;