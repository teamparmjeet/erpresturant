"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function page() {
  // 1. State Management
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  // 2. Mock Data (Replace src with your actual image paths)
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

  // 3. Filter Logic
  const filteredImages = activeCategory === "All" 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  // 4. Lightbox Handlers
  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, index });
    document.body.style.overflow = "hidden"; // Prevent background scrolling
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

  // Optional: Keyboard navigation for Lightbox
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
    <div className="min-h-screen bg-[#FCFAF5] pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[#BE9447] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            Visual Journey
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f2c23] leading-tight mb-6">
            Resort Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Explore the breathtaking views, exquisite dining, and luxurious accommodations that await you at Sparsh Canopy Resort.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-[#0f2c23] text-white border-[#0f2c23] shadow-md"
                  : "bg-transparent text-gray-600 border-[#E8E2D2] hover:border-[#BE9447] hover:text-[#BE9447]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Maximize2 className="text-white w-5 h-5" />
                </div>
              </div>

              {/* Tag */}
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-semibold tracking-wider text-[#0f2c23] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {image.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- Fullscreen Lightbox Modal --- */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Top Bar: Counter & Close */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 text-white">
            <span className="font-serif tracking-widest text-sm text-gray-300">
              {lightbox.index + 1} / {filteredImages.length}
            </span>
            <button 
              onClick={closeLightbox}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Previous Button */}
          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm text-white transition-colors z-50"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[85vh] px-16 md:px-24">
            <Image
              src={filteredImages[lightbox.index].src}
              alt={filteredImages[lightbox.index].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm text-white transition-colors z-50"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          {/* Image Caption/Alt Text */}
          <div className="absolute bottom-8 left-0 right-0 text-center z-50">
            <p className="text-white font-serif text-lg md:text-xl tracking-wide drop-shadow-md">
              {filteredImages[lightbox.index].alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}