import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wifi, Coffee, Bath, Sun, Waves, Wind } from "lucide-react";

export default function FacilitiesSection() {
  return (
    <div className="w-full bg-[#FCFAF5] flex flex-col">
      
      {/* =========================================
          SECTION 1: LUXURY ROOMS (Collage Left, Text Right)
          ========================================= */}
      <section className="py-20 border-b border-[#f2e5c8] md:py-28 px-4 md:px-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Non-Uniform Room Image Grid */}
         <div className="w-full lg:w-1/2 relative">
  {/* Decorative background shapes - keeping these */}
  <div className="absolute -top-8 right-8 w-64 h-64 border border-[#E8E2D2] rounded-full -z-10"></div>
  
  {/* The new "Hero" grid: 4 columns, 4 rows */}
  <div className="grid grid-cols-4 grid-rows-4 gap-3 aspect-4/3 md:aspect-16/11 w-full rounded-2xl overflow-hidden shadow-xl">
    
    {/* Image 1: Massive Main Focus (Top Left) */}
    <div className="col-span-3 row-span-3 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Resort Infinity Pool - Main Hero"
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>

    {/* Image 2: Tall Accent (Top Right) */}
    <div className="col-span-1 row-span-2 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Resort Infinity Pool - Detail 1"
        fill
       className="object-cover hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 1024px) 25vw, 15vw"
      />
    </div>

    {/* Image 3: Small Square (Bottom Right) */}
    <div className="col-span-1 row-span-2 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Resort Infinity Pool - Detail 2"
        fill
        className="object-cover hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 1024px) 25vw, 15vw"
      />
    </div>

    {/* Image 4: Wide Accent (Bottom Left) */}
    <div className="col-span-3 row-span-1 relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        alt="Resort Infinity Pool - Bar"
        fill
         className="object-cover hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  </div>
</div>

          {/* Right: Room Text Content (unchanged) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <span className="text-[#BE9447] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
              The Accommodation
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0f2c23] leading-tight">
              Your Private<br />
              Sanctuary
            </h2>
            <div className="w-16 h-0.5 bg-[#BE9447] opacity-60"></div>
            <p className="text-gray-600 leading-relaxed text-base">
              Wake up to breathtaking views and the gentle sounds of nature. Our suites are meticulously designed to blend contemporary luxury with natural textures, providing the perfect retreat after a day of exploration.
            </p>
            
            {/* Room Amenities Icons */}
            <div className="flex gap-6 pt-4 pb-2">
              <div className="flex items-center gap-2 text-gray-500">
                <Wifi size={20} strokeWidth={1.5} className="text-[#BE9447]" />
                <span className="text-sm">Free Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Bath size={20} strokeWidth={1.5} className="text-[#BE9447]" />
                <span className="text-sm">Soaking Tub</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Coffee size={20} strokeWidth={1.5} className="text-[#BE9447]" />
                <span className="text-sm">Minibar</span>
              </div>
            </div>

            <Link
              href="/Rooms"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#0f2c23] text-white text-sm font-medium rounded hover:bg-[#1a4034] transition-all duration-300 shadow-md w-fit mt-2"
            >
              Explore Rooms
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================
          SECTION 2: INFINITY POOL (Text Left, Collage Right)
          ========================================= */}
      <section className="py-20 border-b border-[#f2e5c8] md:py-28 px-4 md:px-8  ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Pool Text Content (unchanged) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <span className="text-[#BE9447] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
              Leisure & Relaxation
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0f2c23] leading-tight">
              Dive Into<br />
              Serenity
            </h2>
            <div className="w-16 h-0.5 bg-[#BE9447] opacity-60"></div>
            <p className="text-gray-600 leading-relaxed text-base">
              Immerse yourself in our temperature-controlled infinity pool. Whether you prefer swimming morning laps as the sun rises or lounging with a signature cocktail at dusk, this is your oasis of tranquility.
            </p>
            
            {/* Pool Amenities Icons */}
            <div className="flex gap-6 pt-4 pb-2">
              <div className="flex items-center gap-2 text-gray-500">
                <Waves size={20} strokeWidth={1.5} className="text-[#BE9447]" />
                <span className="text-sm">Infinity Edge</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Sun size={20} strokeWidth={1.5} className="text-[#BE9447]" />
                <span className="text-sm">Sun Deck</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Wind size={20} strokeWidth={1.5} className="text-[#BE9447]" />
                <span className="text-sm">Poolside Bar</span>
              </div>
            </div>

            <Link
              href="/experiences"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-transparent border border-[#0f2c23] text-[#0f2c23] text-sm font-medium rounded hover:bg-[#0f2c23] hover:text-white transition-all duration-300 w-fit mt-2"
            >
              Discover More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Non-Uniform Pool Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative background shapes - keeping these */}
            <div className="absolute -top-8 right-8 w-64 h-64 border border-[#E8E2D2] rounded-full -z-10"></div>
            
            {/* The new non-uniform collage grid */}
            <div className="grid grid-cols-6 grid-rows-3 gap-3 aspect-4/3 md:aspect-16/11 w-full rounded-2xl overflow-hidden shadow-xl">
              
              {/* Image 1: Tall Left (e.g., poolside view) */}
              <div className="col-span-2 row-span-3 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // Replace with another unique pool image
                  alt="Resort Infinity Pool - Overview"
                  fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Image 2: Wide Top (e.g., sunset by pool) */}
              <div className="col-span-4 row-span-1 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // Primary pool image (existing)
                  alt="Resort Infinity Pool - Sunset"
                  fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Image 3: Medium Rectangle (e.g., lounge area) */}
              <div className="col-span-2 row-span-2 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // Replace with another unique pool image
                  alt="Resort Infinity Pool - Lounge"
                  fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Image 4: Medium Rectangle (e.g., poolside bar) */}
              <div className="col-span-2 row-span-2 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // Replace with another unique pool image
                  alt="Resort Infinity Pool - Bar"
                  fill
                   className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Floating Info Card (unchanged positioning) */}
            <div className="absolute -bottom-6 md:-bottom-10 -left-4 md:-left-10 bg-[#FCFAF5] p-4 md:p-6 rounded-xl shadow-lg border border-[#E8E2D2] max-w-50 md:max-w-60">
              <p className="font-serif text-[#0f2c23] text-sm md:text-base font-medium leading-snug">
                "An unforgettable evening watching the sunset by the pool."
              </p>
              <div className="flex gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-[#BE9447]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}