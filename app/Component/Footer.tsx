"use client"
import Image from "next/image";
import Link from "next/link";
import {   MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Our Rooms", href: "/rooms" },
    { name: "Dining Experience", href: "/dining" },
    { name: "Wellness & Spa", href: "/wellness" },
    { name: "Resort Gallery", href: "/gallery" },
    { name: "Special Offers", href: "/offers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#0f2c23] pt-20 md:pt-28 pb-8 px-4 md:px-8 border-t-[8px] border-[#BE9447]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-6 lg:pr-8">
            <Link href="/" className="relative w-24 h-24 sm:w-28 sm:h-28 grayscale brightness-200 contrast-100">
              <Image 
                src="/image/logo.png" 
                alt="Sparsh Canopy Resort Logo" 
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the perfect harmony of luxury and nature. Sparsh Canopy Resort offers an unforgettable escape into serenity, complete with world-class amenities and pristine surroundings.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white font-serif text-xl tracking-wide">Explore</h4>
            <ul className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#BE9447] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#BE9447] transition-all duration-300 group-hover:w-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white font-serif text-xl tracking-wide">Contact</h4>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#BE9447] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>123 Canopy Valley Road,<br />Highland District, HL 45678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#BE9447] shrink-0" strokeWidth={1.5} />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#BE9447] shrink-0" strokeWidth={1.5} />
                <span>reservations@sparshresort.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white font-serif text-xl tracking-wide">Newsletter</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to receive exclusive offers and updates on our latest experiences.
            </p>
            <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-[#1a4034] text-white placeholder-gray-500 text-sm px-4 py-3.5 rounded outline-none focus:ring-1 focus:ring-[#BE9447] transition-all border border-transparent focus:border-[#BE9447]"
                required
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#BE9447] text-white rounded hover:bg-[#a67c33] transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-[#1a4034] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Sparsh Canopy Resort. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-gray-400 hover:text-[#BE9447] transition-colors" aria-label="Facebook">
              <MapPin size={20} strokeWidth={1.5} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#BE9447] transition-colors" aria-label="Instagram">
              <MapPin size={20} strokeWidth={1.5} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#BE9447] transition-colors" aria-label="Twitter">
              <MapPin size={20} strokeWidth={1.5} />
            </Link>
          </div>

          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-[#BE9447] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#BE9447] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}