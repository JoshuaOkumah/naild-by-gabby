import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 md:px-10 relative">
      {/* MOBILE NAV */}
      <div className="md:hidden relative flex items-center h-14">
        {/* Logo — FAR LEFT */}
        <img src={logo} alt="brand-logo" className="h-10 w-auto" />

        {/* Phone — TRUE CENTER */}
        <a
          href="tel:+2348063198345"
          aria-label="Call us"
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#F3C6C6] text-[#3E2723]"
        >
          <Phone size={20} />
        </a>

        {/* Hamburger — FAR RIGHT */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto text-[#3E2723] z-50"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F6EDE4] border-t border-[#E6C48A]/30 shadow-lg">
          <ul
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="flex flex-col items-center gap-4 py-6 text-[#3E2723] font-medium"
          >
            <li className="hover:text-[#E6C48A] cursor-pointer">Home</li>
            <li className="hover:text-[#E6C48A] cursor-pointer">
              Our Services
            </li>
            <li className="hover:text-[#E6C48A] cursor-pointer">Our Work</li>
            <li className="hover:text-[#E6C48A] cursor-pointer">Booking</li>
            <li className="hover:text-[#E6C48A] cursor-pointer">
              Social Media
            </li>
            <li className="hover:text-[#E6C48A] cursor-pointer">About Us</li>
          </ul>
        </div>
      )}

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center justify-between">
        {/* Logo */}
        <img src="" alt="brand-logo" className="h-25 w-auto" />

        {/* Menu */}
        <ul
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="flex gap-8 items-center text-[#3E2723] font-medium"
        >
          <li className="hover:text-[#E6C48A] cursor-pointer">Home</li>
          <li className="hover:text-[#E6C48A] cursor-pointer">Our Services</li>
          <li className="hover:text-[#E6C48A] cursor-pointer">Our Work</li>
          <li className="hover:text-[#E6C48A] cursor-pointer">Booking</li>
          <li className="hover:text-[#E6C48A] cursor-pointer">Social Media</li>
          <li className="hover:text-[#E6C48A] cursor-pointer">About Us</li>
        </ul>

        {/* Phone button */}
        <a
          href="tel:+2348063198345"
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="flex items-center gap-2 px-5 py-2 bg-[#F3C6C6] text-[#3E2723] rounded-full hover:bg-[#F3C6C6]/70"
        >
          <Phone size={18} />
          <span className="text-sm tracking-wide">+234 806 319 8345</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
