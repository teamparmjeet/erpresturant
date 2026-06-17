"use client";

import { useState } from "react";
import Image from "next/image";
import { Filter, X, Maximize, Users } from "lucide-react";

export default function page() {
  // --- STATE MANAGEMENT ---
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(100000);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["All"]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  // --- MOCK DATA ---
  const roomTypes = ["All", "Standard Room", "Deluxe Room", "Suite", "Villa"];
  const amenitiesList = ["Free WiFi", "Pool Access", "Balcony", "Bathtub", "Work Desk", "Mini Bar"];

  const rooms = [
    {
      id: 1,
      name: "Premium Garden Room",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      size: "350 Sqft",
      capacity: "2-3 Adults seating",
      price: 22999,
      type: "Standard Room",
      amenities: ["Free WiFi", "Work Desk", "Mini Bar"],
    },
    {
      id: 2,
      name: "Luxury Pool Villa",
      image: "https://images.unsplash.com/photo-1582719478250-c89404bb8a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      size: "450 Sqft",
      capacity: "2-3 Adults seating",
      price: 34299,
      type: "Villa",
      amenities: ["Free WiFi", "Pool Access", "Bathtub", "Mini Bar"],
    },
    {
      id: 3,
      name: "Canopy Suite",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      size: "650 Sqft",
      capacity: "4-5 Adults seating",
      price: 44999,
      type: "Suite",
      amenities: ["Free WiFi", "Balcony", "Bathtub", "Work Desk", "Mini Bar"],
    },
    {
      id: 4,
      name: "Royal Villa",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      size: "850 Sqft",
      capacity: "4-6 Adults seating",
      price: 59999,
      type: "Villa",
      amenities: ["Free WiFi", "Pool Access", "Balcony", "Bathtub", "Mini Bar"],
    },
  ];

  // --- FILTER LOGIC ---
  const handleTypeToggle = (type: string) => {
    if (type === "All") {
      setSelectedTypes(["All"]);
      return;
    }
    let newTypes = selectedTypes.filter((t) => t !== "All");
    if (newTypes.includes(type)) {
      newTypes = newTypes.filter((t) => t !== type);
    } else {
      newTypes.push(type);
    }
    if (newTypes.length === 0) newTypes = ["All"];
    setSelectedTypes(newTypes);
  };

  const handleAmenityToggle = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const filteredRooms = rooms.filter((room) => {
    const matchesPrice = room.price <= priceRange;
    const matchesType = selectedTypes.includes("All") || selectedTypes.includes(room.type);
    const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every((a) => room.amenities.includes(a));
    return matchesPrice && matchesType && matchesAmenities;
  });

  // --- REUSABLE COMPONENTS ---
  const FilterContent = () => (
    <div className="space-y-8">
      {/* Price Range */}
      <div>
        <h3 className="font-serif text-[#0f2c23] font-semibold mb-4">Price Range</h3>
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-[#BE9447] h-1.5 bg-[#E8E2D2] rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
          <span>₹0</span>
          <span>₹{priceRange.toLocaleString("en-IN")}+</span>
        </div>
      </div>

      <hr className="border-[#E8E2D2]" />

      {/* Room Type */}
      <div>
        <h3 className="font-serif text-[#0f2c23] font-semibold mb-4">Room Type</h3>
        <div className="space-y-3">
          {roomTypes.map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeToggle(type)}
                className="w-4 h-4 rounded border-gray-300 text-[#BE9447] focus:ring-[#BE9447] accent-[#BE9447] cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-[#BE9447] transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-[#E8E2D2]" />

      {/* Amenities */}
      <div>
        <h3 className="font-serif text-[#0f2c23] font-semibold mb-4">Amenities</h3>
        <div className="space-y-3">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleAmenityToggle(amenity)}
                className="w-4 h-4 rounded border-gray-300 text-[#BE9447] focus:ring-[#BE9447] accent-[#BE9447] cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-[#BE9447] transition-colors">
                {amenity}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FCFAF5] pt-12 lg:pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 border-b border-[#E8E2D2] pb-6">
          <h1 className="text-3xl md:text-5xl font-serif text-[#0f2c23]">Accommodations</h1>
          
          {/* Mobile Filter Trigger */}
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="mt-4 md:mt-0 lg:hidden flex items-center gap-2 px-6 py-2.5 bg-white border border-[#E8E2D2] rounded-full text-sm font-semibold text-[#0f2c23] shadow-sm hover:border-[#BE9447] transition-colors"
          >
            <Filter size={16} className="text-[#BE9447]" />
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* --- DESKTOP SIDEBAR --- */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28 h-fit">
            <h2 className="text-xl font-serif text-[#0f2c23] mb-6 border-b border-[#E8E2D2] pb-4">
              Filter By
            </h2>
            <FilterContent />
          </aside>

          {/* --- MOBILE FILTER DRAWER --- */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-100 lg:hidden">
              {/* Overlay */}
              <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={() => setIsMobileFilterOpen(false)}
              />
              
              {/* Drawer */}
              <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-[#FCFAF5] shadow-2xl overflow-y-auto transform transition-transform">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-8 border-b border-[#E8E2D2] pb-4">
                    <h2 className="text-xl font-serif text-[#0f2c23]">Filter By</h2>
                    <button 
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="p-2 text-gray-500 hover:text-[#0f2c23] hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <FilterContent />
                  
                  {/* View Results Button for Mobile */}
                  <div className="mt-8 pt-6 border-t border-[#E8E2D2] sticky bottom-0 bg-[#FCFAF5]">
                    <button 
                      onClick={() => setIsMobileFilterOpen(false)}
                      className="w-full py-3 bg-[#0f2c23] text-white rounded-md font-semibold tracking-wider text-sm hover:bg-[#1a4a3b] transition-colors"
                    >
                      SHOW {filteredRooms.length} ROOMS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --- ROOM LISTINGS --- */}
          <main className="flex-1 space-y-6">
            {filteredRooms.length === 0 ? (
              <div className="text-center py-20 bg-white/50 rounded-xl border border-[#E8E2D2]">
                <h3 className="text-xl font-serif text-[#0f2c23] mb-2">No rooms found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more results.</p>
                <button 
                  onClick={() => {
                    setPriceRange(100000);
                    setSelectedTypes(["All"]);
                    setSelectedAmenities([]);
                  }}
                  className="mt-4 px-6 py-2 border border-[#BE9447] text-[#BE9447] rounded-full hover:bg-[#BE9447] hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredRooms.map((room) => (
                <div 
                  key={room.id}
                  className="flex flex-col md:flex-row bg-[#fdfdf9] border border-[#f0ecdf] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative w-full md:w-[320px] lg:w-95 h-64 md:h-auto shrink-0">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-serif text-[#0f2c23] mb-4">
                      {room.name}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#8A8575] mb-6">
                      <div className="flex items-center gap-1.5">
                        <Maximize size={16} className="text-[#BE9447]" />
                        <span>{room.size}</span>
                      </div>
                      <div className="hidden md:block w-1 h-1 rounded-full bg-[#E8E2D2]"></div>
                      <div className="flex items-center gap-1.5">
                        <Users size={16} className="text-[#BE9447]" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="mt-auto">
                      <div className="mb-4">
                        <span className="text-2xl font-serif text-[#0f2c23] font-bold">
                          ₹{room.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-sm text-gray-500 font-medium ml-1">/ night</span>
                      </div>
                      <button className="px-8 py-2.5 border border-[#E8E2D2] text-[#0f2c23] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#0f2c23] hover:text-white hover:border-[#0f2c23] transition-all duration-300 rounded">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </main>

        </div>
      </div>
    </div>
  );
}