"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Star, Users, BedDouble, Maximize, Waves, Wifi, Bath,
    Coffee, Tv, Wind, Briefcase, Shield, Home
} from "lucide-react";

export default function RoomDetail() {
    // --- STATE ---
    const [activeTab, setActiveTab] = useState("Overview");
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // --- MOCK DATA ---
    const room = {
        title: "Luxury Pool Villa",
        price: 34999,
        rating: 4.9,
        reviewsCount: 124,
        description: "Experience the ultimate indulgence in our Luxury Pool Villa. Set amidst lush greenery, this expansive villa offers unparalleled privacy, a stunning private pool, and elegantly designed interiors. Perfect for couples or small families seeking a serene escape with world-class amenities right at your fingertips. Wake up to the sound of nature and unwind in your personal oasis.",
    };

    const images = [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    ];

    const highlights = [
        { icon: Users, label: "2 Guests" },
        { icon: BedDouble, label: "1 King Bed" },
        { icon: Maximize, label: "1200 sq ft" },
        { icon: Waves, label: "Pool Access" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Bath, label: "Bathtub" },
    ];

    const amenities = [
        { icon: Waves, label: "Private Pool" },
        { icon: Home, label: "Smart Home" },
        { icon: Tv, label: "Flat Screen TV" },
        { icon: Wifi, label: "Free WiFi" },
        { icon: Maximize, label: "Balcony" },
        { icon: Coffee, label: "Tea/Coffee Maker" },
        { icon: Wind, label: "Air Conditioning" },
        { icon: Briefcase, label: "Work Desk" },
        { icon: Shield, label: "Safe Locker" },
        { icon: BedDouble, label: "King Size Bed" },
        { icon: Wind, label: "Hair Dryer" },
    ];

    const reviewStats = [
        { stars: 5, percentage: 85 },
        { stars: 4, percentage: 10 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 },
    ];

    const tabs = ["Overview", "Amenities", "Gallery", "Reviews", "Policies"];

    return (
        <div className="min-h-screen bg-[#FCFAF5] pt-12 lg:pt-24 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-[#FCFAF5]">

                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-serif text-[#0f2c23] mb-2 md:mb-4">
                            {room.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-2 md:gap-4">
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-serif text-[#0f2c23] font-bold">
                                    ₹{room.price.toLocaleString("en-IN")}
                                </span>
                                <span className="text-sm text-gray-500 font-medium">/ night</span>
                            </div>
                            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300"></div>
                            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-[#E8E2D2]">
                                <div className="flex text-[#BE9447]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>
                                <span className="text-xs font-semibold text-[#0f2c23]">
                                    {room.rating} <span className="text-gray-500 font-normal">({room.reviewsCount} reviews)</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="w-full md:w-auto px-8 py-3.5 bg-[#0f2c23] text-white text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#1a4a3b] transition-all duration-300 rounded-md shadow-lg shadow-[#0f2c23]/20 shrink-0">
                        Book Now
                    </button>
                </div>

                {/* --- GALLERY SECTION --- */}
                <div className="mb-8 space-y-3">
                    {/* Main Image */}
                    <div className="relative w-full aspect-4/3 md:aspect-21/9 rounded-2xl overflow-hidden shadow-sm">
                        <Image
                            src={images[activeImageIndex]}
                            alt={room.title}
                            fill
                            className="object-cover transition-opacity duration-500"
                            priority
                        />
                    </div>
                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-2 md:gap-3">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveImageIndex(idx)}
                                className={`relative w-full aspect-4/3 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${activeImageIndex === idx
                                    ? "ring-2 ring-[#BE9447] ring-offset-2 ring-offset-[#FCFAF5] opacity-100"
                                    : "opacity-60 hover:opacity-100"
                                    }`}
                            >
                                <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- QUICK HIGHLIGHTS --- */}
                <div className="py-6 border-y border-[#E8E2D2] mb-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
                    <div className="flex justify-between items-center min-w-max md:min-w-0 gap-6 md:gap-4 px-2">
                        {highlights.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center gap-2 text-center group">
                                    <div className="w-12 h-12 rounded-full bg-white border border-[#E8E2D2] flex items-center justify-center text-[#8A8575] group-hover:text-[#BE9447] group-hover:border-[#BE9447] transition-colors shadow-sm">
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-xs font-medium text-gray-600 tracking-wide">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* --- TABS NAVIGATION --- */}
                <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none border-b border-[#E8E2D2] mb-8 sticky top-0 bg-[#FCFAF5] z-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap py-4 px-6 text-sm font-semibold tracking-wider uppercase transition-colors relative ${activeTab === tab
                                ? "text-[#0f2c23]"
                                : "text-gray-400 hover:text-[#8A8575]"
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0f2c23] rounded-t-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* --- TAB CONTENT --- */}
                <div className="min-h-75">

                    {/* Overview Section */}
                    {activeTab === "Overview" && (
                        <section className="animate-in fade-in duration-500">
                            <h2 className="text-2xl font-serif text-[#0f2c23] mb-4">About This Room</h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {room.description}
                            </p>
                        </section>
                    )}

                    {/* Amenities Section */}
                    {activeTab === "Amenities" && (
                        <section className="animate-in fade-in duration-500">
                            <h2 className="text-2xl font-serif text-[#0f2c23] mb-6">Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                                {amenities.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="flex items-center gap-3 text-gray-700">
                                            <Icon size={18} className="text-[#8A8575]" strokeWidth={1.5} />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* Gallery Section Placeholder */}
                    {activeTab === "Gallery" && (
                        <section className="animate-in fade-in duration-500">
                            <h2 className="text-2xl font-serif text-[#0f2c23] mb-6">Full Gallery</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {images.map((img, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden">
                                        <Image src={img} alt={`Gallery Image ${idx}`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Reviews Section */}
                    {activeTab === "Reviews" && (
                        <section className="animate-in fade-in duration-500">
                            <h2 className="text-2xl font-serif text-[#0f2c23] mb-6">Reviews</h2>
                            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white border border-[#E8E2D2] rounded-2xl p-6 md:p-8 shadow-sm">

                                {/* Left Score Card */}
                                <div className="flex flex-col items-center text-center shrink-0">
                                    <span className="text-6xl font-serif text-[#0f2c23] font-bold">{room.rating}</span>
                                    <div className="flex text-[#BE9447] my-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">{room.reviewsCount} Reviews</span>
                                </div>

                                {/* Right Progress Bars */}
                                <div className="flex-1 w-full space-y-3">
                                    {reviewStats.map((stat) => (
                                        <div key={stat.stars} className="flex items-center gap-4 text-sm font-medium text-gray-600">
                                            <span className="w-8 shrink-0">{stat.stars} <Star size={12} className="inline text-[#8A8575] mb-0.5" strokeWidth={2} /></span>
                                            <div className="flex-1 h-2 bg-[#E8E2D2] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-[#0f2c23] rounded-full"
                                                    style={{ width: `${stat.percentage}%` }}
                                                />
                                            </div>
                                            <span className="w-8 shrink-0 text-right">{stat.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Policies Section Placeholder */}
                    {activeTab === "Policies" && (
                        <section className="animate-in fade-in duration-500">
                            <h2 className="text-2xl font-serif text-[#0f2c23] mb-4">Hotel Policies</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>Check-in time is 2:00 PM</li>
                                <li>Check-out time is 11:00 AM</li>
                                <li>Pets are not allowed</li>
                                <li>Smoking is prohibited in all rooms</li>
                            </ul>
                        </section>
                    )}

                </div>
            </div>
        </div>
    );
}