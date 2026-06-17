"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Filter } from "lucide-react";

export default function ResortGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const categories = ["All", "Rooms", "Dining", "Pool & Wellness", "Events"];
  
  const allImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Rooms", alt: "Luxury Suite Interior" },
    { id: 2, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Dining", alt: "Fine Dining Restaurant" },
    { id: 3, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Pool & Wellness", alt: "Infinity Pool at Sunset" },
    { id: 4, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Events", alt: "Wedding Setup" },
    { id: 5, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Rooms", alt: "Bathroom with Soaking Tub" },
    { id: 6, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Dining", alt: "Signature Cocktails" },
    { id: 7, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Pool & Wellness", alt: "Spa Treatment Room" },
    { id: 8, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Events", alt: "Corporate Retreat" },
    { id: 9, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", category: "Rooms", alt: "Balcony View" },
  ];

  const filteredImages = activeCategory === "All" 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, index });
    document.body.style.overflow = "hidden"; 
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, index: 0 });
    document.body.style.overflow = "unset";
  };

  const nextImage = (e?: { stopPropagation?: () => void }) => {
    e?.stopPropagation?.();
    setLightbox((prev) => ({ ...prev, index: (prev.index + 1) % filteredImages.length }));
  };

  const prevImage = (e?: { stopPropagation?: () => void }) => {
    e?.stopPropagation?.();
    setLightbox((prev) => ({ 
      ...prev, 
      index: (prev.index - 1 + filteredImages.length) % filteredImages.length 
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.isOpen, filteredImages.length]);

  return (
    <div className="min-h-screen bg-[#FCFAF5] pt-20 md:pt-28 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <span className="text-[#BE9447] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-3 md:mb-4">
            Visual Journey
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2c23] leading-tight mb-4 md:mb-6">
            Resort Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-2">
            Explore the breathtaking views, exquisite dining, and luxurious accommodations that await you at Sparsh Canopy Resort.
          </p>
        </div>

        {/* --- MOBILE-PERFECT FILTER SECTION --- */}
        <div className="flex flex-col items-center mb-10 md:mb-16 w-full">
          <div className="flex items-center gap-2 mb-4 md:mb-6 text-[#8A8575]">
            <Filter size={16} strokeWidth={2} className="md:w-4.5 md:h-4.5" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.15em] uppercase">
              Filter by Category
            </span>
          </div>
          
          {/* Scrollable container for mobile, wrapped for desktop */}
          <div className="w-full max-w-3xl mx-auto relative">
            {/* Added fade gradients for mobile scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-linear-to-r from-[#FCFAF5] to-transparent sm:hidden z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-linear-to-l from-[#FCFAF5] to-transparent sm:hidden z-10 pointer-events-none"></div>
            
            {/* 
              Uses 'overflow-x-auto' and hides scrollbar. 
              On sm screens and up, switches to 'flex-wrap' 
            */}
            <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-2 md:gap-3 p-1.5 md:p-2 bg-white/60 backdrop-blur-sm rounded-full sm:rounded-3xl border border-[#E8E2D2] shadow-sm [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 whitespace-nowrap px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#0f2c23] text-white shadow-md transform sm:scale-105"
                      : "bg-transparent text-gray-600 hover:bg-[#E8E2D2]/50 hover:text-[#BE9447]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* ----------------------------- */}

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-4/3 sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Maximize2 className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>

              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 px-2.5 py-1 md:px-3 md:py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] md:text-xs font-semibold tracking-wider text-[#0f2c23] uppercase opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {image.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- RESPONSIVE FULLSCREEN LIGHTBOX --- */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-md flex items-center justify-center touch-none"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-50 text-white bg-linear-to-b from-black/50 to-transparent">
            <span className="font-serif tracking-widest text-xs md:text-sm text-gray-300">
              {lightbox.index + 1} / {filteredImages.length}
            </span>
            <button 
              onClick={closeLightbox}
              className="p-2 md:p-2.5 bg-white/10 hover:bg-white/25 rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Navigation Controls (Moved closer to edges on mobile) */}
          <button 
            onClick={prevImage}
            className="absolute left-2 md:left-8 p-2 md:p-3 bg-black/20 hover:bg-white/20 rounded-full backdrop-blur-sm text-white transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>

          {/* Main Image Container */}
          <div className="relative w-full h-[70vh] md:h-full max-w-5xl md:max-h-[85vh] px-12 md:px-24">
            <Image
              src={filteredImages[lightbox.index].src}
              alt={filteredImages[lightbox.index].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-2 md:right-8 p-2 md:p-3 bg-black/20 hover:bg-white/20 rounded-full backdrop-blur-sm text-white transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
          </button>

          {/* Image Caption */}
          <div className="absolute bottom-8 md:bottom-10 left-0 right-0 text-center z-50 px-4">
            <p className="text-white font-serif text-base md:text-xl tracking-wide drop-shadow-md">
              {filteredImages[lightbox.index].alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}