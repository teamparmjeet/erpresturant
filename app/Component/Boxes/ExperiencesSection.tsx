import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Waves, PartyPopper, Flower2, Mountain } from "lucide-react";

export default function ExperiencesSection() {
  const experiences = [
    { title: "Pool & Relaxation", icon: Waves, image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
    { title: "Events & Celebrations", icon: PartyPopper, image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
    { title: "Spa & Wellness", icon: Flower2, image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
    { title: "Adventure & Nature", icon: Mountain, image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" },
  ];

  return (
    <section className="w-full border-b border-[#f2e5c8] bg-[#FCFAF5] py-20 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-6">
          <span className="text-[#BE9447] font-semibold tracking-[0.2em] text-sm uppercase">
            Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0f2c23] leading-tight">
            More Than<br />
            Just A Stay
          </h2>
          <div className="w-16 h-0.5 bg-[#BE9447]"></div>
          <p className="text-gray-600 leading-relaxed text-base">
            From sunrise dips to starry night parties – every moment is crafted for memories.
          </p>
          <Link
            href="/experiences"
            className="group inline-flex items-center gap-3 px-6 py-4 bg-[#0f2c23] text-white rounded-full w-fit hover:bg-[#1a4034] transition-all duration-300"
          >
            Explore Experiences
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right: Experience Cards */}
        <div className="w-full  mx-auto  grid grid-cols-2 md:grid-cols-4 gap-4">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="relative group aspect-3/5 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-6">
                  {/* Floating Icon */}
                  <div className="mt-12 text-white/90">
                    <Icon size={48} strokeWidth={1} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-serif text-lg text-center mb-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}