import Image from "next/image";
import Link from "next/link";
import { BedDouble, Utensils, Castle, Waves, Droplet, Compass } from "lucide-react";

export default function Discover() {
  const features = [
    { name: "Luxury Stay", icon: BedDouble },
    { name: "Fine Dining", icon: Utensils },
    { name: "Events", icon: Castle },
    { name: "Infinity Pool", icon: Waves },
    { name: "Wellness", icon: Droplet },
    { name: "Experiences", icon: Compass },
  ];

  return (
    <section className="w-full border-b border-[#f2e5c8] bg-[#FCFAF5] py-16 md:py-24 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Top Section: Text & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-[#0f2c23] leading-tight">
              Discover Sparsh<br />
              Canopy Resort
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link
              href="/discover"
              className="mt-4 px-8 py-3.5 bg-[#0f2c23] text-white text-xs font-semibold tracking-widest uppercase rounded hover:bg-[#1a4034] transition-colors duration-300 shadow-md"
            >
              Discover More
            </Link>
          </div>

          {/* Right Column: Image with stylized borders */}
          <div className="relative w-full aspect-4/3 md:aspect-3/2 pl-4 pb-4">
            {/* Background decorative shape */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#F3EFE6] rounded-tl-[100px] rounded-br-2xl -z-10"></div>
            
            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden rounded-tl-[80px] rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // Replace with your actual image path
                alt="Sparsh Canopy Resort Pool at Dusk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Features/Icons */}
        <div className="mt-20 md:mt-28">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 mb-4 rounded-full border border-[#E8E2D2] bg-transparent flex items-center justify-center text-[#0f2c23] shadow-sm group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                    <Icon size={28} strokeWidth={1} />
                  </div>
                  {/* Label */}
                  <span className="text-[15px] font-serif text-[#0f2c23]">
                    {feature.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}