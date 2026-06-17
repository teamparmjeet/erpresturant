"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarDays } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // For dynamic active state routing

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/Rooms" },
    // { name: "Dining", href: "/dining" },
    // { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/Gallery" },
    // { name: "Offers", href: "/offers" },
    // { name: "Contact", href: "/contact" },
  ];

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="relative w-full z-50 bg-transparent">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between py-0.5">
        
        {/* Logo */}
        <Link href="/" className="z-10 flex items-center group relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
          <Image 
            src="/image/logo.png" 
            alt="Brand Logo" 
            width={80} height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#BE9447]"
                    : "text-gray-600 hover:text-[#0f2c23]"
                }`}
              >
                {link.name}
                {/* Active Underline Indicator */}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#BE9447] rounded-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions (CTA + Hamburger) */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Desktop Book Now Button */}
          <Link
            href="/book"
            className="hidden sm:flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-[#0f2c23] rounded-lg hover:bg-[#1a4034] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <CalendarDays size={16} strokeWidth={1.5} />
            <span>Book Now</span>
          </Link>

          {/* Hamburger Menu Toggle (Mobile & Tablet) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 text-gray-800 hover:text-[#BE9447] transition-colors lg:hidden"
            aria-label="Open Menu"
          >
            <Menu className="w-7 h-7" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Left-Side Drawer Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-[#FCFAF5] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header (Logo & Close Button) */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <div className="relative w-12 h-12">
            <Image 
              src="/image/logo.png" 
              alt="Brand Logo" 
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-800 hover:text-[#BE9447] transition-colors bg-gray-100 rounded-full"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-3 border-b border-gray-100 transition-colors ${
                  isActive ? "text-[#BE9447]" : "text-gray-700 hover:text-[#0f2c23]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer (Mobile CTA) */}
        <div className="p-6 border-t border-gray-200 sm:hidden bg-white">
          <Link
            href="/book"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#0f2c23] text-white text-base font-medium rounded-lg shadow-md hover:bg-[#1a4034] transition-colors"
          >
            <CalendarDays size={18} strokeWidth={1.5} />
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}