import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DiningSection() {
    return (
        <section className="w-full border-b border-[#f2e5c8] bg-[#FCFAF5] py-20 md:py-28 px-4 md:px-8 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Left Column: Image & Badge */}
                <div className="relative w-full lg:w-[55%]">
                    {/* Main Image */}
                    <div className="relative aspect-4/3 md:aspect-16/10 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" // Replace with your actual image path
                            alt="Elegant restaurant interior with warm lighting"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                    </div>

                    {/* Overlapping Circular Badge */}
                    <div className="absolute -bottom-6 -right-4 md:-bottom-12 md:-right-12 w-36 h-36 md:w-48 md:h-48   flex flex-col items-center justify-center   z-10 ">

                        {/* Custom Sunburst SVG Motif */}
                        <div className=" ">
                            <Image
                                src="/image/logo.png"
                                alt="Brand Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                    </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="w-full lg:w-[45%] flex flex-col space-y-6 lg:pr-8 pt-8 lg:pt-0">

                    {/* Subheading */}
                    <span className="text-[#BE9447] font-semibold tracking-[0.15em] text-xs md:text-sm uppercase">
                        Dine With Elegance
                    </span>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-[#0f2c23] leading-[1.1] uppercase">
                        Exquisite Cuisine<br />
                        Unforgettable Taste
                    </h2>

                    {/* Decorative Divider Line */}
                    <div className="w-12 h-0.5 bg-[#BE9447] opacity-60"></div>

                    {/* Paragraph */}
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-md">
                        Savor a culinary journey with our multi-cuisine restaurant & bar.<br />
                        Fresh ingredients. Expert chefs.<br />
                        Perfect ambiance.
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <Link
                            href="/dining"
                            className="group inline-flex items-center gap-4 px-6 py-3 bg-[#0f2c23] text-white rounded-full w-fit hover:bg-[#1a4034] transition-all duration-300 shadow-md"
                        >
                            <span className="text-sm font-medium">Explore Dining</span>
                            {/* Arrow in Circle */}
                            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                                <ArrowRight size={16} strokeWidth={1.5} />
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}