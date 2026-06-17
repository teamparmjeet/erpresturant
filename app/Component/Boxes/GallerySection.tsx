"use client";

import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  return (
    <section className="relative border-b border-[#f2e5c8] w-full bg-[#FCFAF5] py-16 md:py-20 flex flex-col items-center overflow-hidden">
      {/* Bulletproof CSS Marquee Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused; 
        }
      `}} />

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-serif text-[#0f2c23] mb-8 md:mb-12">
        Gallery
      </h2>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex">

        {/* The Track: Holds both sets and animates them */}
        <div className="flex w-max animate-scroll hover:cursor-pointer">

          {/* --- SET 1: The original 6 images --- */}
          <div className="flex gap-4 px-2">
            {galleryImages.map((src, index) => (
              <div
                key={`set1-${index}`}
                className="relative w-64 h-48 md:w-64 md:h-48 lg:w-72 lg:h-64 rounded-xl overflow-hidden shrink-0 shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"

                />
              </div>
            ))}
          </div>

          {/* --- SET 2: The clone (This ensures Image 1 follows Image 6 seamlessly) --- */}
          <div className="flex gap-4 px-2" aria-hidden="true">
            {galleryImages.map((src, index) => (
              <div
                key={`set2-${index}`}
                className="relative w-64 h-48 md:w-64 md:h-48 lg:w-72 lg:h-64 rounded-xl overflow-hidden shrink-0 shadow-sm"

              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Floating CTA Button */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link
          href="/Gallery"
          className="px-8 py-3.5 bg-[#FCFAF5] text-[#BE9447] text-xs font-bold tracking-[0.2em] uppercase rounded shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#f4efe3] transition-colors duration-300 border border-[#E8E2D2]"
        >
          View Gallery
        </Link>
      </div>
    </section>
  );
}